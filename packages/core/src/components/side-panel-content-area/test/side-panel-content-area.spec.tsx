import { newSpecPage } from '@stencil/core/testing';
import { SidePanelContentArea } from '../side-panel-content-area';

describe('side-panel-content-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidePanelContentArea],
      html: `<side-panel-content-area></side-panel-content-area>`,
    });
    expect(page.root).toEqualHtml(`
      <side-panel-content-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-panel-content-area>
    `);
  });
});
