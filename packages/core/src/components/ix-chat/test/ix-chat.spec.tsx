import { newSpecPage } from '@stencil/core/testing';
import { IxChat } from '../chat';

describe('ix-chat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxChat],
      html: `<ix-chat></ix-chat>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-chat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-chat>
    `);
  });
});
