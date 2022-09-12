import { newSpecPage } from '@stencil/core/testing';
import { EventListItem } from '../event-list-item';

describe('event-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EventListItem],
      html: `<event-list-item></event-list-item>`,
    });

    expect(page.root).toEqualHtml(`<event-list-item></event-list-item>`);
  });
});
