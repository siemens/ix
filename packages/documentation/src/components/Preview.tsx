/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';
import Demo from './Demo';

const ordering = { angular: 1, react: 2, javascript: 3, preview: 4 };

export default function Preview(props: {
  name: string;
  theme?: string;
  height?: string;
  noMargin?: boolean;
  children: any[];
}) {
  const children = props.children ?? [];
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <Tabs
      groupId={props.name}
      values={[
        ...[{ value: 'preview', label: 'Preview' }],
        ...[
          { value: 'angular', label: 'Angular' },
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue' },
          { value: 'javascript', label: 'Web Components' },
        ].filter((v) => {
          return tabs.map((c) => c.props.value).includes(v.value);
        }),
      ]}
      defaultValue={'preview'}
    >
      {[
        <TabItem value="preview" key="preview">
          <Demo
            name={props.name}
            height={props.height}
            noMargin={props.noMargin}
          ></Demo>
        </TabItem>,
        ...tabs,
      ].sort((a, b) => {
        return ordering[a.props.value] - ordering[b.props.value];
      })}
    </Tabs>
  );
}
