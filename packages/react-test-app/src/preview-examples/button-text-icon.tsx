/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/buttons.css';
import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton icon="star">Button</IxButton>
      <IxButton variant="secondary" icon="star">
        Button
      </IxButton>
      <IxButton outline icon="star">
        Button
      </IxButton>
      <IxButton ghost icon="star">
        Button
      </IxButton>
    </>
  );
};
