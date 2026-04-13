/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypedEvent } from './typed-event';

export type ThemeVariant = 'light' | 'dark' | 'system';
export type ThemeMode = Exclude<ThemeVariant, 'system'>;
export type ThemeChangeEventDetail = {
  theme?: string;
  colorSchema: ThemeVariant;
  mode: ThemeMode;
  isMediaChange?: boolean;
};

class ThemeSwitcher {
  private mutationObserver?: MutationObserver;
  private mediaQueryList?: MediaQueryList;
  private emitThemeChange(isMediaChange: boolean) {
    this.themeChanged.emit({
      theme: this.getTheme(),
      colorSchema: this.getColorSchema(),
      mode: this.getMode(),
      isMediaChange,
    });
  }
  private readonly handleMediaQueryChange = () => {
    this.emitThemeChange(true);
  };
  readonly themeChanged = new TypedEvent<ThemeChangeEventDetail>();

  /**
   * @internal
   */
  public getComputedStyleColorSchema() {
    return this.getComputedStyleProperty('--theme-color-schema');
  }

  public getComputedStyleTheme() {
    return this.getComputedStyleProperty('--theme-name');
  }

  private getComputedStyleProperty(propertyName: string) {
    const computedStyleValue = getComputedStyle(document.documentElement)
      .getPropertyValue(propertyName)
      .trim();

    return computedStyleValue || undefined;
  }

  public getColorSchema(): ThemeVariant {
    const colorSchema = document.documentElement.dataset.ixColorSchema;

    if (
      colorSchema === 'dark' ||
      colorSchema === 'light' ||
      colorSchema === 'system'
    ) {
      return colorSchema;
    }

    const resolvedColorSchema = this.getComputedStyleColorSchema();

    if (
      resolvedColorSchema === 'dark' ||
      resolvedColorSchema === 'light' ||
      resolvedColorSchema === 'system'
    ) {
      return resolvedColorSchema;
    }

    return 'system';
  }

  public getMode(): ThemeMode {
    const colorSchema = this.getColorSchema();

    if (colorSchema === 'dark' || colorSchema === 'light') {
      return colorSchema;
    }

    return getCurrentSystemAppearance();
  }

  public setTheme(themeName: string, colorSchema?: ThemeVariant) {
    document.documentElement.dataset.ixTheme = themeName;
    if (!colorSchema) {
      this.setColorSchema(this.getColorSchema());
      return;
    }

    this.setColorSchema(colorSchema);
  }

  public toggleMode() {
    const newMode: ThemeMode = this.getMode() === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.ixColorSchema = newMode;
  }

  public getTheme() {
    const currentTheme = document.documentElement.dataset.ixTheme;

    if (!currentTheme) {
      const fallbackTheme = this.getComputedStyleTheme();
      if (fallbackTheme) {
        return fallbackTheme;
      }
    }

    return currentTheme;
  }

  public setColorSchema(variant: ThemeVariant = getCurrentSystemAppearance()) {
    document.documentElement.dataset.ixColorSchema = variant;
  }

  public constructor() {
    if (
      typeof window === 'undefined' ||
      !window.MutationObserver ||
      !window.matchMedia
    ) {
      // SSR or unsupported environment, do nothing
      return;
    }

    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (
            mutation.attributeName === 'data-ix-theme' ||
            mutation.attributeName === 'data-ix-color-schema'
          ) {
            this.emitThemeChange(false);
          }
        }
      });
    });

    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryList.addEventListener('change', this.handleMediaQueryChange);

    this.mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-ix-theme', 'data-ix-color-schema'],
    });
  }

  public destroy() {
    this.mutationObserver?.disconnect();
    this.mediaQueryList?.removeEventListener(
      'change',
      this.handleMediaQueryChange
    );
  }
}

export const getCurrentSystemAppearance = (): ThemeMode =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    : 'light';

export const themeSwitcher = new ThemeSwitcher();
