import { type LiteralStringUnion } from './type-helper';
import { TypedEvent } from './typed-event';

export type ThemeVariant = 'light' | 'dark';

class ThemeSwitcher {
  readonly prefixTheme = 'theme-';
  readonly suffixLight = '-light';
  readonly suffixDark = '-dark';
  readonly defaultTheme = 'theme-classic-dark';

  mutationObserver?: MutationObserver;
  _themeChanged = new TypedEvent<string>();

  public get themeChanged() {
    return this._themeChanged;
  }

  public hasVariantSuffix(className: string) {
    return (
      className.endsWith(this.suffixDark) ||
      className.endsWith(this.suffixLight)
    );
  }

  private isThemeClass(className: string) {
    return (
      className.startsWith(this.prefixTheme) && this.hasVariantSuffix(className)
    );
  }

  public setTheme(themeName: string, systemAppearance = false) {
    if (!this.isThemeClass(themeName) && systemAppearance === false) {
      throw Error(
        `Provided theme name ${themeName} does not match our naming conventions. (theme-<name>-(dark,light))`
      );
    }

    if (systemAppearance) {
      const currentSystemAppearance = getCurrentSystemAppearance();
      this.replaceBodyThemeClass(themeName);
      this.setVariant(currentSystemAppearance);
      return;
    }

    this.replaceBodyThemeClass(themeName);
  }

  private replaceBodyThemeClass(themeName: string) {
    const oldThemes: string[] = [];
    document.body.classList.forEach((className) => {
      if (this.isThemeClass(className)) {
        oldThemes.push(className);
      }
    });

    document.body.classList.remove(...oldThemes);
    document.body.classList.add(themeName);
  }

  public toggleMode() {
    const oldThemes: string[] = [];

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
      document.body.classList.replace(
        themeName,
        this.getOppositeMode(themeName)
      );
    });
  }

  public getCurrentTheme() {
    return (
      Array.from(document.body.classList).find((className) =>
        this.isThemeClass(className)
      ) ??
      `theme-${window
        .getComputedStyle(document.body)
        .getPropertyValue('--ix-theme-name')}`
    );
  }

  public setVariant(variant: ThemeVariant = getCurrentSystemAppearance()) {
    const currentTheme = this.getCurrentTheme();
    document.body.classList.remove(currentTheme);

    if (currentTheme.endsWith(this.suffixDark)) {
      document.body.classList.add(
        currentTheme.replace(/-dark$/g, `-${variant}`)
      );
    }

    if (currentTheme.endsWith(this.suffixLight)) {
      document.body.classList.add(
        currentTheme.replace(/-light$/g, `-${variant}`)
      );
    }
  }

  private getOppositeMode(themeName: string) {
    if (themeName.endsWith(this.suffixDark)) {
      return themeName.replace(/-dark$/g, this.suffixLight);
    }

    if (themeName.endsWith(this.suffixLight)) {
      return themeName.replace(/-light$/g, this.suffixDark);
    }

    return '';
  }

  private handleMutations(mutations: MutationRecord[]) {
    return mutations.forEach((mutation) => {
      const { target } = mutation;
      (target as HTMLElement).classList.forEach((className) => {
        if (
          this.isThemeClass(className) &&
          !mutation.oldValue?.includes(className)
        ) {
          this._themeChanged.emit(className);
        }
      });
    });
  }

  private registerMutationObserver() {
    if (typeof (window as any) === 'undefined') {
      return;
    }

    if (!('MutationObserver' in window)) {
      console.warn(
        'ThemeSwitcher not supported by your browser. Missing MutationObserver API'
      );
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

  public constructor() {
    this.registerMutationObserver();
  }
}

export type IxTheme = LiteralStringUnion<
  'classic' | 'classic-dark' | 'classic-light'
>;

export const getCurrentSystemAppearance = (): ThemeVariant => {
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

  if (matchMedia.matches) {
    return 'dark';
  }

  return 'light';
};

export const themeSwitcher = new ThemeSwitcher();
