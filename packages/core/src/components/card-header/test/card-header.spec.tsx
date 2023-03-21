import { newSpecPage } from '@stencil/core/testing';
import { CardHeader } from '../card-header';

describe('card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `<card-header></card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-header>
    `);
  });
});
