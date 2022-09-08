import { newSpecPage } from '@stencil/core/testing';
import { InputGroup } from '../input-group';

describe('input-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputGroup],
      html: `<ix-input-group>
      <span slot="input-start">Price</span>
      <input type="number" class="form-control" />
      <span slot="input-end">.00</span>
      <span slot="input-end">$</span>
      </ix-input-group>`,
    });
    expect(page.root).toEqualHtml(`
    <ix-input-group>
      <div class="group group-start">
        <span class="input-group-label" slot="input-start">
          Price
        </span>
      </div>
      <input class="form-control" type="number" style="padding-right: 15px; padding-left: 15px;">
      <div class="group group-end">
        <span class="input-group-label" slot="input-end">
          .00
        </span>
        <span class="input-group-label" slot="input-end">
          $
        </span>
      </div>
    </ix-input-group>
    `);
  });
});
