/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
