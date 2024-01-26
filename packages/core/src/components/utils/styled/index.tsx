/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h } from '@stencil/core';

const parseInlineCss = (cssString: string) => {
  const cssObject = {};
  const declarations = cssString.split(';');

  for (let i = 0; i < declarations.length; i++) {
    const declaration = declarations[i].trim();
    if (declaration) {
      const [property, value] = declaration.split(':');
      if (property && value) {
        cssObject[property.trim()] = value.trim();
      }
    }
  }

  return cssObject;
};

export const styled = {
  div(strings: TemplateStringsArray, ...values: any[]) {
    // Combine the strings and values to construct the final string
    let result = '';
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
      if (i < values.length) {
        result += values[i];
      }
    }
    return (_, children) => (
      <div style={parseInlineCss(result)}>{children}</div>
    );
  },
};

const cssVar = (name: string) => `var(--theme-color-${name})`;

export const themeColors = {
  component1: cssVar('component-1'),
};
