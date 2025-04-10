---
sidebar_position: 0
sidebar_title: Upgrade to v3
title: Upgrade to v3
doc-type: 'banner'
description: 'Welcome to the migration guide for upgrading from Siemens Industrial Experience design system v2 to v3. This guide introduces all major changes.'
---

# Upgrade to v3.0.0

## Removed light and foundation Figma libraries

The following Figma libraries have been replaced by the _iX Component_ library:

- iX Component - Brand Light
- iX Foundation - Brand Light
- iX Foundation - Brand Dark
- iX Helpers

Follow the instructions below to update your Figma files to the new iX Component library:

1. On the left panel, click **Assets**.
2. Click on the <ix-icon name="book" size="16"></ix-icon> icon to open the libraries dialog.
3. Select a library you want to replace.
4. Click **Swap library**.
5. Choose **iX Components**.
6. Confirm and repeat for the other libraries.

Figma libraries for v2.0.0 are in the **Archive** project (find the link in the main library).

:::info
We have also prepared a video showing the process in our internal Siemens learning world [here](https://mylearningworld.siemens.com/web/en/app/toc/lex_auth_014279158647750656628/overview).
:::

## Changed loading of icons from package `@siemens/ix-icons`

Prior to version 3.0.0 of `@siemens/ix-icons` the entire icon set was loaded into the client by default, which caused unnecessary usage of bandwidth and memory.

Starting with version 3.0.0, icons can now be loaded individually, providing significant performance optimizations. To enable individual icon loading, the `@siemens/ix-icons` package now requires manual bootstrapping.

Please refer to the [`@siemens/ix-icons`](https://github.com/siemens/ix-icons) repository for detailed installation instructions. For usage with one of the framework wrappers (`@siemens/ix-angular`, `@siemens/ix-react` and `@siemens/ix-vue`) read the respective section below.

### Changed usage of icons inside `@siemens/ix-react` and `@siemens/ix-vue`

Icon imports by name (e.g. `<IxIcon name="star" />`) are no longer supported by default.

To import the icon use the following statement:

```ts
import { iconStar } from '@siemens/ix-icons/icons';
```

Use the icon as attribute like this:

```html
React:
<IxIcon name="{iconStar}" />

Vue:
<IxIcon :name="iconStar" />
```

If you want to use the "legacy" style (`<IxIcon name="star" />`), you'll need to do some additional setup tasks.

Create a copy task to ensure that all icons from the `@siemens/ix-icons` package are available as a static resource. Below is an example of a vite configuration (build only) example:

```ts
export default defineConfig({
  plugins: [
    react(),
    copy({
      verbose: true,
      targets: [
        {
          src: 'node_modules/@siemens/ix-icons/svg/*.svg',
          dest: 'public/svg',
        },
      ],
    }),
  ],
});
```

### Changed usage of icons inside `@siemens/ix-angular`

Copy iX icons into your project folder via `angular.json`.

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
  "glob": "**/*.svg",
  "input": "node_modules/@siemens/ix-icons/svg",
  "output": "./svg"
  }
],
```

Then you can reference iX icons by name anywhere in your application.

```html
<ix-icon name="star"></ix-icon>
```

To load individual icons you can also use the `addIcons` function during runtime.

```js
import { addIcons } from @siemens/ix-icons;
import { iconStar, iconStarFilled } from @siemens/ix-icons/icons;

addIcons({ iconStar, iconStarFilled });
```

```html
<ix-icon name="star"></ix-icon> <ix-icon name="star-filled"></ix-icon>
```

### Changed usage of icons in pure HTML

```html
<ix-icon name="star"></ix-icon>
```

### Custom asset path for icons

In order to be able to load custom icons, we need to configure the domain of the asset path. This can either be done via `meta`-tag or with the `setAssetPath`-function.

#### With `meta`-tag

```html
<html>
  <head>
    <!-- Some other tags -->
    <meta name="ix-icons:path" content="https://some-resource-domain" />
  </head>
  <body></body>
</html>
```

```html
<IxIcon name="star"></IxIcon>
```

Above code will fetch the SVG from `https://some-resource-domain/star.svg`.

#### With `setAssetPath`-function

Make sure to call the `setAssetPath`-function before using the `IxIcon` component (e.g. in the main file).

```ts
import { setAssetPath } from '@siemens/ix-icons/components';

setAssetPath('https://some-resource-domain');
```

```html
<IxIcon name="star"></IxIcon>
```

Above code will fetch the SVG from `https://some-resource-domain/star.svg`

This will preload all icons without including the SVGs as assets, which results in a larger bundle size.
Therefore, this approach is **NOT recommended**.

