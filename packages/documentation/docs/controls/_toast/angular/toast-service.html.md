<!--
- SPDX-FileCopyrightText: 2024 Siemens AG
-
- SPDX-License-Identifier: MIT
-
- This source code is licensed under the MIT license found in the
- LICENSE file in the root directory of this source tree.
-->

<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Description</td>
      <td>Signature</td>
    </tr>
  </thead>
  <tr>
    <td>show</td>
    <td>Show new toast</td>
    <td>
      <code>
        show(config: ToastConfig): Promise&lt;&#123; onClose: TypedEvent&lt;any&gt;, close: (result?: any) =&gt; void&#125;&gt;
      </code>
    </td>
  </tr>
</table>
