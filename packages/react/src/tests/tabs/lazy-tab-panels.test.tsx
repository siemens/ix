/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { LazyTabPanelsExample } from './lazy-tab-panels';

test('should only mount the active tab panel content', async () => {
  const onMount = vi.fn();
  const onUnmount = vi.fn();
  const { getByText, queryByText } = render(
    <LazyTabPanelsExample onMount={onMount} onUnmount={onUnmount} />
  );

  await waitFor(() => {
    expect(onMount).toHaveBeenCalledWith('Content 2');
  });

  expect(queryByText('Content 1')).toBeNull();
  expect(getByText('Content 2')).not.toBeNull();
  expect(queryByText('Content 3')).toBeNull();

  getByText('Open Tab 1').click();

  await waitFor(() => {
    expect(onUnmount).toHaveBeenCalledWith('Content 2');
    expect(onMount).toHaveBeenCalledWith('Content 1');
  });

  expect(getByText('Content 1')).not.toBeNull();
  expect(queryByText('Content 2')).toBeNull();
});
