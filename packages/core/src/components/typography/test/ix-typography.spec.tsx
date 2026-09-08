/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it } from 'vitest';

describe('ix-typography', () => {
  it('renders', async () => {
    const { root } = await render(
      <ix-typography>Example content</ix-typography>
    );

    expect(root).toHaveAttribute('hydrated');
    expect(root).toHaveClass('typography-body');
    expect(root).toHaveTextContent('Example content');
    expect(root.shadowRoot?.querySelector('slot')).not.toBeNull();
  });

  it('should accept text color', async () => {
    const { root } = await render(
      <ix-typography text-color="soft">Example content</ix-typography>
    );

    expect(root).toHaveClass('typography-body');
    expect(root.getAttribute('text-color')).toBe('soft');
  });

  it('should show format', async () => {
    const { root } = await render(
      <ix-typography format="display-xl">Example content</ix-typography>
    );

    expect(root).toHaveClass('typography-display-xl');
  });

  it('should show text decoration', async () => {
    const { root } = await render(
      <ix-typography text-decoration="underline">Example content</ix-typography>
    );

    expect(root).toHaveClass('typography-body');
    expect(root).toHaveClass('typography-decoration-underline');
  });
});
