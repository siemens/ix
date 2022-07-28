import { newSpecPage } from '@stencil/core/testing';
import { ModalContainer } from '../modal-container';

describe('cw-modal-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalContainer],
      html: `<cw-modal-container></cw-modal-container>`,
    });
    expect(page.root).toEqualHtml(`<cw-modal-container></cw-modal-container>`);
  });
});
