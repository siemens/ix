import Animation from '../animation';

describe('Animation', () => {
  it('should use fallback if window is not defined', () => {
    // Need to undefine window because @stencil/core/testing bootstrap window object
    // with some mocks.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).window = undefined;
    expect(typeof window).toBe('undefined');

    expect(Animation.shortTime).toBe(0);
    expect(Animation.defaultTime).toBe(150);
    expect(Animation.mediumTime).toBe(300);
    expect(Animation.slowTime).toBe(500);
    expect(Animation.xSlowTime).toBe(1000);
  });
});
