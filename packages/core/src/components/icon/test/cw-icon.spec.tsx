// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../icon';

describe('ix-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<ix-icon name="star"></ix-icon>`,
    });

    expect(page.root).toEqualHtml(`
      <ix-icon name="star" style="color: inherit;">
        <i class="glyph glyph-star"></i>
      </ix-icon>
    `);
  });

  it('renders different sizes', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<ix-icon name="star" size="16"></ix-icon>`,
    });

    expect(page.root).toEqualHtml(
      `
      <ix-icon name="star" class="size-16" size="16" style="color: inherit;">
        <i class="glyph glyph-16 glyph-star"></i>
      </ix-icon>
      `
    );
  });
});
