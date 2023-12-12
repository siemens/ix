import { newE2EPage } from '@stencil/core/testing';

describe('side-panel-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<side-panel-wrapper></side-panel-wrapper>');

    const element = await page.find('side-panel-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
