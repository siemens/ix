import { newSpecPage } from '@stencil/core/testing';
import { NotificationCard } from '../notification-card';

describe('notification-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NotificationCard],
      html: `<notification-card></notification-card>`,
    });
    expect(page.root).toEqualHtml(`
      <notification-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </notification-card>
    `);
  });
});
