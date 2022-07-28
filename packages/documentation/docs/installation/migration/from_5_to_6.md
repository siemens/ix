# 6.0.0

This page details the breaking changes introduced by Core UI version 6.0.0 and how to adapt existing code accordingly.
It assumes that Core UI version 5.0.0 or higher is already installed.
Please follow the steps listed below to ensure proper migration.

## Imports changes

### Main stylesheet has new name and location

Replace `@siemens/core-ui/scss/core-ui-bootstrap-theme.scss`
with `@siemens/core-ui-core/dist/core-ui-core/core-ui-core.css`

### General styling/CSS is now located in package `@siemens/core-ui-core`

All CSS not tied to a component was moved from `@siemens/core-ui` to `@siemens/core-ui-core`.
There is no need to install `@siemens/core-ui-core` manually. It is listed as a dependency please do NOT install this package manually via npm.

To access mixins or SCSS variables change replace
`@import "~@siemens/core-ui/scss/<path_to_file>.scss"`
with `@import "~@siemens/core-ui-core/scss/<path_to_file>.scss"`

### Removed `theme.scss` and `/mixin/theme.scss`

All scss theme variables are now exposed as CSS custom properties.

# Services changes

## Service `SidebarOverlayService` is removed

You cannot open additonal overlays.

## Toastr

### Replaced build-in `ngx-toastr`-component with Core UI toast component

`class`-configuration paramters from `IndividualConfig` (e.g `toastClass`) will not be supported in 6.0.0.

### Change method parameters from `CuiToastrService`

Replaced parameter `component` with a configuration object.
To get the same result as before replace:

`toastService.success('some message', 'some title', myCustomComponent)`

with

`toastService.success('some message', 'some title', { toastComponent: myCustomComponent })`

# Components changes

## Pill and chip

The CSS classes `.cui-pill` and `.cui-chip` where replaced by components

Replace `.cui-pill` with `<cui-pill></cui-pill>`
Replace `.cui-chip` with `<cui-chip></cui-chip>`

Example:

Change `<div class="cui-chip chip-success active">Test</div>` to `<cui-chip [active]="true" varaint="success">Test</cui-chip>`

## Category filter

Changed property `key` of `categories` to `id`
Added property `label` to `categories` to support i18n of category names
Added property `options` to `categories` for possible values

Change `const categories = { key_1: ['option1', .. ], key_2: ['option_x', ..] };` to `const categories = { ID_1: { label: 'key_1', options: ['option_1', ..] }, .. };`

## Blind

Added default padding of `1rem` to collapsible content area.

## Event list

Rename `hideChevron` to `chevron`.

## Event list item

Remove property `multiline`.
Pull property `compact` up into event list.
Change property `color` to only accept Core UI custom property names as values.

## Group

Changed property `title` to `header` to prevent collision with native title attribute

## Map navigation overlay

Change property `color` to only accept Core UI custom property names as values.

## Popover news

Renamed property `titel` to `title`.

## Vertical tabs

Changed type of `notification` from `string` to `number` and renamed property to `notifications`.

Removed deprecated inputs `cuiHomeTab`, `cuiPosition` and `cuiNotification`

Replaced `cui-menu-item` with `cui-vertical-tab-avatar-item`
Change

```html
<cui-menu-item> Test </cui-menu-item>
```

to

```html
<cui-vertical-tab-avatar-item label="Test"></cui-vertical-tab-avatar-item>
```

### Interface `VerticalTabsMenuClickEvent`-Removed

Event is replaced by `CustomEvent`

### Vertical tab avatar

Removed deprectated inputs `tmpActivateMenu` and `avatarClic`

# CSS/SCSS

## Removed deprecated SASS mixins

`hoverAndPressed`
`hover-and-pressed-with-base-color`

## Renamed mixin `truncate_ellipsis` to `ellipsis`

Rename mixins `truncate_ellipsis` to `ellipsis`

## Fonts

Multiple changes to mixins, variables and classes

Support for these font styles was removed (replacement in parenthesis):

- Title (-> default title)
- Huge (-> XL)
- h1 (-> large title)
- h2 (-> H2)
- h3-h6 (no replacement)
