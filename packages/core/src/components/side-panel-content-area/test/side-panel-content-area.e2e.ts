import { newE2EPage } from '@stencil/core/testing';

describe('side-panel-content-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<side-panel-content-area></side-panel-content-area>'
    );

    const element = await page.find('side-panel-content-area');
    expect(element).toHaveClass('hydrated');
  });
});
