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

export const isSvgDataUrl = (url: string) => {
  if (!url) {
    return false;
  }

  if (typeof url !== 'string') {
    return false;
  }

  return url.startsWith('data:image/svg+xml');
};

export const isNumber = (value: unknown): value is number => {
  const isNumberType = typeof value === 'number' && !Number.isNaN(value);
  const isStringNumber = typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value));

  return isNumberType || isStringNumber;
};
