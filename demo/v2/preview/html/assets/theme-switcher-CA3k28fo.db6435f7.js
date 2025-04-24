import { T as TypedEvent } from "./typed-event-BdCnOrqW.51d2f30a.js";
class ThemeSwitcher {
  get themeChanged() {
    return this._themeChanged;
  }
  hasVariantSuffix(className) {
    return className.endsWith(this.suffixDark) || className.endsWith(this.suffixLight);
  }
  isThemeClass(className) {
    return className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className);
  }
  setTheme(themeName, systemAppearance = false) {
    if (!this.isThemeClass(themeName) && systemAppearance === false) {
      throw Error(`Provided theme name ${themeName} does not match our naming conventions. (theme-<name>-(dark,light))`);
    }
    if (systemAppearance) {
      const currentSystemAppearance = getCurrentSystemAppearance();
      this.replaceBodyThemeClass(themeName);
      this.setVariant(currentSystemAppearance);
      return;
    }
    this.replaceBodyThemeClass(themeName);
  }
  replaceBodyThemeClass(themeName) {
    const oldThemes = [];
    document.body.classList.forEach((className) => {
      if (this.isThemeClass(className)) {
        oldThemes.push(className);
      }
    });
    document.body.classList.remove(...oldThemes);
    document.body.classList.add(themeName);
  }
  toggleMode() {
    const oldThemes = [];
    document.body.classList.forEach((className) => {
      if (this.isThemeClass(className)) {
        oldThemes.push(className);
      }
    });
    if (oldThemes.length === 0) {
      document.body.classList.add(this.getOppositeMode(this.defaultTheme));
      return;
    }
    oldThemes.forEach((themeName) => {
      document.body.classList.replace(themeName, this.getOppositeMode(themeName));
    });
  }
  getCurrentTheme() {
    var _a;
    return (_a = Array.from(document.body.classList).find((className) => this.isThemeClass(className))) !== null && _a !== void 0 ? _a : `theme-${window.getComputedStyle(document.body).getPropertyValue("--ix-theme-name")}`;
  }
  setVariant(variant = getCurrentSystemAppearance()) {
    const currentTheme = this.getCurrentTheme();
    document.body.classList.remove(currentTheme);
    if (currentTheme.endsWith(this.suffixDark)) {
      document.body.classList.add(currentTheme.replace(/-dark$/g, `-${variant}`));
    }
    if (currentTheme.endsWith(this.suffixLight)) {
      document.body.classList.add(currentTheme.replace(/-light$/g, `-${variant}`));
    }
  }
  getOppositeMode(themeName) {
    if (themeName.endsWith(this.suffixDark)) {
      return themeName.replace(/-dark$/g, this.suffixLight);
    }
    if (themeName.endsWith(this.suffixLight)) {
      return themeName.replace(/-light$/g, this.suffixDark);
    }
    return "";
  }
  handleMutations(mutations) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      target.classList.forEach((className) => {
        var _a;
        if (this.isThemeClass(className) && !((_a = mutation.oldValue) === null || _a === void 0 ? void 0 : _a.includes(className))) {
          this._themeChanged.emit(className);
        }
      });
    });
  }
  registerMutationObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (!("MutationObserver" in window)) {
      console.warn("ThemeSwitcher not supported by your browser. Missing MutationObserver API");
      return;
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      this.handleMutations(mutations);
    });
    this.mutationObserver.observe(document.body, {
      attributeFilter: ["class"],
      attributeOldValue: true
    });
  }
  constructor() {
    this.prefixTheme = "theme-";
    this.suffixLight = "-light";
    this.suffixDark = "-dark";
    this.defaultTheme = "theme-classic-dark";
    this._themeChanged = new TypedEvent();
    this.registerMutationObserver();
  }
}
const getCurrentSystemAppearance = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (matchMedia.matches) {
    return "dark";
  }
  return "light";
};
const themeSwitcher = new ThemeSwitcher();
export {
  themeSwitcher as t
};
