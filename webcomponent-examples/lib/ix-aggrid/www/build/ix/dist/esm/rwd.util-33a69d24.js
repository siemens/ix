/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const convertToRemString = (value) => {
  const valueRem = value / 16;
  return `${valueRem}rem`;
};
const convertToAbbreviationString = (num) => {
  if (isNaN(num) || num === null || num === undefined) {
    return '';
  }
  let unit = '';
  // Metric Units
  const units = [
    { unit: 'q', value: Math.pow(10, 15) },
    { unit: 't', value: Math.pow(10, 12) },
    { unit: 'B', value: Math.pow(10, 9) },
    { unit: 'M', value: Math.pow(10, 6) },
    { unit: 'K', value: Math.pow(10, 3) }, // 1000
  ];
  units.some(pow => {
    let formattedNum = Math.abs(num);
    if (formattedNum >= pow.value) {
      formattedNum /= pow.value;
      num = Math.round(formattedNum * 10) / 10;
      unit = pow.unit;
      return true;
    }
    return false;
  });
  return num + unit;
};

export { convertToRemString as a, convertToAbbreviationString as c };
