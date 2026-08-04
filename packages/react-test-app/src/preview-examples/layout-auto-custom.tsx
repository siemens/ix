/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './layout-auto.scoped.css';

import { IxLayoutAuto, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto
      className="LayoutExample"
      layout={[
        { minWidth: '0', columns: 1 },
        { minWidth: '560px', columns: 2 },
        { minWidth: '800px', columns: 4 },
      ]}
    >
      <IxTypography format="display">1</IxTypography>
      <IxTypography format="display">2</IxTypography>
      <IxTypography format="display">3</IxTypography>
      <IxTypography format="display" data-colspan="2">
        4
      </IxTypography>
      <IxTypography format="display">5</IxTypography>
      <IxTypography format="display">6</IxTypography>
    </IxLayoutAuto>
  );
};
