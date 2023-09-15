---
sidebar_position: 0
sidebar_title: Updating to v2
title: Updating to v2
---

# Updating to v2.0.0

Welcome to the migration guide for upgrading from Siemens iX v1 to v2.
Please follow this guide to ensure a smooth and successful migration process.

## Breaking changes in v2.0.0

You can find our guide describing all breaking changes in detail [here](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES.md#v200).
These are the most important ones:

# New default theme

We replaced the old theme with a more modern looking theme.

__Old:__

![ix theme old](theme_old.png)

__New:__

![ix theme new](theme_new.png)


# New concepts

## Replacement of Bootstrap Modal parts with iX modal components

__Old:__

```html
  <div class="modal-header>My Header</div>
  <div class="modal-body">My Content</div>
  <div class="modal-footer">
    <ix-button>Save</ix-button>
    <ix-button>Cancel</ix-button>
  </div>
```

__New:__

```html
  <ix-modal-header>My Header</ix-modal-header>
  <ix-modal-content>My Content</ix-modal-content>
  <ix-modal-footer>
    <ix-button>Save</ix-button>
    <ix-button>Cancel</ix-button>
  </ix-modal-footer>
```

## Updates in ix-basic-navigation and ix-menu

In the latest version of `ix-basic-navigation`, we have changed how menu items overflowing outside the menu container are being handled. Previously, when there were too many items, users had to click on a dropdown to see the hidden ones, resulting in a suboptimal experience.
Now the list of menu items will scroll vertically to prevent overflow.
This ensures that all menu items remain contained within the menu, offering a more intuitive and visually consistent experience.

### New component `ix-menu-category`

`ix-menu-category` is a new addition to the `ix-menu` that enables the creation of a second level of navigation within the `ix-menu` component. With `ix-menu-category`, you can organize your menu items into categories, providing a hierarchical structure for your menu navigation.

```tsx
<ix-menu-category label="AI Configuration" icon="rocket">
  <ix-menu-item>Nested Item 1</ix-menu-item>
  <ix-menu-item>Nested Item 2</ix-menu-item>
</ix-menu-category>
```

### Multiple screen layouts within `ix-basic-navigation`

The `ix-basic-navigation` introduces new layout breakpoints that affect the display and behavior of the menu component based on the screen size. These breakpoints provide a responsive and adaptive menu layout for different devices and screen resolutions.

![Menu Layout](capture_layout_feature.gif)

With the updated version of `ix-menu`, you have the flexibility to choose which layout breakpoints you want to supported. You can specify the supported modes using the `breakpoints` property. This allows you to customize the menu's behavior and appearance according to your specific requirements.

Here you can see all available breaakpoints and how they affect `ix-menu`:

- **sm**: `only screen and (min-width: 36em)`
  - Menu not visible
- **md**: `only screen and (min-width: 48em)`
  - Menu is visible but has to be expaned to see it fully
- **lg**: `only screen and (min-width: 62em)`
  - Shows the menu as pinned and in its full width
  - The underlying content will be shifted to the right to be fully accessible

These breakpoints enable the menu to adapt its layout and behavior according to the available screen real estate, ensuring optimal visibility and usability for different screen sizes.

In addition to that you can specify which layout modes should be enabled for your menu by setting the `breakpoints` property. For example, if you want to support only the small and medium viewports, you can set the `breakpoints` property as follows:

```tsx
<ix-basic-navigation breakpoints={['sm', 'lg']}>
  <ix-menu>
    <!-- Menu items and categories -->
  </ix-menu>
</ix-basic-navigation>
```

## Spinner animation

We replaced the previous animation with a cleaner and more refined alternative.

![Spinner](spinner.gif)

## Shadow DOM

We are excited to announce that we have migrated all of our components to Shadow DOM. This migration brings several benefits and enhancements to the functionality and performance of our library.

Here are the key advantages of migrating to Shadow DOM components:

1. **Interoperability**: Shadow DOM provides encapsulation for components, isolating their styles and markup within a dedicated DOM subtree. This ensures predictable and maintainable styling, while enabling seamless integration of self-contained and reusable components into various projects without conflicts or interference with existing styles and functionality.

2. **Improved Performance**: Shadow DOM components have better performance due to the browser's optimized rendering of the encapsulated DOM subtree. This results in faster initial rendering and improved overall responsiveness of the components.

Please note that as part of this migration, some changes may be required in your codebase if you were relying on direct manipulation or styling of our components. We recommend review of our updated documentation and examples to ensure a smooth transition so you can take full advantage of the benefits offered by Shadow DOM components.

## Preparation for removing Bootstrap as dependency

One goal of the [Shadow DOM](#shadow-dom) refactoring was to make all ix components interoperable. Therefore we decided we no longer want to depend on any third party CSS framework.
In the past we relied on bootstrap which is no longer necessary. By removing boostrap from the list of peer dependecies we will provide you with the flexibility to choose anyone of the available CSS frameworks without running into conflicts.

As for now bootstrap is still a part of our library but we are planning to drop bootstrap entirely in a future release.

If you want to check if your application is still working smoothly without bootstrap you can already test this by loading the new `core CSS` file.

A detailed description can be found [here](./../../guidelines/theme#applying-only-one-theme-to-reduce-build-size).

# Questions ❓🙋‍♀️

Don't forget to checkout the [Breaking Changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES.md).

If you have further questions or you are facing any problems during migration please [contact us over our forum](https://community.siemens.com/c/ix/).
