import { newSpecPage } from '@stencil/core/testing';
import { CardList } from '../card-list';

describe('card-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardList],
      html: `<card-list></card-list>`,
    });
    expect(page.root).toEqualHtml(`
      <card-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-list>
    `);
  });
});
