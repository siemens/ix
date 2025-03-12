/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element) {
      element.indeterminate = true;
    }
  }, []);

  return (
    <>
      <input
        className="ix-form-control"
        type="checkbox"
        id="checkbox_01"
        ref={ref}
      />
      <label className="ix-form-label" htmlFor="checkbox_01">
        Simple checkbox
      </label>
    </>
  );
};
