<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/tree-custom.html -->
```html

<div style="height: 8rem; width: 100%">
  <cw-tree root="root" id="tree"></cw-tree>
</div>

<script type="text/javascript">
  (async function () {
    await window.customElements.whenDefined('cw-tree');
    const tree = document.getElementById('tree');

    tree.renderItem = (index, item, dataList, context, update) => {
      const el = document.createElement('cw-tree-item');
      el.hasChildren = item.hasChildren;
      el.context = context;

      const div = document.createElement('div');
      div.style.display = 'flex';

      const name = document.createElement('span');
      const icon = document.createElement('cw-icon');
      icon.name = 'print';
      icon.style.marginRight = '1rem';

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
