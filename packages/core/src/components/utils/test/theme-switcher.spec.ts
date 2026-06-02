/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type ThemeSwitcherModule = typeof import('../theme-switcher');

const originalGetComputedStyle = Object.getOwnPropertyDescriptor(
  globalThis,
  'getComputedStyle'
);
const originalGlobalMutationObserver = Object.getOwnPropertyDescriptor(
  globalThis,
  'MutationObserver'
);
const originalWindowMutationObserver = Object.getOwnPropertyDescriptor(
  window,
  'MutationObserver'
);
const originalMatchMedia = Object.getOwnPropertyDescriptor(
  window,
  'matchMedia'
);
const originalComputedStyleMap = Object.getOwnPropertyDescriptor(
  document.documentElement,
  'computedStyleMap'
);

function restoreProperty(
  target: object,
  key: string,
  descriptor?: PropertyDescriptor
) {
  if (descriptor) {
    Object.defineProperty(target, key, descriptor);
    return;
  }

  Reflect.deleteProperty(target, key);
}

describe('ThemeSwitcher', () => {
  let mediaChangeListener: ((event: MediaQueryListEvent) => void) | undefined;
  let mutationCallback: MutationCallback | undefined;
  let disconnectMock: ReturnType<typeof vi.fn>;
  let removeEventListenerMock: ReturnType<typeof vi.fn>;

  const setComputedStyleValues = ({
    colorSchema,
    theme,
    withTypedOm = true,
  }: {
    colorSchema?: string;
    theme?: string;
    withTypedOm?: boolean;
  } = {}) => {
    Object.defineProperty(globalThis, 'getComputedStyle', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        getPropertyValue: vi.fn((propertyName: string) => {
          const values: Record<string, string | undefined> = {
            '--theme-color-schema': colorSchema,
            '--theme-name': theme,
          };

          return values[propertyName] ?? '';
        }),
      })),
    });

    Object.defineProperty(document.documentElement, 'computedStyleMap', {
      configurable: true,
      value: withTypedOm
        ? vi.fn(() => ({
            get: vi.fn((propertyName: string) => {
              const values: Record<string, string | undefined> = {
                '--theme-color-schema': colorSchema,
                '--theme-name': theme,
              };

              const value = values[propertyName];

              return value === undefined
                ? undefined
                : { toString: () => value };
            }),
          }))
        : undefined,
    });
  };

  const loadThemeSwitcher = async (): Promise<ThemeSwitcherModule> =>
    import('../theme-switcher');

  beforeEach(() => {
    vi.resetModules();

    mediaChangeListener = undefined;
    mutationCallback = undefined;
    disconnectMock = vi.fn();
    removeEventListenerMock = vi.fn();

    document.documentElement.removeAttribute('data-ix-theme');
    document.documentElement.removeAttribute('data-ix-color-schema');

    setComputedStyleValues();

    class MutationObserverMock {
      observe = vi.fn();
      disconnect = disconnectMock;

      constructor(callback: MutationCallback) {
        mutationCallback = callback;
      }
    }

    Object.defineProperty(globalThis, 'MutationObserver', {
      configurable: true,
      writable: true,
      value: MutationObserverMock,
    });

    Object.defineProperty(window, 'MutationObserver', {
      configurable: true,
      writable: true,
      value: globalThis.MutationObserver,
    });

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        matches: false,
        addEventListener: vi.fn(
          (
            eventName: string,
            listener: (event: MediaQueryListEvent) => void
          ) => {
            if (eventName === 'change') {
              mediaChangeListener = listener;
            }
          }
        ),
        removeEventListener: removeEventListenerMock,
      })),
    });
  });

  afterEach(() => {
    restoreProperty(globalThis, 'getComputedStyle', originalGetComputedStyle);
    restoreProperty(
      globalThis,
      'MutationObserver',
      originalGlobalMutationObserver
    );
    restoreProperty(window, 'MutationObserver', originalWindowMutationObserver);
    restoreProperty(window, 'matchMedia', originalMatchMedia);
    restoreProperty(
      document.documentElement,
      'computedStyleMap',
      originalComputedStyleMap
    );

    document.documentElement.removeAttribute('data-ix-theme');
    document.documentElement.removeAttribute('data-ix-color-schema');

    vi.restoreAllMocks();
  });

  it('returns the explicit color schema from the dataset', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixColorSchema = 'dark';

    expect(themeSwitcher.getMode()).toBe('dark');
  });

  it('falls back to the computed style color schema when no dataset value is set', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    setComputedStyleValues({ colorSchema: 'light' });

    expect(themeSwitcher.getColorSchema()).toBe('light');
    expect(themeSwitcher.getMode()).toBe('light');
  });

  it('falls back to getComputedStyle when Typed OM is unavailable', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    setComputedStyleValues({
      colorSchema: 'dark',
      theme: 'brand',
      withTypedOm: false,
    });

    expect(themeSwitcher.getComputedStyleColorSchema()).toBe('dark');
    expect(themeSwitcher.getComputedStyleTheme()).toBe('brand');
  });

  it('returns system as the configured schema when no dataset value is set', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    expect(themeSwitcher.getColorSchema()).toBe('system');
  });

  it('falls back to the system appearance when no explicit or computed color schema exists', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(
          (
            eventName: string,
            listener: (event: MediaQueryListEvent) => void
          ) => {
            if (eventName === 'change') {
              mediaChangeListener = listener;
            }
          }
        ),
        removeEventListener: vi.fn(),
      })),
    });

    const { themeSwitcher } = await loadThemeSwitcher();

    expect(themeSwitcher.getMode()).toBe('dark');
  });

  it('returns the explicit theme from the dataset', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixTheme = 'classic';

    expect(themeSwitcher.getTheme()).toBe('classic');
  });

  it('falls back to the computed style theme when no dataset value is set', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    setComputedStyleValues({ theme: 'brand' });

    expect(themeSwitcher.getTheme()).toBe('brand');
  });

  it('sets theme and color schema when both values are provided', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    themeSwitcher.setTheme('classic', 'dark');

    expect(document.documentElement.dataset.ixTheme).toBe('classic');
    expect(document.documentElement.dataset.ixColorSchema).toBe('dark');
  });

  it('preserves the configured color schema when setting a theme without an explicit color schema', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixColorSchema = 'system';

    themeSwitcher.setTheme('classic');

    expect(document.documentElement.dataset.ixTheme).toBe('classic');
    expect(document.documentElement.dataset.ixColorSchema).toBe('system');
  });

  it('toggles between explicit light and dark color schemas', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixColorSchema = 'dark';
    themeSwitcher.toggleMode();
    expect(document.documentElement.dataset.ixColorSchema).toBe('light');

    themeSwitcher.toggleMode();
    expect(document.documentElement.dataset.ixColorSchema).toBe('dark');
  });

  it('toggles from system-dark to explicit light', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(
          (
            eventName: string,
            listener: (event: MediaQueryListEvent) => void
          ) => {
            if (eventName === 'change') {
              mediaChangeListener = listener;
            }
          }
        ),
        removeEventListener: vi.fn(),
      })),
    });

    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixColorSchema = 'system';

    themeSwitcher.toggleMode();

    expect(document.documentElement.dataset.ixColorSchema).toBe('light');
  });

  it('toggles from system-light to explicit dark', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    document.documentElement.dataset.ixColorSchema = 'system';

    themeSwitcher.toggleMode();

    expect(document.documentElement.dataset.ixColorSchema).toBe('dark');
  });

  it('sets dark as the first toggled mode when no color schema is present', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    themeSwitcher.toggleMode();

    expect(document.documentElement.dataset.ixColorSchema).toBe('dark');
  });

  it('sets the system-derived color schema by default', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(
          (
            eventName: string,
            listener: (event: MediaQueryListEvent) => void
          ) => {
            if (eventName === 'change') {
              mediaChangeListener = listener;
            }
          }
        ),
        removeEventListener: vi.fn(),
      })),
    });

    const { themeSwitcher } = await loadThemeSwitcher();

    themeSwitcher.setColorSchema();

    expect(document.documentElement.dataset.ixColorSchema).toBe('dark');
  });

  it('emits theme changes for attribute mutations', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();
    const listener = vi.fn();

    themeSwitcher.themeChanged.on(listener);

    document.documentElement.dataset.ixTheme = 'classic';
    document.documentElement.dataset.ixColorSchema = 'dark';

    mutationCallback?.(
      [
        {
          addedNodes: [] as unknown as NodeList,
          type: 'attributes',
          attributeName: 'data-ix-color-schema',
          attributeNamespace: null,
          nextSibling: null,
          oldValue: null,
          previousSibling: null,
          removedNodes: [] as unknown as NodeList,
          target: document.documentElement,
        } as MutationRecord,
      ],
      {} as MutationObserver
    );

    expect(listener).toHaveBeenLastCalledWith({
      theme: 'classic',
      colorSchema: 'dark',
      mode: 'dark',
      isMediaChange: false,
    });
  });

  it('emits both configured schema and resolved mode for system color schema changes', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(
          (
            eventName: string,
            listener: (event: MediaQueryListEvent) => void
          ) => {
            if (eventName === 'change') {
              mediaChangeListener = listener;
            }
          }
        ),
        removeEventListener: vi.fn(),
      })),
    });

    const { themeSwitcher } = await loadThemeSwitcher();
    const listener = vi.fn();

    themeSwitcher.themeChanged.on(listener);

    document.documentElement.dataset.ixTheme = 'classic';
    document.documentElement.dataset.ixColorSchema = 'system';

    mutationCallback?.(
      [
        {
          addedNodes: [] as unknown as NodeList,
          type: 'attributes',
          attributeName: 'data-ix-color-schema',
          attributeNamespace: null,
          nextSibling: null,
          oldValue: null,
          previousSibling: null,
          removedNodes: [] as unknown as NodeList,
          target: document.documentElement,
        } as MutationRecord,
      ],
      {} as MutationObserver
    );

    expect(listener).toHaveBeenLastCalledWith({
      theme: 'classic',
      colorSchema: 'system',
      mode: 'dark',
      isMediaChange: false,
    });
  });

  it('emits theme changes for system appearance updates', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();
    const listener = vi.fn();

    document.documentElement.dataset.ixTheme = 'classic';
    document.documentElement.dataset.ixColorSchema = 'dark';

    themeSwitcher.themeChanged.on(listener);
    mediaChangeListener?.({ matches: true } as MediaQueryListEvent);

    expect(listener).toHaveBeenCalledWith({
      theme: 'classic',
      colorSchema: 'dark',
      mode: 'dark',
      isMediaChange: true,
    });
  });

  it('disconnects the mutation observer on destroy', async () => {
    const { themeSwitcher } = await loadThemeSwitcher();

    themeSwitcher.destroy();

    expect(disconnectMock).toHaveBeenCalled();
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    );
  });

  it('falls back to light when matchMedia is unavailable', async () => {
    const { getCurrentSystemAppearance } = await loadThemeSwitcher();

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: undefined,
    });

    expect(getCurrentSystemAppearance()).toBe('light');
  });
});
