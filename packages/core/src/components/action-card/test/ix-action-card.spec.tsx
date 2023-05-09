import { newSpecPage } from '@stencil/core/testing';
import { IxActionCard } from '../ix-action-card';

describe('ix-action-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxActionCard],
      html: `<ix-action-card></ix-action-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-action-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-action-card>
    `);
  });
});
