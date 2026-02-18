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
      className &&
      className.startsWith(this.prefixTheme) &&
      this.hasVariantSuffix(className)
    );
  }

  public setTheme(themeName: string, systemAppearance = false) {
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

  private replaceThemeClass(themeName: string) {
    const oldThemes: string[] = [];
    Array.from(document.documentElement.classList)
      .filter((className) => className && this.isThemeClass(className))
      .forEach((className) => {
        oldThemes.push(className);
      });

    document.documentElement.classList.remove(...oldThemes);
    document.documentElement.classList.add(themeName);
  }

  public toggleMode() {
    if (document.documentElement.hasAttribute(dataIxColorSchema)) {
      const currentSchema = this.getDataColorSchema(document.documentElement)!;
      document.documentElement.setAttribute(
        dataIxColorSchema,
        currentSchema === 'dark' ? 'light' : 'dark'
      );
      return;
    }

    const classTheme = Array.from(document.documentElement.classList).find(
      (className) => this.isThemeClass(className)
    );
    const currentTheme = classTheme ?? this.defaultTheme;
    const oppositeTheme = this.getOppositeMode(currentTheme);

    if (!oppositeTheme) {
      return;
    }

    const baseTheme = currentTheme
      .replace(this.prefixTheme, '')
      .replace(/-dark$/, '')
      .replace(/-light$/, '');

    const newVariant: ThemeVariant = oppositeTheme.endsWith(this.suffixDark)
      ? 'dark'
      : 'light';

    document.documentElement.setAttribute(dataIxTheme, baseTheme);
    document.documentElement.setAttribute(dataIxColorSchema, newVariant);

    Array.from(document.documentElement.classList)
      .filter((className) => this.isThemeClass(className))
      .forEach((className) =>
        document.documentElement.classList.remove(className)
      );
  }

  private getDataColorSchema(target: HTMLElement) {
    return target.getAttribute(dataIxColorSchema);
  }

  public getCurrentTheme() {
    return (
      Array.from(document.documentElement.classList).find((className) =>
        this.isThemeClass(className)
      ) ??
      `theme-${
        document.documentElement.getAttribute(dataIxTheme) || 'classic'
      }-${
        document.documentElement.getAttribute(dataIxColorSchema) ||
        getCurrentSystemAppearance()
      }`
    );
  }

  public setVariant(variant: ThemeVariant = getCurrentSystemAppearance()) {
    if (this.getDataColorSchema(document.documentElement)) {
      document.documentElement.setAttribute(dataIxColorSchema, variant);
      return;
    }

    const currentTheme = this.getCurrentTheme();
    document.documentElement.classList.remove(currentTheme);

    if (currentTheme.endsWith(this.suffixDark)) {
      document.documentElement.classList.add(
        currentTheme.replace(/-dark$/g, `-${variant}`)
      );
    }

    if (currentTheme.endsWith(this.suffixLight)) {
      document.documentElement.classList.add(
        currentTheme.replace(/-light$/g, `-${variant}`)
      );
    }

    document.documentElement.setAttribute(dataIxColorSchema, variant);
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

  private splitMutations(mutations: MutationRecord[]) {
    const classMutations = mutations.filter(
      (mutation) => mutation.attributeName === 'class'
    );

    const dataMutations = mutations.filter(
      (mutation) =>
        mutation.attributeName === dataIxTheme ||
        mutation.attributeName === dataIxColorSchema
    );

    return { classMutations, dataMutations };
  }

  private handleClassMutations(mutations: MutationRecord[]) {
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

  private handleDataMutations(mutations: MutationRecord[]) {
    return mutations.forEach((mutation) => {
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

    const mutationObserverConfig = {
      attributeFilter: ['class', dataIxTheme, dataIxColorSchema],
      attributeOldValue: true,
    };

    const handleMutations = (mutations: MutationRecord[]) => {
      const { classMutations, dataMutations } = this.splitMutations(mutations);

      this.handleClassMutations(classMutations);
      this.handleDataMutations(dataMutations);
    };

    this.mutationObserver = new MutationObserver(handleMutations);
    this.mutationObserver.observe(
      document.documentElement,
      mutationObserverConfig
    );
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
