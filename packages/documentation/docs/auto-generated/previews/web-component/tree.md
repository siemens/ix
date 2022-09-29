<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/documentation/static/webcomponent-examples/tree.html -->
```html

<div style="height: 8rem; width: 100%">
  <ix-tree root="root" id="tree"></ix-tree>
</div>

<script type="text/javascript">
  (async function () {
    await window.customElements.whenDefined('ix-tree');
    const tree = document.getElementById('tree');

    tree.model = {
      root: {
        id: 'root',
        data: null,
        hasChildren: true,
        children: ['sample'],
      },
      sample: {
        id: 'sample',
        data: {
          name: 'Sample',
        },
        hasChildren: true,
        children: ['sample-child-1', 'sample-child-2'],
      },
      'sample-child-1': {
        id: 'sample-child-1',
        data: {
          name: 'Sample Child 1',
        },
        hasChildren: false,
        children: [],
      },
      'sample-child-2': {
        id: 'sample-child-2',
        data: {
          name: 'Sample Child 2',
        },
        hasChildren: false,
        children: [],
      },
    };
  })();
</script>
```
