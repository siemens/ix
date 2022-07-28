/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { newSpecPage } from '@stencil/core/testing';
import { CwIcon } from '../icon';

describe('cw-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwIcon],
      html: `<cw-icon name="star"></cw-icon>`,
    });

    expect(page.root).toEqualHtml(`
      <cw-icon name="star" style="color: inherit;">
        <i class="glyph glyph-star"></i>
      </cw-icon>
    `);
  });

  it('renders different sizes', async () => {
    const page = await newSpecPage({
      components: [CwIcon],
      html: `<cw-icon name="star" size="16"></cw-icon>`,
    });

    expect(page.root).toEqualHtml(
      `
      <cw-icon name="star" class="size-16" size="16" style="color: inherit;">
        <i class="glyph glyph-16 glyph-star"></i>
      </cw-icon>
      `,
    );
  });
});
