/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxContentHeader } from '@siemens/ix-react';

export default () => {
  return (
    <IxContentHeader
      hasBackButton
      headerTitle="Content title that remains compact when horizontal space is limited"
      headerSubtitle="Supporting context is truncated independently when space is limited"
      textOverflow="ellipsis"
    >
      <IxButton variant="tertiary">Button1</IxButton>
      <IxButton variant="tertiary">Button2</IxButton>
      <IxButton variant="tertiary">Button3</IxButton>
    </IxContentHeader>
  );
};
