---
'@siemens/ix': minor
---

fix(core/tree-item): improve keyboard accessibility for tree item interactions

- Tree item chevron and node container are now properly activatable via Enter and
  Space keys. Focus is preserved across tree refreshes. The expand/collapse icon
  uses a size-neutral control with button semantics, `aria-expanded`, and disabled
  state for correct screen-reader announcement without increasing the icon's size.
- Fix keyboard entry into trees to focus the selected item, or the first item when none is selected, as described by the WAI-ARIA tree-view pattern. Tab and Shift+Tab render and scroll to the entry item when it is outside the virtualized range, without changing selection.
- Expose the accessible disabled state on treeitems and keep disabled items reachable
  with arrow-key navigation while preserving a single tree Tab stop. Disabled items
  remain non-selectable and cannot be expanded or collapsed.
  Prevent Space from scrolling when a disabled treeitem is focused.
- Preserve the native Enter and Space keyboard behavior of controls slotted into tree items while keeping tree-row keyboard activation.
- Add arrow-key and Home/End navigation to tree views, with accessible selection and position information for virtualized nodes. Focus movement does not change the selected node.
- Preserve treeitem focus and the roving Tab stop when virtual scrolling renders a
  new chunk, including when tabbing to an off-screen treeitem inside a modal.
