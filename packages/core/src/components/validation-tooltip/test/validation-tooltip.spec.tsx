import { newSpecPage } from '@stencil/core/testing';
import { ValidationTooltip } from '../validation-tooltip';

describe('validation-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ValidationTooltip],
      html: `<validation-tooltip></validation-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <validation-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </validation-tooltip>
    `);
  });
});
