import { newE2EPage } from '@stencil/core/testing';

describe('test-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-component></test-component>');

    const element = await page.find('test-component');
    expect(element).toHaveClass('hydrated');
  });
});
