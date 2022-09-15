<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/tree-custom.html -->
```html

<div style="height: 8rem; width: 100%">
  <ix-tree root="root" id="tree"></ix-tree>
</div>

<script type="text/javascript">
  (async function () {
    await window.customElements.whenDefined('ix-tree');
    const tree = document.getElementById('tree');

    tree.renderItem = (index, item, dataList, context, update) => {
      const el = document.createElement('ix-tree-item');
      el.hasChildren = item.hasChildren;
      el.context = context;

      const div = document.createElement('div');
      div.style.display = 'flex';

      const name = document.createElement('span');
      const icon = document.createElement('ix-icon');
      icon.name = item.data.icon;
      icon.style.marginRight = '0.5rem';

      div.appendChild(icon);
      div.appendChild(name);

      name.innerText = item.data.name;

      el.appendChild(div);

      update((updateTreeItem) => {
        name.innerText = updateTreeItem.data.name;
      });

      return el;
    };

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
    };
  })();
</script>
```
