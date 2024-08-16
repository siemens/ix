/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { iconCode, iconNavigation } from '@siemens/ix-icons/icons';

export const DocsTabQueryString = 'current-tab';

export default function LinkableDocsTabs(props: { children: [any, any] }) {
  return (
    <Tabs queryString={DocsTabQueryString}>
      <TabItem
        value="guidelines"
        label="Guidelines"
        attributes={{
          icon: iconNavigation,
        }}
      >
        {props.children[0]}
      </TabItem>

      <TabItem
        value="development"
        label="Development"
        attributes={{
          icon: iconCode,
        }}
      >
        {props.children[1]}
      </TabItem>
    </Tabs>
  );
}
