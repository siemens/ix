/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from 'vitest';
import { getFigmaMeta } from './figma';

test('url with file url', () => {
  const meta = getFigmaMeta({
    url: 'https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)',
  });
  expect(meta.fileName).toBe('wEptRgAezDU1z80Cn3eZ0o');
  expect(meta.nodeId).toBe('1504-2203');
});

test('url with design url', () => {
  const meta = getFigmaMeta({
    url: 'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)',
  });
  expect(meta.fileName).toBe('wEptRgAezDU1z80Cn3eZ0o');
  expect(meta.nodeId).toBe('1504-2203');
});
