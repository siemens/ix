/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { TreeExample } from './update-render-item';

test('should update tree item after model change', async () => {
  const screen = render(<TreeExample />);

  const modifyButton = screen.getByRole('button', { name: 'Modify' });

  await modifyButton.click();

  const sampleItem = screen.getByText('Bad sample');
  await expect.element(sampleItem).toHaveTextContent('Bad sample');
});
