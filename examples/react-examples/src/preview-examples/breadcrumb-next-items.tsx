/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [nextItems, setNextItems] = useState<
    { breadcrumbKey: string; label: string }[]
  >([]);

  useEffect(() => {
    setNextItems([{ label: 'Next Item 1', breadcrumbKey: 'next-item-1' }]);
  }, [setNextItems]);

  return (
    <IxBreadcrumb nextItems={nextItems}>
      <IxBreadcrumbItem
        label="Item 1"
        breadcrumbKey="item-1"
      ></IxBreadcrumbItem>
      <IxBreadcrumbItem
        label="Item 2"
        breadcrumbKey="item-2"
      ></IxBreadcrumbItem>
      <IxBreadcrumbItem
        label="Item 3"
        breadcrumbKey="item-3"
      ></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
