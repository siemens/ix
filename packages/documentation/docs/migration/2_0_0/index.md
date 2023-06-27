---
sidebar_position: 0
sidebar_title: Updating to v2
title: Updating to v2
---

# Updating to v2.0.0

Welcome to the migration guide for upgrading from Siemens iX v1 to v2.
Please follow this guide to ensure a smooth and successful migration process.

# Update your code

## Deprecation Notice: ix-menu-item `tabIcon` property

Previously, you may have used the `tabIcon` property to specify an icon for your ix-menu-item. However, to enhance clarity and align with established naming conventions in the library, we have deprecated the `tabIcon` property.

To migrate your code and replace the deprecated `tabIcon` property with the `icon` property, please follow these steps:

```html
<!-- Previous code -->
<ix-menu-item tabIcon="my-icon"></ix-menu-item>

<!-- Updated code -->
<ix-menu-item icon="my-icon"></ix-menu-item>
```

You can seamlessly transition from using the deprecated `tabIcon` property to the new `icon` property in ix-menu-item components while maintaining the same functionality.

## Event payload changed for ix-menu-settings and ix-menu-about

Previously, when closing the ix-menu-about and ix-menu-settings components, the close event's detail object provided information as a `CustomEvent<PointerEvent>`. However, to improve clarity and provide more specific information, the detail object has been updated to a `CustomEvent<{ nativeEvent: MouseEvent, name: string }}>` format.

The new detail object includes two properties:

- `nativeEvent`: This property contains the original MouseEvent that triggered the close event.
- `name`: This property specifies the name of the component (ix-menu-about or ix-menu-settings) for which the close event is being fired.

To handle the close event effectively, ensure that your code is updated to reflect this breaking change.


# New design concepts

## ix-menu


In the latest version of ix-menu, we have addressed the issue of menu items overflowing outside the menu container. Previously, when there were too many items, users had to click on a dropdown to see the hidden ones, resulting in a suboptimal experience.

To improve usability, we have made a breaking change. Now, the menu items overflow within the ix-menu itself as a scrollable list. This ensures that all menu items remain contained within the menu, offering a more intuitive and visually consistent experience.

These enhancements significantly improve the usability of ix-menu and enhance the overall user experience of your applications.


### New component `ix-menu-category`

`ix-menu-category` is a new addition to the `ix-menu` that enables the creation of second-level navigation within the `ix-menu` component. With `ix-menu-category`, you can organize your menu items into categories, providing a hierarchical structure for your menu navigation.

```tsx
<ix-menu-category label="AI Configuration" icon="rocket">
  <ix-menu-item>Nested Item 1</ix-menu-item>
  <ix-menu-item>Nested Item 2</ix-menu-item>
</ix-menu-category>
```

### Multiple screen layouts within the `ix-menu`

The `ix-menu` introduces new layout breakpoints that affect the display and behavior of the menu component based on the screen size. These breakpoints provide a responsive and adaptive menu layout for different devices and screen resolutions.

![Menu Layout](capture_layout_feature.gif)

With the updated version of ix-menu, you have the flexibility to choose which layout breakpoints are supported. You can specify the supported modes using the `supportedModes` property. This allows you to customize the menu's behavior and appearance according to your specific requirements.

The following breakpoints are now available in ix-menu:

- **Small**: `only screen and (max-width: 40em)`
  - Menu not visible.
- **Medium**: `only screen and (min-width: 40.063em) and (max-width: 64em)`
  - Menu visible but requires expansion to see the complete menu.
- **Large**: `only screen and (min-width: 64.063em)`
  - Shows the menu as pinned in full width.
  - The overlaying content is moved to the left.

These breakpoints enable the menu to adapt its layout and behavior according to the available screen space, ensuring optimal visibility and usability for different screen sizes.

By setting the `supportedModes` property, you can define which layout modes should be enabled for your menu. For example, if you want to support only the small and medium breakpoints, you can set the `supportedModes` property as follows:

```tsx
<ix-menu supportedModes={['small', 'medium']}>
  <!-- Menu items and categories -->
</ix-menu>
```
## Migration to ShadowDOM Components

In this update, we are excited to announce that we have migrated all of our components to ShadowDOM components. This migration brings several benefits and enhancements to the functionality and performance of our library.

ShadowDOM is a web standard that encapsulates the DOM subtree of a component, providing better isolation and encapsulation. By utilizing ShadowDOM, our components are now more robust and less prone to style conflicts or interference from external CSS.

Here are the key advantages of migrating to ShadowDOM components:

1. **Encapsulation**: With ShadowDOM, each component's styles and markup are encapsulated within its own DOM subtree. This isolation prevents styles from leaking out or being overridden unintentionally, ensuring more predictable and maintainable styling.

2. **Improved Performance**: ShadowDOM components have better performance due to the browser's optimized rendering of the encapsulated DOM subtree. This results in faster initial rendering and improved overall responsiveness of the components.

3. **Component Reusability**: The encapsulation provided by ShadowDOM makes our components more self-contained and reusable. They can be easily integrated into different projects without causing conflicts or interfering with existing styles and functionality.

With the migration to ShadowDOM components, we have taken a significant step towards enhancing the reliability, maintainability, and performance of our library. We believe this update will greatly benefit developers and users alike by providing a more seamless and robust experience.

Please note that as part of this migration, some changes may be required in your codebase if you were relying on direct manipulation or styling of our components. We recommend reviewing our updated documentation and examples to ensure a smooth transition and take full advantage of the benefits offered by ShadowDOM components.

We are excited about this update and look forward to your continued success with our improved and upgraded components.
