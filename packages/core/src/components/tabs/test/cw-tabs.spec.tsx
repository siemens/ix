import { newSpecPage } from '@stencil/core/testing';
import { CwTabs } from '../tabs';

describe('ix-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwTabs],
      html: `<ix-tabs></ix-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-tabs>
    `);
  });
});
