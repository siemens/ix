/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxTextareaField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxTextareaField
        maxLength={100}
        name="comment"
        label="Comment"
        resizeBehavior="rowsCols"
        textareaRows="15"
        textareaCols="20"
        helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
      ></IxTextareaField>
    </>
  );
};
