import { newSpecPage } from '@stencil/core/testing';
import { IxTypography } from '../typography';

describe('ix-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography>Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography class="text-default" style="color: inherit;">
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
      <ix-typography color="soft" class="text-default" style="color: var(--theme-color-soft-text);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });

  it('should render font style', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography variant="h2">Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography variant="h2" class="text-h2" style="color: inherit;">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });
});
