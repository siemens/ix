import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';

describe('ix-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<ix-card></ix-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-card>
    `);
  });
});
