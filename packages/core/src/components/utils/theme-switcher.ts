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

  private mutationObserver?: MutationObserver;
  readonly themeChanged = new TypedEvent<string>();
  readonly schemaChanged = new TypedEvent<string>();

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

  public getMode(): ThemeVariant {
    const colorSchema = document.documentElement.dataset.ixColorSchema;
    if (colorSchema === 'dark' || colorSchema === 'light') {
      return colorSchema;
    }

    const bodyThemeClass = this.getThemeClassFromBody();
    if (bodyThemeClass) {
      return bodyThemeClass.endsWith(this.suffixDark) ? 'dark' : 'light';
    }

    return getCurrentSystemAppearance();
  }

  private getThemeClassFromBody(): string | undefined {
    if (!document.body) {
      return undefined;
    }
    return (document.body.className || '')
      .split(' ')
      .find((cls) => cls && this.isThemeClass(cls));
  }

  public setTheme(themeName: string, systemAppearance = false) {
    if (this.isThemeClass(themeName)) {
      this.replaceThemeClass(themeName);
    } else {
      document.documentElement.dataset.ixTheme = themeName;
    }

    if (systemAppearance) {
      this.setVariant();
    }
  }

  private replaceThemeClass(themeName: string) {
    const oldThemes = Array.from(document.documentElement.classList).filter(
      (cls) => this.isThemeClass(cls)
    );
    document.documentElement.classList.remove(...oldThemes);
    document.documentElement.classList.add(themeName);
  }

  public toggleMode() {
    if (document.documentElement.hasAttribute(dataIxColorSchema)) {
      const currentSchema = document.documentElement.dataset.ixColorSchema!;
      document.documentElement.dataset.ixColorSchema =
        currentSchema === 'dark' ? 'light' : 'dark';
      return;
    }
    const bodyThemeClass = this.getThemeClassFromBody();
    if (bodyThemeClass) {
      const newTheme = bodyThemeClass.replace(/-(dark|light)$/, (m) =>
        m === '-dark' ? '-light' : '-dark'
      );
      document.body.classList.remove(bodyThemeClass);
      document.body.classList.add(newTheme);
      this.themeChanged.emit(newTheme);
      this.schemaChanged.emit(
        newTheme.endsWith(this.suffixDark) ? 'dark' : 'light'
      );
      return;
    }

    const newMode: ThemeVariant = this.defaultTheme.endsWith(this.suffixDark)
      ? 'light'
      : 'dark';
    if (!document.documentElement.hasAttribute(dataIxTheme)) {
      document.documentElement.dataset.ixTheme = 'classic';
    }
    document.documentElement.dataset.ixColorSchema = newMode;
  }

  public getCurrentTheme() {
    const bodyThemeClass = this.getThemeClassFromBody();
    return (
      bodyThemeClass ??
      `theme-${document.documentElement.dataset.ixTheme || 'classic'}-${
        document.documentElement.dataset.ixColorSchema ||
        getCurrentSystemAppearance()
      }`
    );
  }

  public setVariant(variant: ThemeVariant = getCurrentSystemAppearance()) {
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
      document.documentElement.dataset.ixTheme = 'classic';
    }
    document.documentElement.dataset.ixColorSchema = variant;
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
    mutations.forEach((mutation) => {
      const { target } = mutation;
      (target as HTMLElement).classList.forEach((className) => {
        if (
          this.isThemeClass(className) &&
          !mutation.oldValue?.includes(className)
        ) {
          this.themeChanged.emit(className);
        }
      });
    });
  }

  private handleDataMutations(mutations: MutationRecord[]) {
    mutations.forEach((mutation) => {
      const { target } = mutation;
      const theme = (target as Element).attributes.getNamedItem(dataIxTheme);
      if (theme?.value && mutation.oldValue !== theme.value) {
        this.themeChanged.emit(theme.value);
      }

      const colorSchema = (target as Element).attributes.getNamedItem(
        dataIxColorSchema
      );
      if (colorSchema?.value && mutation.oldValue !== colorSchema.value) {
        this.schemaChanged.emit(colorSchema.value);
      }
    });
  }

  private registerMutationObservers() {
    if (typeof window === 'undefined') {
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

  public destroy() {
    this.mutationObserver?.disconnect();
  }
}

export type IxTheme = LiteralStringUnion<
  'classic' | 'classic-dark' | 'classic-light'
>;

export const getCurrentSystemAppearance = (): ThemeVariant =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const themeSwitcher = new ThemeSwitcher();
