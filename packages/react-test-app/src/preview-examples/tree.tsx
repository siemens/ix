/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TreeModel } from '@siemens/ix';
import { IxTree } from '@siemens/ix-react';
import { useState } from 'react';

type TreeData = {
  name: string;
  icon: string;
};

export default () => {
  const [model] = useState<TreeModel<TreeData>>({
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  });
  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
      }}
    >
      <IxTree root="root" model={model}></IxTree>
    </div>
  );
};
