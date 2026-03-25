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
    Array.from(document.body.classList).forEach((cls) =>
      document.body.classList.remove(cls)
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
      expect(document.documentElement.dataset.ixTheme).toBe(theme);
    });

    it('should toggle theme attribute', () => {
      themeSwitcher.setTheme(theme);
      themeSwitcher.setVariant('dark');
      themeSwitcher.toggleMode();

      expect(document.documentElement.dataset.ixTheme).toBe(theme);
      expect(document.documentElement.dataset.ixColorSchema).toBe('light');
    });
  });

  describe('schema', () => {
    it('should set schema', () => {
      const schema = 'dark';
      themeSwitcher.setVariant(schema);
      expect(document.documentElement.dataset.ixColorSchema).toBe(schema);
    });
    it('should toggle from default state using data attributes', () => {
      themeSwitcher.toggleMode();
      expect(document.documentElement.dataset.ixTheme).toBe('classic');
      expect(document.documentElement.dataset.ixColorSchema).toBe('light');
    });

    it('should toggle schema via attribute', () => {
      themeSwitcher.setVariant('dark');
      themeSwitcher.toggleMode();
      expect(document.documentElement.dataset.ixColorSchema).toBe('light');
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
  describe('getMode', () => {
    it('should return dark when data-ix-color-schema is dark', () => {
      document.documentElement.dataset.ixColorSchema = 'dark';
      expect(themeSwitcher.getMode()).toBe('dark');
    });
    it('should return light when data-ix-color-schema is light', () => {
      document.documentElement.dataset.ixColorSchema = 'light';
      expect(themeSwitcher.getMode()).toBe('light');
    });
    it('should return dark when body has dark theme class (legacy)', () => {
      document.body.classList.add('theme-classic-dark');
      expect(themeSwitcher.getMode()).toBe('dark');
    });
    it('should return light when body has light theme class (legacy)', () => {
      document.body.classList.add('theme-classic-light');
      expect(themeSwitcher.getMode()).toBe('light');
    });
  });
  describe('legacy body class support', () => {
    it('should toggle theme CSS class on body', () => {
      document.body.classList.add('theme-classic-dark');
      themeSwitcher.toggleMode();
      expect(document.body.classList.contains('theme-classic-light')).toBe(
        true
      );
      expect(document.body.classList.contains('theme-classic-dark')).toBe(
        false
      );
    });
    it('should toggle theme CSS class on body back and forth', () => {
      document.body.classList.add('theme-classic-dark');
      themeSwitcher.toggleMode();
      expect(document.body.classList.contains('theme-classic-light')).toBe(
        true
      );
      themeSwitcher.toggleMode();
      expect(document.body.classList.contains('theme-classic-dark')).toBe(true);
    });
    it('should detect current theme from body class', () => {
      document.body.classList.add('theme-classic-dark');
      expect(themeSwitcher.getCurrentTheme()).toBe('theme-classic-dark');
    });
    it('should set variant on body when theme class is on body', () => {
      document.body.classList.add('theme-classic-dark');
      themeSwitcher.setVariant('light');
      expect(document.body.classList.contains('theme-classic-light')).toBe(
        true
      );
      expect(document.body.classList.contains('theme-classic-dark')).toBe(
        false
      );
    });
  });
});
