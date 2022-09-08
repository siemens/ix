import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../tabs';
describe('ix-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<ix-tabs>
        <ix-tab-item>Test 1</ix-tab-item>
      </ix-tabs>`,
    });
    expect(page.root).toEqualHtml(`<ix-tabs>
    <div class="overflow-shadow" style="opacity: 0; z-index: -1;"></div>
    <div class="arrow" style="opacity: 0; z-index: -1;">
      <span class="glyph glyph-chevron-left-small"></span>
    </div>
    <div class="tab-items">
      <div class="items-content">
        <ix-tab-item layout="auto" placement="bottom" selected="true">
          Test 1
        </ix-tab-item>
      </div>
    </div>
    <div class="overflow-shadow right" style="opacity: 0; z-index: -1;"></div>
    <div class="arrow right" style="opacity: 0; z-index: -1;">
      <span class="glyph glyph-chevron-right-small"></span>
    </div>
  </ix-tabs>`);
  });
});
