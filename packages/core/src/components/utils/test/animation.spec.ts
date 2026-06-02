import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest';

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
const originalDocument = Object.getOwnPropertyDescriptor(
  globalThis,
  'document'
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

describe('Animation', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    restoreProperty(globalThis, 'window', originalWindow);
    restoreProperty(globalThis, 'document', originalDocument);
    vi.restoreAllMocks();
  });

  it('should use fallback if window is not defined', async () => {
    Object.defineProperty(globalThis, 'window', {
      configurable: true,
      value: undefined,
    });

    expect(typeof window).toBe('undefined');

    const { default: Animation } = await import('../animation');

    expect(Animation.shortTime).toBe(0);
    expect(Animation.defaultTime).toBe(150);
    expect(Animation.mediumTime).toBe(300);
    expect(Animation.slowTime).toBe(500);
    expect(Animation.xSlowTime).toBe(1000);
  });

  it('should parse css time variables with units', async () => {
    const matchMedia = vi.fn().mockReturnValue({ matches: false });
    const getPropertyValue = vi.fn((name: string) => {
      const values: Record<string, string> = {
        '--theme-short-time': '25ms',
        '--theme-default-time': '0.15s',
        '--theme-medium-time': '300ms',
        '--theme-slow-time': '0.5s',
        '--theme-x-slow-time': '1000ms',
      };

      return values[name] ?? '';
    });

    Object.defineProperty(globalThis, 'window', {
      configurable: true,
      value: {
        getComputedStyle: vi.fn(() => ({ getPropertyValue })),
        matchMedia,
      },
    });

    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      value: {
        documentElement: {},
        body: {},
      },
    });

    const { default: Animation } = await import('../animation');

    expect(Animation.shortTime).toBe(25);
    expect(Animation.defaultTime).toBe(150);
    expect(Animation.mediumTime).toBe(300);
    expect(Animation.slowTime).toBe(500);
    expect(Animation.xSlowTime).toBe(1000);
  });
});
