import { TypedEvent } from './typed-event';

export class ThemeSwitcher {
  readonly prefixTheme = 'theme-';
  readonly suffixLight = '-light';
  readonly suffixDark = '-dark';
  readonly defaultTheme = 'theme-classic-dark';

  mutationObserver: MutationObserver;
  _themeChanged = new TypedEvent<string>();

  public get themeChanged() {
    return this._themeChanged;
  }

  private hasVariantSuffix(className: string) {
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

  public setTheme(themeName: string) {
    if (!this.isThemeClass(themeName)) {
      throw Error(
        `Provided theme name ${themeName} does not match our naming conventions. (theme-<name>-(dark,light))`
      );
    }

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

  private getOppositeMode(themeName: string) {
    if (themeName.endsWith(this.suffixDark)) {
      return themeName.replace(/-dark$/g, this.suffixLight);
    }

    if (themeName.endsWith(this.suffixLight)) {
      return themeName.replace(/-light$/g, this.suffixDark);
    }
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

export const themeSwitcher = new ThemeSwitcher();
