import { newSpecPage } from '@stencil/core/testing';
import { SidePanelWrapper } from '../side-panel-wrapper';

describe('side-panel-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidePanelWrapper],
      html: `<side-panel-wrapper></side-panel-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <side-panel-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-panel-wrapper>
    `);
  });
});
