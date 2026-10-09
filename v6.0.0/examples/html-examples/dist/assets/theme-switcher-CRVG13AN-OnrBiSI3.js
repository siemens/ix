import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
class ThemeSwitcher {
  mutationObserver;
  mediaQueryList;
  emitThemeChange(isMediaChange) {
    this.themeChanged.emit({
      theme: this.getTheme(),
      colorSchema: this.getColorSchema(),
      mode: this.getMode(),
      isMediaChange
    });
  }
  handleMediaQueryChange = () => {
    this.emitThemeChange(true);
  };
  themeChanged = new TypedEvent();
  /**
   * @internal
   */
  getComputedStyleColorSchema() {
    return this.getComputedStyleProperty("--theme-color-schema");
  }
  getComputedStyleTheme() {
    return this.getComputedStyleProperty("--theme-name");
  }
  getComputedStyleProperty(propertyName) {
    const computedStyleValue = getComputedStyle(document.documentElement).getPropertyValue(propertyName).trim();
    return computedStyleValue || void 0;
  }
  getColorSchema() {
    const colorSchema = document.documentElement.dataset.ixColorSchema;
    if (colorSchema === "dark" || colorSchema === "light" || colorSchema === "system") {
      return colorSchema;
    }
    const resolvedColorSchema = this.getComputedStyleColorSchema();
    if (resolvedColorSchema === "dark" || resolvedColorSchema === "light" || resolvedColorSchema === "system") {
      return resolvedColorSchema;
    }
    return "system";
  }
  getMode() {
    const colorSchema = this.getColorSchema();
    if (colorSchema === "dark" || colorSchema === "light") {
      return colorSchema;
    }
    return getCurrentSystemAppearance();
  }
  setTheme(themeName, colorSchema) {
    document.documentElement.dataset.ixTheme = themeName;
    if (!colorSchema) {
      this.setColorSchema(this.getColorSchema());
      return;
    }
    this.setColorSchema(colorSchema);
  }
  toggleMode() {
    const newMode = this.getMode() === "dark" ? "light" : "dark";
    document.documentElement.dataset.ixColorSchema = newMode;
  }
  getTheme() {
    const currentTheme = document.documentElement.dataset.ixTheme;
    if (!currentTheme) {
      const fallbackTheme = this.getComputedStyleTheme();
      if (fallbackTheme) {
        return fallbackTheme;
      }
    }
    return currentTheme;
  }
  setColorSchema(variant = getCurrentSystemAppearance()) {
    document.documentElement.dataset.ixColorSchema = variant;
  }
  constructor() {
    if (typeof window === "undefined" || !window.MutationObserver || !window.matchMedia) {
      return;
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "data-ix-theme" || mutation.attributeName === "data-ix-color-schema") {
            this.emitThemeChange(false);
          }
        }
      });
    });
    this.mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    this.mediaQueryList.addEventListener("change", this.handleMediaQueryChange);
    this.mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-ix-theme", "data-ix-color-schema"]
    });
  }
  destroy() {
    this.mutationObserver?.disconnect();
    this.mediaQueryList?.removeEventListener("change", this.handleMediaQueryChange);
  }
}
const getCurrentSystemAppearance = () => typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light";
const themeSwitcher = new ThemeSwitcher();
export {
  themeSwitcher as t
};
