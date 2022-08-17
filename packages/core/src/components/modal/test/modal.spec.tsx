import { newSpecPage } from '@stencil/core/testing';
import { Modal } from '../modal';

describe('modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: `<ix-modal></ix-modal>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
