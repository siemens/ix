/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLocalStorage } from './use-localStorage';

export type FrameworkTypes = 'angular' | 'react' | 'vue' | 'html';

export const getDisplayNameFrameworkTypes = (framework: FrameworkTypes) => {
  switch (framework) {
    case 'angular':
      return 'Angular';
    case 'react':
      return 'React';
    case 'vue':
      return 'Vue';
    case 'html':
      return 'HTML';
  }
};

export const useFramework = () => {
  const [framework, setFramework] = useLocalStorage<FrameworkTypes>(
    'docusaurus.code.framework',
    'angular' satisfies FrameworkTypes
  );
  return { framework, setFramework };
};