## Changed props to `@internal`

The following component members previously marked as internal by comment have been changed to annotated as `@internal`:

- `ix-menu`: `enableMapExpand`
- `ix-menu-about`: `show`
- `ix-menu-about-news`: `expanded`
- `ix-menu-settings`: `show`
- `ix-dropdown-item`: `emitItemClick()`

## Removed `Bootstrap` as a `peerDependency`

We are removing Bootstrap as a dependency to reduce the overall bundle size as well as to become more independent from third party CSS frameworks.
Of course you can still use Bootstrap together with @siemens/ix, but you need to add it to you project manually.

### HTML table classes `.table` and `.table-striped` are not based on Bootstrap anymore

Siemens Industrial Experience still offers CSS classes to style HTML tables, but the names have changed:

- The class `.table` is now `.ix-table`.
- The class `.table-striped` is now `.ix-table-striped`.

Please note that they are not based on Bootstrap anymore. If your tables rely on additional Bootstrap functionality (e.g. hoverable rows), you have to install Bootstrap on your own.

## Added namespacing of standard HTML elements

We decided to add the prefix `ix-` to our global styles of standard HTML elements like `input`, `textarea` and `label`.

This ensures that you can use other CSS libraries alongside iX to prevent class collisions. To ensure that your styles are not broken after you update to v3, you have to provide the class `ix-form-control` to `input` and `textarea`.

The standard `label` element needs the `ix-form-label` class.

Example:

Change

```html
<input type="text" /> <input type="text" class="form-control" />
```

to

```html
<input type="text" class="ix-form-control" /> <input type="text" class="ix-form-control" />
```

## Global style updates

### Changed `input` width value

We changed the default width of the `input` element from `width: 100%` to `width: auto`

## Component updates

#### ix-action-card

- Replaced `insight` and `notification` variants with `outline` and `filled`.

#### ix-card

- Replaced `insight` and `notification` variants with `outline` and `filled`.

#### ix-chip

- Replaced `color` property with `chipColor`.

#### ix-date-picker

- Removed `individual` and `eventDelimiter` attributes.
- Replaced `textSelectedDate` property with `i18nDone`.
- Replaced `done` event with `dateSelect`.

#### ix-datetime-picker

- Replaced `textSelectedDate` property with `i18nDone`.
- Replaced `done` event replaced with `dateSelect`.
- Removed `eventDelimiter` property.

#### ix-event-list

- Replaced `color` attribute with `itemColor`.

#### ix-icon-button

- Replaced `color` attribute with `iconColor`.
- Removed option `32` from attribute `size`.

#### ix-menu

- Removed `maxVisibleMenuItems` attribute.

#### ix-menu-item

- Replaced `tabIcon` attribute with `icon`.

#### ix-modal

- Replaced `keyboard` attribute with `closeOnEscape`.

#### ix-pill

- Replaced `color` attribute with `pillColor`.

#### ix-push-card

- Replaced `insight` and `notification` variants with `outline` and `filled`.

#### ix-select

- Replaced `selectedIndices` attribute with `value`.
- Replaced `itemSelectionChange` event with `valueChange`.

#### ix-select-item

- Changed type of attribute `value` to `string`.

#### ix-time-picker

- Removed `individual` and `showTimeReference` attributes.

#### ix-tree

Fix typo of `isExpanded` of `nodeToggled`-event.

Before:

```
type NodeToggleEventPayload = { id: string; isExpaned: boolean };
```

After:

```
type NodeToggleEventPayload = { id: string; isExpanded: boolean };
```

#### ix-typography

- Replaced `color` attribute with `textColor`.

## `@siemens/ix-echarts`

### Theme names changed

- From `brand-light` to `theme-brand-light`
- From `brand-dark` to `theme-brand-dark`
- From `classic-light` to `theme-classic-light`
- From `classic-dark` to `theme-classic-dark`

### Utility function `convertThemeName` war removed from `@siemens/ix-echarts`

The `convertThemeName` utility function has been removed, because it was not needed anymore after aligning the echarts theme names with iX CSS theme names.

From:

```javascript
import { convertThemeName, registerTheme } from '@siemens/ix-echarts';

const myEChart = echarts.init(element, convertThemeName(theme));
```

To:

```javascript
import { registerTheme } from '@siemens/ix-echarts';

const myEChart = echarts.init(element, theme);
```

## Questions ❓🙋‍♀️

Check out the [Breaking Changes guide](https://github.com/siemens/ix/blob/release-3.0.0/BREAKING_CHANGES/v3.md) and if you have further questions or migration problems [contact us](./../../support/contact-us).
