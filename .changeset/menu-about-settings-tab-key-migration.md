---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

**Update `ix-menu-about` and `ix-menu-settings` for key-based tabs and slotted `ix-tabs` opt-in**

`ix-menu-about` and `ix-menu-settings` keep their legacy `ix-menu-about-item` / `ix-menu-settings-item` rendering by default. To switch to slotted `ix-tabs` / `ix-tab-item` markup, set the new `suppressLegacyTabs` prop on the parent menu component. `ix-menu-about-news` still uses `activeAboutTabKey` instead of `aboutItemLabel`.

### Breaking Changes

#### ix-menu-about / ix-menu-settings

- The slotted `ix-tabs` integration path uses the new `suppressLegacyTabs` prop on the parent menu component.
- `ix-menu-about` renamed `activeTabLabel` to `activeTabKey` for legacy item-based integrations.

#### ix-menu-about-item / ix-menu-settings-item

- `tabKey` is now required when using legacy item-based integrations.
- `ix-menu-about-item` changed from `shadow: true` to `shadow: false`.

#### ix-menu-about-news

- New `activeAboutTabKey` prop replaces `aboutItemLabel` as the condition for showing the "Show more" footer button.
- The `aboutItemLabel` prop no longer controls footer visibility. Use `activeAboutTabKey` instead.

### Migration

Use the existing `ix-tabs` pattern in your application (`ix-menu-about` / `ix-menu-settings`), and show the matching slotted content based on the active tab key. Set `suppressLegacyTabs` on the `ix-menu-about` / `ix-menu-settings` and `active-tab-key` on the nested `ix-tabs`, not on `ix-menu-about` or `ix-menu-settings`.

```html
<!-- Slotted ix-tabs path -->
<ix-menu-about suppress-legacy-tabs>
  <ix-tabs active-tab-key="tab-1">
    <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
    <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
  </ix-tabs>
  <!-- render the matching content in the slot using the active tab key -->
</ix-menu-about>
```

```html
<!-- Legacy item-based path -->
<ix-menu-about active-tab-key="tab-1">
  <ix-menu-about-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-about-item>
  <ix-menu-about-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-about-item>
</ix-menu-about>
```

```html
<!-- Legacy item-based path -->
<ix-menu-settings active-tab-key="tab-1">
  <ix-menu-settings-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-settings-item>
</ix-menu-settings>
```
