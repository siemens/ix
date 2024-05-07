import { newE2EPage } from '@stencil/core/testing';

describe('ix-chat-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ix-chat-message></ix-chat-message>');

    const element = await page.find('ix-chat-message');
    expect(element).toHaveClass('hydrated');
  });
});
