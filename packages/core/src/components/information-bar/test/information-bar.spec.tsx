import { newSpecPage } from '@stencil/core/testing';
import { InformationBar } from '../information-bar';

describe('information-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InformationBar],
      html: `<information-bar></information-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <information-bar>
        <mock:shadow-root>
          <div class="bar-container"></div>
          <div class="icon-container"></div>
        </mock:shadow-root>
      </information-bar>
    `);
  });
});
