import { newSpecPage } from '@stencil/core/testing';
import { SidePanel } from '../side-panel';

describe('side-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidePanel],
      html: `<side-panel></side-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <side-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-panel>
    `);
  });
});
