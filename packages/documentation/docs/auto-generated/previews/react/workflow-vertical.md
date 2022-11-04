<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/workflow-vertical.tsx -->

```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-react';
import React from 'react';
export const WorkflowVertical: React.FC = () => {
  return (
    <IxWorkflowSteps vertical>
      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
    </IxWorkflowSteps>
  );
};
```
