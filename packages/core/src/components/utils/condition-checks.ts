/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const isHttpUrl = (link: string) => {
  if (!link) {
    return false;
  }

  let url: URL;

  try {
    url = new URL(link);
  } catch (e) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

const SAFE_NAVIGATION_PROTOCOLS = new Set([
  'http:',
  'https:',
  'mailto:',
  'tel:',
]);

export const isSafeNavigationUrl = (link: string) => {
  if (typeof link !== 'string') {
    return false;
  }

  try {
    const url = new URL(link, 'https://ix.invalid');
    return SAFE_NAVIGATION_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
};

export const getSafeNavigationUrl = (
  link: string | undefined,
  componentName: string
) => {
  if (link === undefined || isSafeNavigationUrl(link)) {
    return link;
  }

  console.warn(
    `[${componentName}] Ignoring URL with an unsupported or invalid protocol.`
  );
  return undefined;
};

export const isSvgDataUrl = (url: string) => {
  if (!url) {
    return false;
  }

  if (typeof url !== 'string') {
    return false;
  }

  return url.startsWith('data:image/svg+xml');
};
