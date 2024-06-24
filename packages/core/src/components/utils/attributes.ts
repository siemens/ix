/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Attributes = Record<string, string>;

export const inheritAttributes = (
  element: HTMLElement,
  attributes: string[] = []
) => {
  const attributeObject: Attributes = {};

  attributes.forEach((attr) => {
    if (element.hasAttribute(attr)) {
      const value = element.getAttribute(attr);
      if (value !== null) {
        const attributeValue = element.getAttribute(attr);

        if (attributeValue) {
          attributeObject[attr] = attributeValue;
        }
      }
      element.removeAttribute(attr);
    }
  });

  return attributeObject;
};
