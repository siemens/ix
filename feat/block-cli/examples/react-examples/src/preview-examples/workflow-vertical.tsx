/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-react';

export default () => {
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
