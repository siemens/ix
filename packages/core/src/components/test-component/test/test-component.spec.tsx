import { newSpecPage } from '@stencil/core/testing';
import { TestComponent } from '../test-component';

describe('test-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestComponent],
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
