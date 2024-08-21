/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { stripComments } from '../PlaygroundV2/utils';

export async function docusaurusFetch(url: string, removeComments = true) {
  const response = await fetch(url);

  if (!response.ok) {
    throw `Error fetching code from ${url}`;
  }

  const text = await response.text();

  // Check if the response is empty or contains a 404 page
  if (
    !text ||
    text?.includes('<div id="__docusaurus"></div>') ||
    text?.includes('Page Not Found')
  ) {
    throw `Error fetching code from ${url}`;
  }

  return removeComments ? stripComments(text) : text;
}
