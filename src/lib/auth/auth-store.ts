import { UserRole } from '@/types';
import { prisma } from '@/lib/db/prisma';
import { hashPassword, hashToken, generateSecureToken } from './crypto';
import { evaluateFailedLogin, isAccountLocked } from './lockout';

export interface StoredUser {
  id: string;
  email: string;
  passwordHash: string;
  fullName: string;
  role: UserRole;
  phone?: string | null;
  isMfaEnabled: boolean;
  mfaSecret?: string | null;
  backupCodes: string[];
  failedLoginAttempts: number;
  lockedUntil: Date | null;
  emailVerified: Date | null;
  status: string;
  lastLoginAt: Date | null;
  lastLoginIp: string | null;
  companyName?: string | null;
}

export interface StoredSession {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  ipAddress?: string | null;
  userAgent?: string | null;
  isRevoked: boolean;
  createdAt: Date;
}

export interface StoredResetToken {
  id: string;
  userId: string;
  tokenHash: string;
  expiresAt: Date;
  usedAt: Date | null;
}

export interface StoredVerificationToken {
  id: string;
  userId: string;
  tokenHash: string;
  expiresAt: Date;
  usedAt: Date | null;
}

// In-Memory store for offline, CI, build, and test environments
const inMemUsers = new Map<string, StoredUser>();
const inMemSessions = new Map<string, StoredSession>();
const inMemResetTokens = new Map<string, StoredResetToken>();
const inMemVerificationTokens = new Map<string, StoredVerificationToken>();

// Pre-seed demo institutional accounts
let isSeeded = false;
async function seedDefaultAccounts() {
  if (isSeeded) return;
  isSeeded = true;

  const defaultHash = await hashPassword('Password@123');

  const defaultStaff: Array<{ email: string; role: UserRole; name: string }> = [
    { email: 'superadmin@vsadvisory.com', role: 'SUPER_ADMIN', name: 'Dr. V. Singhania' },
    { email: 'director@vsadvisory.com', role: 'DIRECTOR', name: 'Rajesh Singhania' },
    { email: 'admin@vsadvisory.com', role: 'ADMIN', name: 'S. Nambiar (Admin)' },
    { email: 'advisor@vsadvisory.com', role: 'ADVISOR', name: 'Vikram Mehta (Lead Advisor)' },
    { email: 'analyst@vsadvisory.com', role: 'FINANCIAL_ANALYST', name: 'Ananya Roy (CMA Analyst)' },
    { email: 'docexec@vsadvisory.com', role: 'DOCUMENT_EXECUTIVE', name: 'Kavita Verma' },
    { email: 'rm@vsadvisory.com', role: 'RELATIONSHIP_MANAGER', name: 'Priya Sundaram' },
    { email: 'content@vsadvisory.com', role: 'CONTENT_MANAGER', name: 'Arjun Deshmukh' },
    { email: 'support@vsadvisory.com', role: 'SUPPORT', name: 'Helpdesk Support' },
    { email: 'client@enterprise.com', role: 'CLIENT', name: 'Rajesh Sharma (Apex Engineering)' },
  ];

  for (const acc of defaultStaff) {
    const user: StoredUser = {
      id: 'usr-' + acc.role.toLowerCase().replace(/_/g, '-'),
      email: acc.email.toLowerCase(),
      passwordHash: defaultHash,
      fullName: acc.name,
      role: acc.role,
      phone: '+91 98765 43210',
      isMfaEnabled: acc.role === 'SUPER_ADMIN' || acc.role === 'DIRECTOR',
      mfaSecret: 'JBSWY3DPEHPK3PXP', // sample test secret
      backupCodes: [],
      failedLoginAttempts: 0,
      lockedUntil: null,
      emailVerified: new Date(),
      status: 'ACTIVE',
      lastLoginAt: new Date(),
      lastLoginIp: '127.0.0.1',
      companyName: acc.role === 'CLIENT' ? 'Apex Precision Engineering Pvt Ltd' : 'VS Project & Financial Advisory',
    };
    inMemUsers.set(user.email, user);
  }
}

// Trigger initial seed
seedDefaultAccounts();

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  await seedDefaultAccounts();
  const normalized = email.trim().toLowerCase();

  // Try DB first if configured
  try {
    if (process.env.DATABASE_URL && prisma && prisma.user) {
      const dbUser = await prisma.user.findUnique({
        where: { email: normalized },
        include: { companyProfile: true },
      });
      if (dbUser) {
        return {
          id: dbUser.id,
          email: dbUser.email,
          passwordHash: dbUser.passwordHash,
          fullName: dbUser.fullName,
          role: dbUser.role as UserRole,
          phone: dbUser.phone,
          isMfaEnabled: dbUser.isMfaEnabled,
          mfaSecret: dbUser.mfaSecret,
          backupCodes: dbUser.backupCodesJson ? JSON.parse(dbUser.backupCodesJson) : [],
          failedLoginAttempts: dbUser.failedLoginAttempts,
          lockedUntil: dbUser.lockedUntil,
          emailVerified: dbUser.emailVerified,
          status: dbUser.status,
          lastLoginAt: dbUser.lastLoginAt,
          lastLoginIp: dbUser.lastLoginIp,
          companyName: dbUser.companyProfile?.companyName || null,
        };
      }
    }
  } catch {
    // Fall back to memory
  }

  return inMemUsers.get(normalized) || null;
}

