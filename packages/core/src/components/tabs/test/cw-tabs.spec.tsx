import { newSpecPage } from '@stencil/core/testing';
import { CwTabs } from '../tabs';

describe('cw-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwTabs],
      html: `<cw-tabs></cw-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-tabs>
    `);
  });
});
