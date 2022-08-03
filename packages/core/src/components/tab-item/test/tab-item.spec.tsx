import { newSpecPage } from '@stencil/core/testing';
import { TabItem } from '../tab-item';

describe('tab-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabItem],
      html: `<tab-item></tab-item>`,
    });
    expect(page.root).toEqualHtml(`
      <tab-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tab-item>
    `);
  });
});
