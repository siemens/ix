import { newSpecPage } from '@stencil/core/testing';
import { IxTypography } from '../typography';

describe('ix-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography>Example content</ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography>
        <mock:shadow-root>
        <div class="text-default">
          <slot></slot>
        </div>
        </mock:shadow-root>
        Example content
      </ix-typography>
    `);
  });
});
