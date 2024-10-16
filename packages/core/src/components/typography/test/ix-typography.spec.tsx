import { newSpecPage } from '@stencil/core/testing';
import { IxTypography } from '../typography';

describe('ix-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography>Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography class="typography-body">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });

  it('should render color', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography color="soft">Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography color="soft" class="typography-body" style="color: var(--theme-color-soft-text);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });

  it('should show format', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography format="display-xl">Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography class="typography-display-xl" format="display-xl">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });

  it('should show text decoration', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography text-decoration="underline">Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography class="typography-body typography-decoration-underline" text-decoration="underline">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });
});
