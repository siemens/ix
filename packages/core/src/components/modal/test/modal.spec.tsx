import { newSpecPage } from '@stencil/core/testing';
import { Modal } from '../cw-modal';

describe('modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: `<cw-modal></cw-modal>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
