import { newSpecPage } from '@stencil/core/testing';
import { TabItem } from '../tab-item';

describe('tab-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabItem],
      html: `
      <ix-tab-item>
        Some text
      </ix-tab-item>`,
    });
    expect(page.root).toEqualHtml(`<ix-tab-item class="bottom" tabindex="0">
    <div class="text">
      Some text
    </div>
  </ix-tab-item>`);
  });
});
