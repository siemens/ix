/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it } from 'vitest';

describe('event-list-item', () => {
  it('renders', async () => {
    const { root } = await render(<ix-event-list-item></ix-event-list-item>);

    expect(root.tagName).toBe('IX-EVENT-LIST-ITEM');
    expect(root).toHaveClass('hydrated');
    expect(root.shadowRoot?.querySelector('[role="listitem"]')).not.toBeNull();
  });
});
