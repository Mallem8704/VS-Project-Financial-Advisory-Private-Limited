import {
  generateBase32Secret,
  generateTotpCode,
  verifyTotpCode,
  generateBackupCodes,
  hashToken,
} from './crypto';

export interface MfaSetupData {
  secret: string;
  otpauthUrl: string;
  backupCodes: string[];
  hashedBackupCodes: string[];
}

export function initializeMfaSetup(userEmail: string): MfaSetupData {
  const secret = generateBase32Secret(20);
  const encodedIssuer = encodeURIComponent('VS Project & Financial Advisory');
  const encodedAccount = encodeURIComponent(userEmail);
  const otpauthUrl =
    'otpauth://totp/' + encodedIssuer + ':' + encodedAccount + '?secret=' + secret + '&issuer=' + encodedIssuer + '&algorithm=SHA1&digits=6&period=30';
  const { rawCodes, hashedCodes } = generateBackupCodes(8);

  return {
    secret,
    otpauthUrl,
    backupCodes: rawCodes,
    hashedBackupCodes: hashedCodes,
  };
}

export function validateMfaToken(secret: string, token: string): boolean {
  return verifyTotpCode(secret, token);
}

export function validateBackupCode(
  rawCode: string,
  storedHashedCodes: string[]
): { valid: boolean; remainingCodes: string[] } {
  const normalized = rawCode.trim().toUpperCase();
  const incomingHash = hashToken(normalized);

  const matchIndex = storedHashedCodes.findIndex((h) => h === incomingHash);
  if (matchIndex === -1) {
    return { valid: false, remainingCodes: storedHashedCodes };
  }

  const remainingCodes = [...storedHashedCodes];
  remainingCodes.splice(matchIndex, 1);
  return { valid: true, remainingCodes };
}
