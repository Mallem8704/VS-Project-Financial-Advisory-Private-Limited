import assert from 'node:assert';
import { hashPassword, verifyPassword, generateSecureToken, generateBase32Secret, generateTotpCode, verifyTotpCode, generateBackupCodes } from './crypto';
import { hasPermission, getRolePermissions, ALL_PERMISSIONS } from '@/server/permissions/rbac';
import { checkRateLimit, resetRateLimit } from './rate-limit';
import { evaluateFailedLogin, isAccountLocked, getRemainingLockoutSeconds } from './lockout';
import { signSession, verifySession } from './session';
import { initializeMfaSetup, validateBackupCode } from './mfa';
import { logAuditEvent, AUDIT_ACTIONS, getRecentAuditLogs } from './audit';
import { canAccessDocument } from './server-guard';
import { UserRole } from '@/types';

async function runAuthTests() {
  console.log('================================================================');
  console.log('Running VS Production Auth & RBAC Architecture Verification Suite');
  console.log('================================================================\n');

  // Test 1: Cryptographic Password Hashing & Timing-Safe Verification
  console.log('Test 1: Testing Node Scrypt Password Hashing & Timing-Safe Verification...');
  const password = 'SuperSecureSecret@2026';
  const hash = await hashPassword(password);
  assert(hash.startsWith('scrypt:'), 'Hash must start with scrypt: prefix');
  const valid = await verifyPassword(password, hash);
  assert.strictEqual(valid, true, 'Valid password must verify successfully');
  const invalid = await verifyPassword('WrongPassword', hash);
  assert.strictEqual(invalid, false, 'Invalid password must return false');
  console.log('✔ Password hashing & verification passed.\n');

  // Test 2: Centralized RBAC Matrix Across All 10 Roles
  console.log('Test 2: Verifying Centralized RBAC Matrix across all 10 roles...');
  
  // 2a: SUPER_ADMIN has every single permission
  for (const perm of ALL_PERMISSIONS) {
    assert.strictEqual(hasPermission('SUPER_ADMIN', perm), true, 'SUPER_ADMIN must have ' + perm);
  }

  // 2b: DIRECTOR has executive overview but not low-level destructive/user actions
  assert.strictEqual(hasPermission('DIRECTOR', 'projects.view'), true);
  assert.strictEqual(hasPermission('DIRECTOR', 'audit.view'), true);
  assert.strictEqual(hasPermission('DIRECTOR', 'audit.export'), true);
  assert.strictEqual(hasPermission('DIRECTOR', 'users.manage'), false);
  assert.strictEqual(hasPermission('DIRECTOR', 'documents.delete'), false);

  // 2c: ADMIN has user management and operational administration
  assert.strictEqual(hasPermission('ADMIN', 'users.manage'), true);
  assert.strictEqual(hasPermission('ADMIN', 'projects.create'), true);
  assert.strictEqual(hasPermission('ADMIN', 'clients.create'), true);

  // 2d: ADVISOR has DPR and CMA preparation
  assert.strictEqual(hasPermission('ADVISOR', 'dpr.create'), true);
  assert.strictEqual(hasPermission('ADVISOR', 'cma.create'), true);
  assert.strictEqual(hasPermission('ADVISOR', 'documents.review'), true);
  assert.strictEqual(hasPermission('ADVISOR', 'users.manage'), false);

  // 2e: FINANCIAL_ANALYST has CMA modelling and DPR drafting
  assert.strictEqual(hasPermission('FINANCIAL_ANALYST', 'cma.calculate'), true);
  assert.strictEqual(hasPermission('FINANCIAL_ANALYST', 'dpr.create'), true);
  assert.strictEqual(hasPermission('FINANCIAL_ANALYST', 'clients.create'), false);
  assert.strictEqual(hasPermission('FINANCIAL_ANALYST', 'users.manage'), false);

  // 2f: DOCUMENT_EXECUTIVE has document review & verification
  assert.strictEqual(hasPermission('DOCUMENT_EXECUTIVE', 'documents.verify'), true);
  assert.strictEqual(hasPermission('DOCUMENT_EXECUTIVE', 'documents.review'), true);
  assert.strictEqual(hasPermission('DOCUMENT_EXECUTIVE', 'dpr.create'), false);
  assert.strictEqual(hasPermission('DOCUMENT_EXECUTIVE', 'cma.create'), false);

  // 2g: RELATIONSHIP_MANAGER has leads & client intake
  assert.strictEqual(hasPermission('RELATIONSHIP_MANAGER', 'leads.manage'), true);
  assert.strictEqual(hasPermission('RELATIONSHIP_MANAGER', 'clients.create'), true);
  assert.strictEqual(hasPermission('RELATIONSHIP_MANAGER', 'documents.verify'), false);
  assert.strictEqual(hasPermission('RELATIONSHIP_MANAGER', 'dpr.create'), false);

  // 2h: CONTENT_MANAGER has knowledge CMS publishing
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'knowledge.publish'), true);
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'knowledge.create'), true);
  assert.strictEqual(hasPermission('CONTENT_MANAGER', 'projects.create'), false);

  // 2i: SUPPORT has helpdesk and view access
  assert.strictEqual(hasPermission('SUPPORT', 'clients.view'), true);
  assert.strictEqual(hasPermission('SUPPORT', 'users.manage'), false);

  // 2j: CLIENT has portal access but strictly no staff/management permissions
  assert.strictEqual(hasPermission('CLIENT', 'documents.upload'), true);
  assert.strictEqual(hasPermission('CLIENT', 'invoices.pay'), true);
  assert.strictEqual(hasPermission('CLIENT', 'documents.verify'), false);
  assert.strictEqual(hasPermission('CLIENT', 'users.manage'), false);
  assert.strictEqual(hasPermission('CLIENT', 'audit.view'), false);

  // 2k: Legacy colon-notation compatibility
  assert.strictEqual(hasPermission('SUPER_ADMIN', 'projects:read'), true);
  assert.strictEqual(hasPermission('ADVISOR', 'dpr:generate'), true);
  assert.strictEqual(hasPermission('CLIENT', 'users:manage'), false);

  console.log('✔ RBAC permission matrix verified for all 10 roles.\n');

  // Test 3: Sliding-Window Rate Limiter
  console.log('Test 3: Testing Sliding-Window Rate Limiter...');
  const rateKey = 'test-ip-127.0.0.1';
  resetRateLimit(rateKey);

  // 3 requests allowed with limit of 3
  assert.strictEqual(checkRateLimit(rateKey, { windowMs: 10000, maxRequests: 3 }).allowed, true);
  assert.strictEqual(checkRateLimit(rateKey, { windowMs: 10000, maxRequests: 3 }).allowed, true);
  assert.strictEqual(checkRateLimit(rateKey, { windowMs: 10000, maxRequests: 3 }).allowed, true);
  
  // 4th request must be blocked
  const blocked = checkRateLimit(rateKey, { windowMs: 10000, maxRequests: 3 });
  assert.strictEqual(blocked.allowed, false, '4th request must be blocked');
  assert(blocked.retryAfterSeconds > 0, 'Must provide retry seconds');
  console.log('✔ Rate limiter sliding-window enforcement verified.\n');

  // Test 4: Account Lockout Policy (5 failed attempts)
  console.log('Test 4: Testing Account Lockout Policy...');
  let attempts = 0;
  for (let i = 1; i <= 4; i++) {
    const res = evaluateFailedLogin(attempts);
    attempts = res.newAttempts;
    assert.strictEqual(res.isLockedNow, false, 'Attempt ' + i + ' should not lock account');
  }

  // 5th attempt must trigger lock
  const lockTrigger = evaluateFailedLogin(attempts);
  assert.strictEqual(lockTrigger.isLockedNow, true, '5th failed attempt must trigger lock');
  assert(lockTrigger.lockedUntil !== null, 'lockedUntil must be set');
  assert.strictEqual(isAccountLocked({ failedLoginAttempts: 5, lockedUntil: lockTrigger.lockedUntil }), true);
  assert(getRemainingLockoutSeconds(lockTrigger.lockedUntil) > 800, 'Lockout must be ~15 minutes');
  console.log('✔ Account lockout threshold and countdown verified.\n');

  // Test 5: TOTP MFA Engine (RFC 6238) & Backup Codes
  console.log('Test 5: Testing TOTP MFA Engine & Backup Codes...');
  const secret = generateBase32Secret(20);
  const totpCode = generateTotpCode(secret);
  assert.strictEqual(totpCode.length, 6, 'TOTP code must be 6 digits');
  assert.strictEqual(verifyTotpCode(secret, totpCode), true, 'Generated TOTP code must verify');
  assert.strictEqual(verifyTotpCode(secret, '999999'), false, 'Random incorrect code must fail');

  // Backup codes
  const { rawCodes, hashedCodes } = generateBackupCodes(4);
  assert.strictEqual(rawCodes.length, 4);
  const backupCheck = validateBackupCode(rawCodes[0], hashedCodes);
  assert.strictEqual(backupCheck.valid, true, 'Valid backup code must be accepted');
  assert.strictEqual(backupCheck.remainingCodes.length, 3, 'Consumed backup code must be removed');
  console.log('✔ TOTP MFA engine and backup codes verified.\n');

  // Test 6: Web Crypto Session Management
  console.log('Test 6: Testing Web Crypto HMAC Session Tokens...');
  const sessionToken = await signSession({
    sub: 'usr-12345',
    email: 'advisor@vsadvisory.com',
    role: 'ADVISOR',
    name: 'Vikram Mehta',
    sessionId: 'sess-abc',
    isMfaVerified: true,
  });

  const verifiedSession = await verifySession(sessionToken);
  assert(verifiedSession !== null, 'Session must verify');
  assert.strictEqual(verifiedSession.sub, 'usr-12345');
  assert.strictEqual(verifiedSession.role, 'ADVISOR');

  // Tampered token check
  const tamperedToken = sessionToken.slice(0, -5) + 'xxxxx';
  const tamperedResult = await verifySession(tamperedToken);
  assert.strictEqual(tamperedResult, null, 'Tampered token must be rejected');
  console.log('✔ Session signing, verification, and tamper protection verified.\n');

  // Test 7: Audit Event Logging Engine
  console.log('Test 7: Testing Forensic Audit Event Dispatching...');
  await logAuditEvent({
    actorId: 'usr-12345',
    actorEmail: 'advisor@vsadvisory.com',
    actorRole: 'ADVISOR',
    action: AUDIT_ACTIONS.SENSITIVE_DOCUMENT_ACCESSED,
    resource: 'Document',
    resourceId: 'doc-999',
    ipAddress: '192.168.1.50',
    userAgent: 'Mozilla/5.0 Test Suite',
    metadata: { test: true },
  });

  const recentLogs = getRecentAuditLogs(5);
  const found = recentLogs.find((l) => l.action === AUDIT_ACTIONS.SENSITIVE_DOCUMENT_ACCESSED);
  assert(found !== undefined, 'Audit log event must be recorded in buffer');
  assert.strictEqual(found.resourceId, 'doc-999');
  console.log('✔ Audit logging engine verified.\n');

  // Test 8: Document Access Guard
  console.log('Test 8: Testing Sensitive Document Authorization Guard...');
  const clientUser = {
    sub: 'usr-client-1',
    email: 'client@enterprise.com',
    role: 'CLIENT' as UserRole,
    name: 'Client User',
    sessionId: 's1',
    iat: 0,
    exp: 9999999999,
  };

  const staffUser = {
    sub: 'usr-advisor-1',
    email: 'advisor@vsadvisory.com',
    role: 'ADVISOR' as UserRole,
    name: 'Advisor User',
    sessionId: 's2',
    iat: 0,
    exp: 9999999999,
  };

  const ownDoc = { uploadedByUserId: 'usr-client-1', projectId: 'PRJ-1' };
  const otherClientDoc = { uploadedByUserId: 'usr-client-2', projectId: 'PRJ-2' };

  assert.strictEqual(canAccessDocument(clientUser, ownDoc), true, 'Client can access own document');
  assert.strictEqual(canAccessDocument(clientUser, otherClientDoc), false, 'Client cannot access other document');
  assert.strictEqual(canAccessDocument(staffUser, otherClientDoc), true, 'Staff can access client documents');
  console.log('✔ Sensitive document access guard verified.\n');

  console.log('----------------------------------------------------------------');
  console.log('ALL 8 AUTH & RBAC VERIFICATION TEST SUITES PASSED (100% SUCCESS)!');
  console.log('----------------------------------------------------------------');
}

runAuthTests().catch((err) => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
