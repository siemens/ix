import { TypedEvent } from './typed-event';
export declare class ThemeSwitcher {
  readonly prefixTheme = "theme-";
  readonly suffixLight = "-light";
  readonly suffixDark = "-dark";
  readonly defaultTheme = "theme-classic-dark";
  mutationObserver: MutationObserver;
  _themeChanged: TypedEvent<string>;
  get themeChanged(): TypedEvent<string>;
  private hasVariantSuffix;
  private isThemeClass;
  setTheme(themeName: string): void;
  toggleMode(): void;
  private getOppositeMode;
  private handleMutations;
  private registerMutationObserver;
  constructor();
}
export declare const themeSwitcher: ThemeSwitcher;
