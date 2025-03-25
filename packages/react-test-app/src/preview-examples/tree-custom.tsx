/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TreeContext, TreeModel } from '@siemens/ix';
import { iconCut, iconPrint, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxIcon, IxTree } from '@siemens/ix-react';
import { useState } from 'react';

type TreeData = {
  name: string;
  icon: string;
};

export default () => {
  const [context, setContext] = useState<TreeContext>();
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
        icon: iconStar,
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: iconCut,
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: iconPrint,
      },
      hasChildren: false,
      children: [],
    },
  });

  function expandAndSelect() {
    setContext({
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    });
  }

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
      }}
    >
      <IxButton
        onClick={expandAndSelect}
        ghost
        style={{ marginBottom: '2rem' }}
      >
        Expand Tree
      </IxButton>
      <IxTree
        root="root"
        model={model}
        context={context}
        onContextChange={({ detail }) => {
          setContext(detail);
        }}
        renderItem={(data: TreeData) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IxIcon
              name={data.icon}
              size="16"
              style={{
                marginInlineEnd: '0.5rem',
              }}
            />
            {data.name}
          </div>
        )}
      ></IxTree>
    </div>
  );
};
