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
    <form className="needs-validation">
      <input
        defaultValue="Some example text"
        placeholder="Enter text here"
        type="text"
        disabled
        className="ix-form-control"
      />
    </form>
  );
};
