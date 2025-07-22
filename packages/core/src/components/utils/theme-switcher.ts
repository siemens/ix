/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { type LiteralStringUnion } from './type-helper';
import { TypedEvent } from './typed-event';

export type ThemeVariant = 'light' | 'dark';

const dataIxTheme = 'data-ix-theme';
const dataIxColorSchema = 'data-ix-color-schema';

class ThemeSwitcher {
  readonly prefixTheme = 'theme-';
  readonly suffixLight = '-light';
  readonly suffixDark = '-dark';
  readonly defaultTheme = 'theme-classic-dark';

  mutationObserver?: MutationObserver;
  mutationObserverData?: MutationObserver;
  _themeChanged = new TypedEvent<string>();
  _schemaChanged = new TypedEvent<string>();

  public get themeChanged() {
    return this._themeChanged;
  }

  public get schemaChanged() {
    return this._schemaChanged;
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

  /**
   * @deprecated The 'target' parameter is deprecated. In v4, setTheme will always target the document.
   * TODO: IX-3024
   */
  public setTheme(
    themeName: string,
    systemAppearance = false,
    target = document.body
  ) {
    if (this.isThemeClass(themeName)) {
      this.replaceBodyThemeClass(themeName);
    } else {
      target.setAttribute(dataIxTheme, themeName);
    }

    if (systemAppearance) {
      const currentSystemAppearance = getCurrentSystemAppearance();
      this.setVariant(currentSystemAppearance);
    }
  }

  private replaceBodyThemeClass(themeName: string) {
    const oldThemes: string[] = [];
    Array.from(document.body.classList)
      .filter((className) => className && this.isThemeClass(className))
      .forEach((className) => {
        oldThemes.push(className);
      });

    document.body.classList.remove(...oldThemes);
    document.body.classList.add(themeName);
  }

  public toggleMode() {
    const elements = [document.body, document.documentElement];
    const elementWithSchema = elements.find(el => this.getDataColorSchema(el));

    if (elementWithSchema) {
      const currentSchema = this.getDataColorSchema(elementWithSchema)!;
      elementWithSchema.setAttribute(dataIxColorSchema, currentSchema === 'dark' ? 'light' : 'dark');
      return;
    }

    const oldThemes: string[] = [];
    Array.from(document.body.classList)
      .filter((className) => className && this.isThemeClass(className))
      .forEach((className) => {
        oldThemes.push(className);
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

  private getDataColorSchema(target: HTMLElement) {
    return target.getAttribute(dataIxColorSchema);
  }

  public getCurrentTheme() {
    return (
      Array.from(document.body.classList).find((className) =>
        this.isThemeClass(className)
      ) ??
      `theme-${document.body.getAttribute(dataIxTheme) || document.documentElement.getAttribute(dataIxTheme) || 'classic'}-${
        document.body.getAttribute(dataIxColorSchema) ||
        document.documentElement.getAttribute(dataIxColorSchema) ||
        getCurrentSystemAppearance()
      }`
    );
  }

  public setVariant(variant: ThemeVariant = getCurrentSystemAppearance(), target = document.body) {
    if (this.getDataColorSchema(target)) {
      target.setAttribute(dataIxColorSchema, variant);
      return;
    }

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

    target.setAttribute(dataIxColorSchema, variant);
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

  private registerMutationObservers() {
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

    this.mutationObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributeOldValue: true,
    });

    this.mutationObserverData = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const { target } = mutation;
        const theme = (target as Element).attributes.getNamedItem(dataIxTheme);
        if (theme?.value && mutation.oldValue !== theme.value) {
          this._themeChanged.emit(theme.value);
        }

        const colorSchema = (target as Element).attributes.getNamedItem(
          dataIxColorSchema
        );
        if (colorSchema?.value && mutation.oldValue !== colorSchema.value) {
          this._schemaChanged.emit(colorSchema.value);
        }
      });
    });

    this.mutationObserverData.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [dataIxTheme, dataIxColorSchema],
    });
  }

  public constructor() {
    this.registerMutationObservers();
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
