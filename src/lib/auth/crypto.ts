import crypto from 'crypto';

/**
 * Standard password hashing using Node native scrypt.
 * Output format: scrypt:<saltHex>:<hashHex>
 */
export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, { N: 16384, r: 8, p: 1 }, (err, derivedKey) => {
      if (err) return reject(err);
      resolve("scrypt:" + salt + ":" + derivedKey.toString("hex"));
    });
  });
}

/**
 * Timing-safe password verification
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!storedHash || !storedHash.startsWith('scrypt:')) {
      // Handle legacy or plain text fallback if any
      return resolve(false);
    }
    const parts = storedHash.split(':');
    if (parts.length !== 3) return resolve(false);
    const [, salt, expectedHashHex] = parts;
    const expectedBuffer = Buffer.from(expectedHashHex, 'hex');

    crypto.scrypt(password, salt, expectedBuffer.length, { N: 16384, r: 8, p: 1 }, (err, derivedKey) => {
      if (err) return resolve(false);
      try {
        const isMatch = crypto.timingSafeEqual(expectedBuffer, derivedKey);
        resolve(isMatch);
      } catch {
        resolve(false);
      }
    });
  });
}

/**
 * Generates cryptographically secure random token (default 32 bytes = 64 hex chars)
 */
export function generateSecureToken(bytes = 32): string {
  return crypto.randomBytes(bytes).toString('hex');
}

/**
 * SHA-256 hash of a token for secure database storage
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Base32 character set for RFC 3548 / RFC 6238 TOTP
const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function generateBase32Secret(length = 20): string {
  const bytes = crypto.randomBytes(length);
  let secret = '';
  for (let i = 0; i < bytes.length; i++) {
    secret += BASE32_ALPHABET[bytes[i] % BASE32_ALPHABET.length];
  }
  return secret;
}

function base32ToBuffer(base32: string): Buffer {
  const cleaned = base32.toUpperCase().replace(/[^A-Z2-7]/g, '');
  let bits = '';
  for (let i = 0; i < cleaned.length; i++) {
    const val = BASE32_ALPHABET.indexOf(cleaned[i]);
    bits += val.toString(2).padStart(5, '0');
  }
  const bytes: number[] = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.substring(i, i + 8), 2));
  }
  return Buffer.from(bytes);
}

/**
 * Generates 6-digit TOTP code for a given timestamp and base32 secret (RFC 6238)
 */
export function generateTotpCode(secret: string, timestampMs = Date.now(), stepSeconds = 30): string {
  const epochStep = Math.floor(timestampMs / 1000 / stepSeconds);
  const timeBuffer = Buffer.alloc(8);
  timeBuffer.writeBigInt64BE(BigInt(epochStep), 0);

  const key = base32ToBuffer(secret);
  const hmac = crypto.createHmac('sha1', key).update(timeBuffer).digest();

  const offset = hmac[hmac.length - 1] & 0x0f;
  const binary =
    ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);

  const otp = binary % 1000000;
  return otp.toString().padStart(6, '0');
}

/**
 * Verifies TOTP code against secret, allowing +/- 1 window drift (30 seconds before/after)
 */
export function verifyTotpCode(secret: string, code: string, timestampMs = Date.now(), windowSteps = 1): boolean {
  if (!code || code.trim().length !== 6) return false;
  const cleanCode = code.trim();
  const stepSeconds = 30;

  for (let offset = -windowSteps; offset <= windowSteps; offset++) {
    const checkTime = timestampMs + offset * stepSeconds * 1000;
    const expected = generateTotpCode(secret, checkTime, stepSeconds);
    if (crypto.timingSafeEqual(Buffer.from(cleanCode), Buffer.from(expected))) {
      return true;
    }
  }
  return false;
}

/**
 * Generates 8 random alphanumeric backup codes
 */
export function generateBackupCodes(count = 8): { rawCodes: string[]; hashedCodes: string[] } {
  const rawCodes: string[] = [];
  const hashedCodes: string[] = [];

  for (let i = 0; i < count; i++) {
    const raw = crypto.randomBytes(5).toString("hex").toUpperCase();
    rawCodes.push(raw.slice(0, 5) + "-" + raw.slice(5));
    hashedCodes.push(hashToken(rawCodes[i]));
  }

  return { rawCodes, hashedCodes };
}
