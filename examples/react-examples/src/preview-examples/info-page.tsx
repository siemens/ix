/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxInfoPage } from '@siemens/ix-react';

export default () => {
  return (
    <IxInfoPage
      titleText="Report could not be generated"
      copyText="An error occurred while generating the report."
      instructions="Contact your administrator for more information."
    >
      <IxButton slot="actions">Return to overview</IxButton>
    </IxInfoPage>
  );
};
