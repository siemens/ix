/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isHttpUrl, isSvgDataUrl } from './condition-checks';

export const a11yBoolean = (value: boolean) => (value ? 'true' : 'false');

const kebabCaseToUpperCaseSentence = (kebabCase: string) => {
  const withoutFilledSuffix = kebabCase.replace('-filled', '');
  const words = withoutFilledSuffix.split('-');
  const sentence = words
    .map((word) => {
      const trimWord = word.trim();
      const digitLessWord = trimWord.replace(/\d+/g, '');

      if (digitLessWord.length === 0) {
        return trimWord;
      }

      return digitLessWord;
    })
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return sentence;
};

export const getFallbackLabelFromIconName = (iconName: string) => {
  if (!iconName) {
    return 'Unknown';
  }

  if (isHttpUrl(iconName)) {
    return 'Unknown';
  }

  if (isSvgDataUrl(iconName)) {
    return 'Unknown';
  }

  const label = kebabCaseToUpperCaseSentence(iconName);

  if (label.length === 0) {
    return 'Unknown';
  }

  return label;
};
