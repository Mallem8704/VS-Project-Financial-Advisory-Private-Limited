export const MAX_FAILED_ATTEMPTS = 5;
export const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

export interface LockoutTarget {
  failedLoginAttempts: number;
  lockedUntil: Date | string | null;
}

export function isAccountLocked(target: LockoutTarget): boolean {
  if (!target.lockedUntil) return false;
  const lockedUntilDate = new Date(target.lockedUntil);
  return lockedUntilDate.getTime() > Date.now();
}

export function getRemainingLockoutSeconds(lockedUntil: Date | string | null): number {
  if (!lockedUntil) return 0;
  const diffMs = new Date(lockedUntil).getTime() - Date.now();
  return Math.max(0, Math.ceil(diffMs / 1000));
}

export function evaluateFailedLogin(currentAttempts: number): {
  newAttempts: number;
  isLockedNow: boolean;
  lockedUntil: Date | null;
  remainingAttempts: number;
} {
  const newAttempts = currentAttempts + 1;
  if (newAttempts >= MAX_FAILED_ATTEMPTS) {
    const lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MS);
    return {
      newAttempts,
      isLockedNow: true,
      lockedUntil,
      remainingAttempts: 0,
    };
  }
  return {
    newAttempts,
    isLockedNow: false,
    lockedUntil: null,
    remainingAttempts: Math.max(0, MAX_FAILED_ATTEMPTS - newAttempts),
  };
}
