/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';

export type SupportedFrameworks = 'angular' | 'webcomponent' | 'react' | 'vue';

export const useFramework = (initalFramework: SupportedFrameworks) => {
  const [framework, _setFramework] = useState<SupportedFrameworks>();

  const setFramework = (newFramework: SupportedFrameworks) => {
    if (initalFramework) {
      _setFramework(initalFramework);
    } else {
      _setFramework(newFramework);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem('framework') as any;
    setFramework(item ? item : 'angular');

    const update = () => {
      const item = localStorage.getItem('framework') as any;
      setFramework(item ? item : 'angular');
    };

    window.addEventListener('storage', update);

    return () => {
      window.removeEventListener('storage', update);
    };
  }, []);

  return framework;
};
