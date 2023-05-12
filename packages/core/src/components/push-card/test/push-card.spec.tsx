import { newSpecPage } from '@stencil/core/testing';
import { PushCard } from '../push-card';

describe('push-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PushCard],
      html: `<ix-push-card></ix-push-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-push-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-push-card>
    `);
  });
});
