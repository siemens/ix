import { newSpecPage } from '@stencil/core/testing';
import { MenuCategory } from '../menu-category';

describe('menu-category', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MenuCategory],
      html: `<menu-category></menu-category>`,
    });
    expect(page.root).toEqualHtml(`
      <menu-category>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </menu-category>
    `);
  });
});
