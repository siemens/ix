export default class Animation {
  static readonly #FALLBACKS = {
    short: 0,
    default: 150,
    medium: 300,
    slow: 500,
    xslow: 1000,
  } as const;

  static #cache: {
    short: number;
    default: number;
    medium: number;
    slow: number;
    xslow: number;
  } | null = null;

  private static parseTime(raw: string, fallback: number) {
    const value = raw.trim();

    if (value.length === 0) return fallback;

    const match = value.match(/^(-?\d*\.?\d+)(ms|s)?$/);

    if (!match) return fallback;

    const [, amount, unit = 'ms'] = match;
    const parsed = Number(amount);

    if (!Number.isFinite(parsed)) return fallback;

    return unit === 's' ? parsed * 1000 : parsed;
  }

  private static ensureCache() {
    if (this.#cache !== null) return this.#cache;

    if (typeof window === 'undefined') {
      // SSR only
      this.#cache = { ...this.#FALLBACKS };
      return this.#cache;
    }

    const root = document.documentElement || document.body;
    const styles = window.getComputedStyle(root);

    const read = (varName: string, fallback: number) => {
      const raw = styles.getPropertyValue(varName)?.trim();
      if (!raw) return fallback;
      return this.parseTime(raw, fallback);
    };

    this.#cache = {
      short: read('--theme-short-time', this.#FALLBACKS.short),
      default: read('--theme-default-time', this.#FALLBACKS.default),
      medium: read('--theme-medium-time', this.#FALLBACKS.medium),
      slow: read('--theme-slow-time', this.#FALLBACKS.slow),
      xslow: read('--theme-x-slow-time', this.#FALLBACKS.xslow),
    };

    return this.#cache;
  }

  static prefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  static get shortTime() {
    const t = this.ensureCache().short;
    return this.prefersReducedMotion() ? 0 : t;
  }

  static get defaultTime() {
    const t = this.ensureCache().default;
    return this.prefersReducedMotion() ? 0 : t;
  }

  static get mediumTime() {
    const t = this.ensureCache().medium;
    return this.prefersReducedMotion() ? 0 : t;
  }

  static get slowTime() {
    const t = this.ensureCache().slow;
    return this.prefersReducedMotion() ? 0 : t;
  }

  static get xSlowTime() {
    const t = this.ensureCache().xslow;
    return this.prefersReducedMotion() ? 0 : t;
  }
}
