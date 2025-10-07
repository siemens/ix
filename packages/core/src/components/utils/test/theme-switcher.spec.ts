import { newSpecPage } from '@stencil/core/testing';
import { themeSwitcher } from '../theme-switcher';

describe('ThemeSwitcher', () => {
  beforeEach(async () => {
    await newSpecPage({
      html: '<div></div>',
      components: [],
    });
    // Clear all classes from HTML element
    Array.from(document.documentElement.classList).forEach((cls) =>
      document.documentElement.classList.remove(cls)
    );
    document.documentElement.removeAttribute('data-ix-theme');
    document.documentElement.removeAttribute('data-ix-color-schema');
  });

  const theme = 'classic';
  const themeClass = 'theme-classic-dark';

  describe('theme', () => {
    it('should set theme CSS class', () => {
      themeSwitcher.setTheme(themeClass);
      expect(document.documentElement.classList.contains(themeClass)).toBe(
        true
      );
    });

    it('should set theme attribute', () => {
      themeSwitcher.setTheme(theme);
      expect(document.documentElement.getAttribute('data-ix-theme')).toBe(
        theme
      );
    });

    it('should toggle theme CSS class', () => {
      themeSwitcher.setTheme(themeClass);
      themeSwitcher.toggleMode();
      expect(
        document.documentElement.classList.contains('theme-classic-light')
      ).toBe(true);
    });

    it('should toggle theme attribute', () => {
      themeSwitcher.setTheme(theme);
      themeSwitcher.setVariant('dark');
      themeSwitcher.toggleMode();

      expect(document.documentElement.getAttribute('data-ix-theme')).toBe(
        theme
      );
      expect(
        document.documentElement.getAttribute('data-ix-color-schema')
      ).toBe('light');
    });
  });

  describe('schema', () => {
    it('should set schema', () => {
      const schema = 'dark';
      themeSwitcher.setVariant(schema);
      expect(
        document.documentElement.getAttribute('data-ix-color-schema')
      ).toBe(schema);
    });

    it('should toggle schema via CSS class', () => {
      themeSwitcher.toggleMode();
      expect(
        document.documentElement.classList.contains('theme-classic-light')
      ).toBe(true);
    });

    it('should toggle schema via attribute', () => {
      themeSwitcher.setVariant('dark');
      themeSwitcher.toggleMode();
      expect(
        document.documentElement.getAttribute('data-ix-color-schema')
      ).toBe('light');
    });
  });

  describe('utils', () => {
    it('should detect theme class with variant suffix', () => {
      expect(themeSwitcher.hasVariantSuffix('theme-classic-dark')).toBe(true);
      expect(themeSwitcher.hasVariantSuffix('theme-classic-light')).toBe(true);
      expect(themeSwitcher.hasVariantSuffix('theme-classic')).toBe(false);
    });

    it('should detect valid theme class', () => {
      expect(themeSwitcher['isThemeClass']('theme-classic-dark')).toBe(true);
      expect(themeSwitcher['isThemeClass']('theme-classic')).toBe(false);
    });
  });
});
