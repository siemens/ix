import { newSpecPage } from '@stencil/core/testing';
import { InputGroup } from '../input-group';

describe('input-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputGroup],
      html: `<input-group></input-group>`,
    });
    expect(page.root).toEqualHtml(`
      <input-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-group>
    `);
  });
});
