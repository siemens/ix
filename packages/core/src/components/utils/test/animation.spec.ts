describe('Animation', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should use fallback if window is not defined', async () => {
    const originalWindow = globalThis.window;

    // Need to undefine window because @stencil/core/testing bootstrap window object
    // with some mocks.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).window = undefined;
    expect(typeof window).toBe('undefined');

    const { default: Animation } = await import('../animation');

    expect(Animation.shortTime).toBe(0);
    expect(Animation.defaultTime).toBe(150);
    expect(Animation.mediumTime).toBe(300);
    expect(Animation.slowTime).toBe(500);
    expect(Animation.xSlowTime).toBe(1000);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).window = originalWindow;
  });

  it('should parse css time variables with units', async () => {
    const matchMedia = jest.fn().mockReturnValue({ matches: false });
    const getPropertyValue = jest.fn((name: string) => {
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
        getComputedStyle: jest.fn(() => ({ getPropertyValue })),
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
