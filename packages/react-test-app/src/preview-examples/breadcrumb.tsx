// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
