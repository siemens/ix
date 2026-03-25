import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
const dataIxTheme = "data-ix-theme";
const dataIxColorSchema = "data-ix-color-schema";
class ThemeSwitcher {
  prefixTheme = "theme-";
  suffixLight = "-light";
  suffixDark = "-dark";
  defaultTheme = "theme-classic-dark";
  mutationObserver;
  themeChanged = new TypedEvent();
  schemaChanged = new TypedEvent();
  hasVariantSuffix(className) {
    return className.endsWith(this.suffixDark) || className.endsWith(this.suffixLight);
  }
  isThemeClass(className) {
    return className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className);
  }
  getMode() {
    const colorSchema = document.documentElement.dataset.ixColorSchema;
    if (colorSchema === "dark" || colorSchema === "light") {
      return colorSchema;
    }
    const bodyThemeClass = this.getThemeClassFromBody();
    if (bodyThemeClass) {
      return bodyThemeClass.endsWith(this.suffixDark) ? "dark" : "light";
    }
    return getCurrentSystemAppearance();
  }
  getThemeClassFromBody() {
    if (!document.body) {
      return void 0;
    }
    return (document.body.className || "").split(" ").find((cls) => cls && this.isThemeClass(cls));
  }
  setTheme(themeName, systemAppearance = false) {
    if (this.isThemeClass(themeName)) {
      this.replaceThemeClass(themeName);
    } else {
      document.documentElement.dataset.ixTheme = themeName;
    }
    if (systemAppearance) {
      this.setVariant();
    }
  }
  replaceThemeClass(themeName) {
    const oldThemes = Array.from(document.documentElement.classList).filter((cls) => this.isThemeClass(cls));
    document.documentElement.classList.remove(...oldThemes);
    document.documentElement.classList.add(themeName);
  }
  toggleMode() {
    if (document.documentElement.hasAttribute(dataIxColorSchema)) {
      const currentSchema = document.documentElement.dataset.ixColorSchema;
      document.documentElement.dataset.ixColorSchema = currentSchema === "dark" ? "light" : "dark";
      return;
    }
    const bodyThemeClass = this.getThemeClassFromBody();
    if (bodyThemeClass) {
      const newTheme = bodyThemeClass.replace(/-(dark|light)$/, (m) => m === "-dark" ? "-light" : "-dark");
      document.body.classList.remove(bodyThemeClass);
      document.body.classList.add(newTheme);
      this.themeChanged.emit(newTheme);
      this.schemaChanged.emit(newTheme.endsWith(this.suffixDark) ? "dark" : "light");
      return;
    }
    const newMode = this.defaultTheme.endsWith(this.suffixDark) ? "light" : "dark";
    if (!document.documentElement.hasAttribute(dataIxTheme)) {
      document.documentElement.dataset.ixTheme = "classic";
    }
    document.documentElement.dataset.ixColorSchema = newMode;
  }
  getCurrentTheme() {
    const bodyThemeClass = this.getThemeClassFromBody();
    return bodyThemeClass ?? `theme-${document.documentElement.dataset.ixTheme || "classic"}-${document.documentElement.dataset.ixColorSchema || getCurrentSystemAppearance()}`;
  }
  setVariant(variant = getCurrentSystemAppearance()) {
    if (document.documentElement.dataset.ixColorSchema) {
      document.documentElement.dataset.ixColorSchema = variant;
      return;
    }
    const bodyThemeClass = this.getThemeClassFromBody();
    if (bodyThemeClass) {
      const newTheme = bodyThemeClass.replace(/-(dark|light)$/, `-${variant}`);
      document.body.classList.remove(bodyThemeClass);
      document.body.classList.add(newTheme);
      this.themeChanged.emit(newTheme);
      this.schemaChanged.emit(variant);
      return;
    }
    if (!document.documentElement.hasAttribute(dataIxTheme)) {
      document.documentElement.dataset.ixTheme = "classic";
    }
    document.documentElement.dataset.ixColorSchema = variant;
  }
  splitMutations(mutations) {
    const classMutations = mutations.filter((mutation) => mutation.attributeName === "class");
    const dataMutations = mutations.filter((mutation) => mutation.attributeName === dataIxTheme || mutation.attributeName === dataIxColorSchema);
    return { classMutations, dataMutations };
  }
  handleClassMutations(mutations) {
    mutations.forEach((mutation) => {
      const { target } = mutation;
      target.classList.forEach((className) => {
        if (this.isThemeClass(className) && !mutation.oldValue?.includes(className)) {
          this.themeChanged.emit(className);
        }
      });
    });
  }
  handleDataMutations(mutations) {
    mutations.forEach((mutation) => {
      const { target } = mutation;
      const theme = target.attributes.getNamedItem(dataIxTheme);
      if (theme?.value && mutation.oldValue !== theme.value) {
        this.themeChanged.emit(theme.value);
      }
      const colorSchema = target.attributes.getNamedItem(dataIxColorSchema);
      if (colorSchema?.value && mutation.oldValue !== colorSchema.value) {
        this.schemaChanged.emit(colorSchema.value);
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
  destroy() {
    this.mutationObserver?.disconnect();
  }
}
const getCurrentSystemAppearance = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const themeSwitcher = new ThemeSwitcher();
export {
  themeSwitcher as t
};
