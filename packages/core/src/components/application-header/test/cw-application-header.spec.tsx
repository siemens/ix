import { newSpecPage } from '@stencil/core/testing';
import { ApplicationHeader } from '../application-header';

describe('ix-application-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApplicationHeader],
      html: `<ix-application-header name="Test App">
        <div slot="logo">LOGO</div>
      </ix-application-header>`,
    });
    expect(page.root).toEqualHtml(`
    <ix-application-header name="Test App">
      <mock:shadow-root>
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <span class="name">
          Test App
        </span>
        <slot></slot>
      </mock:shadow-root>
      <div slot="logo">
        LOGO
      </div>
    </ix-application-header>
    `);
  });
});
