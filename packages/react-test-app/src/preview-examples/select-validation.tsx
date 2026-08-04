/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSelect, IxSelectItem } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          infoText="We will show examples based on your selection."
          className="ix-info"
        >
          <IxSelectItem value="angular" label="Angular"></IxSelectItem>
          <IxSelectItem value="react" label="React"></IxSelectItem>
          <IxSelectItem value="vue" label="Vue"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          warningText="Selected Framework is partly supported."
          className="ix-warning"
          value="blazor"
        >
          <IxSelectItem value="blazor" label="Blazor"></IxSelectItem>
          <IxSelectItem value="nextjs" label="NextJS"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          validText="Selected Framework is fully supported."
          className="ix-valid"
          value="angular"
        >
          <IxSelectItem value="angular" label="Angular"></IxSelectItem>
          <IxSelectItem value="react" label="React"></IxSelectItem>
          <IxSelectItem value="vue" label="Vue"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          invalidText="Selected Framework is not supported."
          className="ix-invalid"
          value="svelte"
        >
          <IxSelectItem value="svelte" label="Svelte"></IxSelectItem>
          <IxSelectItem value="solid" label="Solid"></IxSelectItem>
        </IxSelect>
      </div>
    </>
  );
};
