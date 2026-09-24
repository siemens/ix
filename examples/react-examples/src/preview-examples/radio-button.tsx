/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './radio-button.scoped.css';

export default () => {
  return (
    <div className="radio-button">
      <input
        className="ix-form-control"
        defaultChecked
        id="checkbox_1_1"
        name="group_1"
        type="radio"
      />
      <label className="ix-form-label" htmlFor="checkbox_1_1">
        Checked
      </label>

      <input
        className="ix-form-control"
        id="checkbox_1_2"
        name="group_1"
        type="radio"
      />
      <label className="ix-form-label" htmlFor="checkbox_1_2">
        Normal
      </label>

      <input
        className="ix-form-control"
        disabled
        id="checkbox_1_3"
        name="group_1"
        type="radio"
      />
      <label className="ix-form-label" htmlFor="checkbox_1_3">
        Disabled
      </label>
    </div>
  );
};
