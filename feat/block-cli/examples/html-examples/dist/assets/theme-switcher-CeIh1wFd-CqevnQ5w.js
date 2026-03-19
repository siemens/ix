import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
const dataIxTheme = "data-ix-theme";
const dataIxColorSchema = "data-ix-color-schema";
class ThemeSwitcher {
  prefixTheme = "theme-";
  suffixLight = "-light";
  suffixDark = "-dark";
  defaultTheme = "theme-classic-dark";
  mutationObserver;
  _themeChanged = new TypedEvent();
  _schemaChanged = new TypedEvent();
  get themeChanged() {
    return this._themeChanged;
  }
  get schemaChanged() {
    return this._schemaChanged;
  }
  hasVariantSuffix(className) {
    return className.endsWith(this.suffixDark) || className.endsWith(this.suffixLight);
  }
  isThemeClass(className) {
    return className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className);
  }
  setTheme(themeName, systemAppearance = false) {
    if (this.isThemeClass(themeName)) {
      this.replaceThemeClass(themeName);
    } else {
      document.documentElement.setAttribute(dataIxTheme, themeName);
    }
    if (systemAppearance) {
      const currentSystemAppearance = getCurrentSystemAppearance();
      this.setVariant(currentSystemAppearance);
    }
  }
  replaceThemeClass(themeName) {
    const oldThemes = [];
    Array.from(document.documentElement.classList).filter((className) => className && this.isThemeClass(className)).forEach((className) => {
      oldThemes.push(className);
    });
    document.documentElement.classList.remove(...oldThemes);
    document.documentElement.classList.add(themeName);
  }
  toggleMode() {
    if (document.documentElement.hasAttribute(dataIxColorSchema)) {
      const currentSchema = this.getDataColorSchema(document.documentElement);
      document.documentElement.setAttribute(dataIxColorSchema, currentSchema === "dark" ? "light" : "dark");
      return;
    }
    const oldThemes = [];
    Array.from(document.documentElement.classList).filter((className) => className && this.isThemeClass(className)).forEach((className) => {
      oldThemes.push(className);
    });
    if (oldThemes.length === 0) {
      document.documentElement.classList.add(this.getOppositeMode(this.defaultTheme));
      return;
    }
    oldThemes.forEach((themeName) => {
      document.documentElement.classList.replace(themeName, this.getOppositeMode(themeName));
    });
  }
  getDataColorSchema(target) {
    return target.getAttribute(dataIxColorSchema);
  }
  getCurrentTheme() {
    return Array.from(document.documentElement.classList).find((className) => this.isThemeClass(className)) ?? `theme-${document.documentElement.getAttribute(dataIxTheme) || "classic"}-${document.documentElement.getAttribute(dataIxColorSchema) || getCurrentSystemAppearance()}`;
  }
  setVariant(variant = getCurrentSystemAppearance()) {
    if (this.getDataColorSchema(document.documentElement)) {
      document.documentElement.setAttribute(dataIxColorSchema, variant);
      return;
    }
    const currentTheme = this.getCurrentTheme();
    document.documentElement.classList.remove(currentTheme);
    if (currentTheme.endsWith(this.suffixDark)) {
      document.documentElement.classList.add(currentTheme.replace(/-dark$/g, `-${variant}`));
    }
    if (currentTheme.endsWith(this.suffixLight)) {
      document.documentElement.classList.add(currentTheme.replace(/-light$/g, `-${variant}`));
    }
    document.documentElement.setAttribute(dataIxColorSchema, variant);
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
  splitMutations(mutations) {
    const classMutations = mutations.filter((mutation) => mutation.attributeName === "class");
    const dataMutations = mutations.filter((mutation) => mutation.attributeName === dataIxTheme || mutation.attributeName === dataIxColorSchema);
    return { classMutations, dataMutations };
  }
  handleClassMutations(mutations) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      target.classList.forEach((className) => {
        if (this.isThemeClass(className) && !mutation.oldValue?.includes(className)) {
          this._themeChanged.emit(className);
        }
      });
    });
  }
  handleDataMutations(mutations) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      const theme = target.attributes.getNamedItem(dataIxTheme);
      if (theme?.value && mutation.oldValue !== theme.value) {
        this._themeChanged.emit(theme.value);
      }
      const colorSchema = target.attributes.getNamedItem(dataIxColorSchema);
      if (colorSchema?.value && mutation.oldValue !== colorSchema.value) {
        this._schemaChanged.emit(colorSchema.value);
      }
    });
  }
  registerMutationObservers() {
    if (typeof window === "undefined") {
      return;
    }
    if (!("MutationObserver" in window)) {
      console.warn("ThemeSwitcher not supported by your browser. Missing MutationObserver API");
      return;
    }
    const mutationObserverConfig = {
      attributeFilter: ["class", dataIxTheme, dataIxColorSchema],
      attributeOldValue: true
    };
    const handleMutations = (mutations) => {
      const { classMutations, dataMutations } = this.splitMutations(mutations);
      this.handleClassMutations(classMutations);
      this.handleDataMutations(dataMutations);
    };
    this.mutationObserver = new MutationObserver(handleMutations);
    this.mutationObserver.observe(document.documentElement, mutationObserverConfig);
  }
  constructor() {
    this.registerMutationObservers();
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
