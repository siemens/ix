// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import React, { useLayoutEffect, useRef } from 'react';

export const CheckboxIndeterminate: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element) {
      element.indeterminate = true;
    }
  }, []);

  return (
    <>
      <input type="checkbox" id="checkbox_01" ref={ref} />
      <label htmlFor="checkbox_01">Simple checkbox</label>
    </>
  );
};
