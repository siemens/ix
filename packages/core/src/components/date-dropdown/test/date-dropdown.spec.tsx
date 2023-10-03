import { newSpecPage } from '@stencil/core/testing';
import { DateDropdown } from '../date-dropdown';

describe('date-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateDropdown],
      html: `<date-dropdown></date-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <date-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-dropdown>
    `);
  });
});
