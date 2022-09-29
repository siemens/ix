/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const toggleVariant = () => {
  let currentTheme = Array.from(document.body.classList).find((className) =>
    className.includes('theme-')
  );

  if (!currentTheme) {
    currentTheme = 'theme-classic-dark';
  }

  const isDark = currentTheme.endsWith('-dark');
  let newTheme = currentTheme;

  if (isDark) {
    newTheme = currentTheme.replace(/-dark$/g, '-light');
  } else {
    newTheme = currentTheme.replace(/-light$/g, '-dark');
  }

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
};
