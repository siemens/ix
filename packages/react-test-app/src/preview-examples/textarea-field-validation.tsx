/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextareaField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTextareaField
          maxLength={100}
          name="comment"
          label="Comment"
          infoText="Info text"
          class="ix-info"
        ></IxTextareaField>
      </div>

      <div>
        <IxTextareaField
          maxLength={100}
          name="comment"
          label="Comment"
          warningText="Warning text"
          class="ix-warning"
        ></IxTextareaField>
      </div>

      <div>
        <IxTextareaField
          maxLength={100}
          name="comment"
          label="Comment"
          validText="Valid text"
          className="valid"
        ></IxTextareaField>
      </div>

      <div>
        <IxTextareaField
          maxLength={100}
          name="comment"
          label="Comment"
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxTextareaField>
      </div>
    </>
  );
};
