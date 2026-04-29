---
'@siemens/ix': major
---

**Refactor ix-tabs and ix-tab-item to use key-based tab identification**

Replaces the index-based tab selection model with a string key-based approach, improving reliability when tabs are added, removed, or reordered dynamically.

## Breaking Changes

### ix-tabs

- Removed `selected` prop (number index). Use `activeTabKey` (string) instead.
- Removed `ariaLabelChevronLeftIconButton` and `ariaLabelChevronRightIconButton` props. Overflow is now handled via a dropdown menu instead of scroll arrows.
- Removed `selectedChange` event. Use `tabChange` which emits the active `tabKey` string instead of an index.

### ix-tab-item

- New required `tabKey` prop to uniquely identify each tab.
- Added `label` prop for setting tab text (preferred over slot content).
- Added `icon` prop for setting an icon on the tab.
- Added `closable` prop and `tabClose` event for closable tabs.
- `small`, `layout`, `placement`, and `rounded` props are now internal and set automatically by the parent `ix-tabs`.

### Migration

```html
<!-- Before -->
<ix-tabs selected="1">
  <ix-tab-item>Tab 1</ix-tab-item>
  <ix-tab-item>Tab 2</ix-tab-item>
</ix-tabs>

<!-- After -->
<ix-tabs active-tab-key="tab-2">
  <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
  <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
</ix-tabs>
```

Replace removed `selectedChange` event listeners with `tabChange`:

```js
// Before
tabs.addEventListener('selectedChange', (e) => console.log(e.detail)); // 0, 1, 2...

// After
tabs.addEventListener('tabChange', (e) => console.log(e.detail)); // 'tab-1', 'tab-2'...
```
