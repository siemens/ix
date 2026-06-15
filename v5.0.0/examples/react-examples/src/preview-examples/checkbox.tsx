/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <input className="ix-form-control" type="checkbox" id="checkbox_01" />
        <label className="ix-form-label" htmlFor="checkbox_01">
          Simple checkbox
        </label>
      </div>

      <div>
        <input
          className="ix-form-control"
          type="checkbox"
          id="checkbox_02"
          disabled
        />
        <label className="ix-form-label" htmlFor="checkbox_02">
          Disabled checkbox
        </label>
      </div>
    </>
  );
};
