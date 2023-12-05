import { newE2EPage } from '@stencil/core/testing';

describe('side-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<side-panel></side-panel>');

    const element = await page.find('side-panel');
    expect(element).toHaveClass('hydrated');
  });
});
