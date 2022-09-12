/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';
import React from 'react';

export const Breadcrumb: React.FC = () => {
  return (
    <IxBreadcrumb>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
