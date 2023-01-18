import { newSpecPage } from '@stencil/core/testing';
import { IxTypography } from '../typography';

describe('ix-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxTypography],
      html: `<ix-typography></ix-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-typography>
    `);
  });
});
