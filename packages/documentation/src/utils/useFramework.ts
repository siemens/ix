/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { useEffect, useState } from 'react';

export type SupportedFrameworks = 'angular' | 'webcomponent' | 'react';

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
