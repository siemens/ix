import { newE2EPage } from '@stencil/core/testing';

describe('date-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-dropdown></date-dropdown>');

    const element = await page.find('date-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
