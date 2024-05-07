import { newE2EPage } from '@stencil/core/testing';

describe('ix-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ix-chat></ix-chat>');

    const element = await page.find('ix-chat');
    expect(element).toHaveClass('hydrated');
  });
});
