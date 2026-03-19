class Animation {
  static #FALLBACKS = {
    short: 0,
    default: 150,
    medium: 300,
    slow: 500,
    xslow: 1e3
  };
  static #cache = null;
  static ensureCache() {
    if (this.#cache !== null)
      return;
    if (typeof window === "undefined") {
      this.#cache = { ...this.#FALLBACKS };
      return;
    }
    const root = document.documentElement || document.body;
    const styles = window.getComputedStyle(root);
    const read = (varName, fallback) => {
      const raw = styles.getPropertyValue(varName)?.trim();
      if (!raw)
        return fallback;
      return Number.isFinite(raw) ? Number(raw) : fallback;
    };
    this.#cache = {
      short: read("--theme-short-time", this.#FALLBACKS.short),
      default: read("--theme-default-time", this.#FALLBACKS.default),
      medium: read("--theme-medium-time", this.#FALLBACKS.medium),
      slow: read("--theme-slow-time", this.#FALLBACKS.slow),
      xslow: read("--theme-xslow-time", this.#FALLBACKS.xslow)
    };
  }
  static prefersReducedMotion() {
    if (typeof window === "undefined" || !window.matchMedia)
      return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  static get shortTime() {
    this.ensureCache();
    const t = this.#cache.short;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get defaultTime() {
    this.ensureCache();
    const t = this.#cache.default;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get mediumTime() {
    this.ensureCache();
    const t = this.#cache.medium;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get slowTime() {
    this.ensureCache();
    const t = this.#cache.slow;
    return this.prefersReducedMotion() ? 0 : t;
  }
  static get xSlowTime() {
    this.ensureCache();
    const t = this.#cache.xslow;
    return this.prefersReducedMotion() ? 0 : t;
  }
}
export {
  Animation as A
};
