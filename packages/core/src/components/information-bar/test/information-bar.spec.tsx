import { newSpecPage } from '@stencil/core/testing';
import { InformationBar } from '../information-bar';

describe('information-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InformationBar],
      html: `<test-component></test-component>`,
    });
    expect(page.root).toEqualHtml(`
      <test-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-component>
    `);
  });
});
