'use strict';

const typedEvent = require('./typed-event-5030cc6a.js');

class ThemeSwitcher {
  constructor() {
    this.prefixTheme = 'theme-';
    this.suffixLight = '-light';
    this.suffixDark = '-dark';
    this.defaultTheme = 'theme-classic-dark';
    this._themeChanged = new typedEvent.TypedEvent();
    this.registerMutationObserver();
  }
  get themeChanged() {
    return this._themeChanged;
  }
  hasVariantSuffix(className) {
    return (className.endsWith(this.suffixDark) ||
      className.endsWith(this.suffixLight));
  }
  isThemeClass(className) {
    return (className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className));
  }
  setTheme(themeName) {
    if (!this.isThemeClass(themeName)) {
      throw Error(`Provided theme name ${themeName} does not match our naming conventions. (theme-<name>-(dark,light))`);
    }
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
  getOppositeMode(themeName) {
    if (themeName.endsWith(this.suffixDark)) {
      return themeName.replace(/-dark$/g, this.suffixLight);
    }
    if (themeName.endsWith(this.suffixLight)) {
      return themeName.replace(/-light$/g, this.suffixDark);
    }
  }
  handleMutations(mutations) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      target.classList.forEach((className) => {
        var _a;
        if (this.isThemeClass(className) &&
          !((_a = mutation.oldValue) === null || _a === void 0 ? void 0 : _a.includes(className))) {
          this._themeChanged.emit(className);
        }
      });
    });
  }
  registerMutationObserver() {
    if (typeof window === 'undefined') {
      return;
    }
    if (!('MutationObserver' in window)) {
      console.warn('ThemeSwitcher not supported by your browser. Missing MutationObserver API');
      return;
    }
    this.mutationObserver = new MutationObserver((mutations) => {
      this.handleMutations(mutations);
    });
    this.mutationObserver.observe(document.body, {
      attributeFilter: ['class'],
      attributeOldValue: true,
    });
  }
}
const themeSwitcher = new ThemeSwitcher();

exports.ThemeSwitcher = ThemeSwitcher;
exports.themeSwitcher = themeSwitcher;
