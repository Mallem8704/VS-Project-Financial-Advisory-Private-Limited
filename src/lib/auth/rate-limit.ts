export interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitRecord {
  timestamps: number[];
}

const memoryStore = new Map<string, RateLimitRecord>();

// Clean up expired entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of memoryStore.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < 15 * 60 * 1000);
      if (record.timestamps.length === 0) {
        memoryStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);

  if (interval.unref) {
    interval.unref();
  }
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions = { windowMs: 60 * 1000, maxRequests: 5 }
): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const record = memoryStore.get(key) || { timestamps: [] };

  // Filter timestamps within current window
  const windowStart = now - options.windowMs;
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= options.maxRequests) {
    const oldest = record.timestamps[0];
    const resetAt = oldest + options.windowMs;
    const retryAfterSeconds = Math.max(1, Math.ceil((resetAt - now) / 1000));

    return {
      allowed: false,
      remaining: 0,
      resetAt,
      retryAfterSeconds,
    };
  }

  record.timestamps.push(now);
  memoryStore.set(key, record);

  const resetAt = now + options.windowMs;
  const remaining = options.maxRequests - record.timestamps.length;

  return {
    allowed: true,
    remaining,
    resetAt,
    retryAfterSeconds: 0,
  };
}

export function resetRateLimit(key: string): void {
  memoryStore.delete(key);
}
