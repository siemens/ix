/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RELATIVE_URL_BASE = 'https://relative.invalid/';
const LINK_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);
const IMAGE_PROTOCOLS = new Set(['http:', 'https:']);

const parseUrl = (url: string, base?: string): URL | undefined => {
  try {
    return new URL(url, base);
  } catch {
    return undefined;
  }
};

/**
 * Links are limited to http(s), mailto and relative URLs. Relative URLs
 * resolve against an http(s) base, so any other scheme is rejected.
 */
export const isSafeLinkUrl = (url: string): boolean => {
  const parsed = parseUrl(url, RELATIVE_URL_BASE);
  return parsed !== undefined && LINK_PROTOCOLS.has(parsed.protocol);
};

/**
 * Images are limited to absolute http(s) URLs.
 */
export const isSafeImageUrl = (url: string): boolean => {
  const parsed = parseUrl(url);
  return parsed !== undefined && IMAGE_PROTOCOLS.has(parsed.protocol);
};