export async function findUserById(id: string): Promise<StoredUser | null> {
  await seedDefaultAccounts();
  for (const user of inMemUsers.values()) {
    if (user.id === id) return user;
  }
  return null;
}

export async function createUser(data: {
  email: string;
  passwordHash: string;
  fullName: string;
  role?: UserRole;
  phone?: string;
  companyName?: string;
}): Promise<StoredUser> {
  await seedDefaultAccounts();
  const normalized = data.email.trim().toLowerCase();
  const newUser: StoredUser = {
    id: 'usr-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    email: normalized,
    passwordHash: data.passwordHash,
    fullName: data.fullName,
    role: data.role || 'CLIENT',
    phone: data.phone || null,
    isMfaEnabled: false,
    mfaSecret: null,
    backupCodes: [],
    failedLoginAttempts: 0,
    lockedUntil: null,
    emailVerified: null,
    status: 'ACTIVE',
    lastLoginAt: null,
    lastLoginIp: null,
    companyName: data.companyName || null,
  };

  inMemUsers.set(normalized, newUser);

  try {
    if (process.env.DATABASE_URL && prisma && prisma.user) {
      await prisma.user.create({
        data: {
          id: newUser.id,
          email: newUser.email,
          passwordHash: newUser.passwordHash,
          fullName: newUser.fullName,
          role: newUser.role as any,
          phone: newUser.phone,
          isMfaEnabled: false,
          status: 'ACTIVE',
        },
      });
    }
  } catch {
    // memory store retains user
  }

  return newUser;
}

export async function updateUserRole(userId: string, newRole: UserRole): Promise<boolean> {
  const user = await findUserById(userId);
  if (!user) return false;
  user.role = newRole;
  inMemUsers.set(user.email, user);

  try {
    if (process.env.DATABASE_URL && prisma && prisma.user) {
      await prisma.user.update({
        where: { id: userId },
        data: { role: newRole as any },
      });
    }
  } catch {}

  return true;
}

export async function recordLoginAttempt(
  user: StoredUser,
  success: boolean,
  ipAddress?: string
): Promise<{ isLocked: boolean; lockedUntil: Date | null; remainingAttempts: number }> {
  if (success) {
    user.failedLoginAttempts = 0;
    user.lockedUntil = null;
    user.lastLoginAt = new Date();
    user.lastLoginIp = ipAddress || null;
    inMemUsers.set(user.email, user);
    return { isLocked: false, lockedUntil: null, remainingAttempts: 5 };
  }

  const evalResult = evaluateFailedLogin(user.failedLoginAttempts);
  user.failedLoginAttempts = evalResult.newAttempts;
  user.lockedUntil = evalResult.lockedUntil;
  inMemUsers.set(user.email, user);

  return {
    isLocked: evalResult.isLockedNow,
    lockedUntil: evalResult.lockedUntil,
    remainingAttempts: evalResult.remainingAttempts,
  };
}

export async function createPasswordResetToken(userId: string): Promise<string> {
  const rawToken = generateSecureToken(32);
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  const record: StoredResetToken = {
    id: 'reset-' + Date.now(),
    userId,
    tokenHash,
    expiresAt,
    usedAt: null,
  };

  inMemResetTokens.set(tokenHash, record);
  return rawToken;
}

export async function verifyAndConsumeResetToken(rawToken: string, newPasswordHash: string): Promise<boolean> {
  const tokenHash = hashToken(rawToken);
  const record = inMemResetTokens.get(tokenHash);
  if (!record) return false;
  if (record.usedAt) return false;
  if (record.expiresAt.getTime() < Date.now()) return false;

  record.usedAt = new Date();
  const user = await findUserById(record.userId);
  if (!user) return false;

  user.passwordHash = newPasswordHash;
  user.failedLoginAttempts = 0;
  user.lockedUntil = null;
  inMemUsers.set(user.email, user);

  // Invalidate all active sessions for this user on password reset
  for (const [key, session] of inMemSessions.entries()) {
    if (session.userId === user.id) {
      session.isRevoked = true;
      inMemSessions.set(key, session);
    }
  }

  return true;
}

export async function createEmailVerificationToken(userId: string): Promise<string> {
  const rawToken = generateSecureToken(32);
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  const record: StoredVerificationToken = {
    id: 'verify-' + Date.now(),
    userId,
    tokenHash,
    expiresAt,
    usedAt: null,
  };

  inMemVerificationTokens.set(tokenHash, record);
  return rawToken;
}

export async function verifyAndConsumeEmailToken(rawToken: string): Promise<boolean> {
  const tokenHash = hashToken(rawToken);
  const record = inMemVerificationTokens.get(tokenHash);
  if (!record) return false;
  if (record.usedAt) return false;
  if (record.expiresAt.getTime() < Date.now()) return false;

  record.usedAt = new Date();
  const user = await findUserById(record.userId);
  if (!user) return false;

  user.emailVerified = new Date();
  inMemUsers.set(user.email, user);
  return true;
}
