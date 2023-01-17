import { newSpecPage } from '@stencil/core/testing';
import { IxTooltip } from '../tooltip';

describe('ix-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxTooltip],
      html: `<ix-tooltip></ix-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-tooltip>
    `);
  });
});
