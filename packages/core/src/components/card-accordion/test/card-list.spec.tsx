import { newSpecPage } from '@stencil/core/testing';
import { CardAccordion } from '../card-accordion';

describe('card-according', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardAccordion],
      html: `<ix-card-accordion></ix-card-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-card-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-card-accordion>
    `);
  });
});
