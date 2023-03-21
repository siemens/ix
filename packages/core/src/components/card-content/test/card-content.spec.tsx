import { newSpecPage } from '@stencil/core/testing';
import { CardContent } from '../card-content';

describe('card-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardContent],
      html: `<card-content></card-content>`,
    });
    expect(page.root).toEqualHtml(`
      <card-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-content>
    `);
  });
});
