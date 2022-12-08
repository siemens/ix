<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-modal

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                  | Type                                                                                      | Default            |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------ |
| `animation`        | `animation`          | Should the modal be animtated                                                                                                                                                | `boolean`                                                                                 | `true`             |
| `ariaDescribedBy`  | `aria-described-by`  |                                                                                                                                                                              | `string`                                                                                  | `undefined`        |
| `ariaLabelledBy`   | `aria-labelled-by`   |                                                                                                                                                                              | `string`                                                                                  | `'modal-title'`    |
| `backdrop`         | `backdrop`           | Adds a dimming layer to the modal. This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks). | `"static" \| boolean`                                                                     | `true`             |
| `backdropClass`    | `backdrop-class`     | Backdrop class                                                                                                                                                               | `string`                                                                                  | `undefined`        |
| `beforeDismiss`    | --                   | BeforeDismiss callback                                                                                                                                                       | `(reason?: any) => boolean \| Promise<boolean>`                                           | `undefined`        |
| `centered`         | `centered`           | Centered modal                                                                                                                                                               | `boolean`                                                                                 | `false`            |
| `content`          | `content`            | Content of modal                                                                                                                                                             | `HTMLElement \| string`                                                                   | `undefined`        |
| `headerTitle`      | `header-title`       | Header title                                                                                                                                                                 | `string`                                                                                  | `undefined`        |
| `icon`             | `icon`               | Optional icon displayed next to the title                                                                                                                                    | `string`                                                                                  | `undefined`        |
| `iconColor`        | `icon-color`         | Color of the header {@see ix-icon}                                                                                                                                           | `"color-alarm" \| "color-info" \| "color-std-text" \| "color-success" \| "color-warning"` | `'color-std-text'` |
| `keyboard`         | `keyboard`           | ESC close modal dialog                                                                                                                                                       | `boolean`                                                                                 | `true`             |
| `modalDialogClass` | `modal-dialog-class` | Modal dialog class                                                                                                                                                           | `string`                                                                                  | `undefined`        |
| `scrollable`       | `scrollable`         | Modal scollable                                                                                                                                                              | `boolean`                                                                                 | `true`             |
| `size`             | `size`               | Modal size                                                                                                                                                                   | `"lg" \| "sm" \| "xl"`                                                                    | `'sm'`             |
| `windowClass`      | `window-class`       | Window class                                                                                                                                                                 | `string`                                                                                  | `undefined`        |


## Events

| Event       | Description     | Type               |
| ----------- | --------------- | ------------------ |
| `closed`    | Modal closed    | `CustomEvent<any>` |
| `dismissed` | Modal dismissed | `CustomEvent<any>` |


## Methods

### `close<T = any>(result: T) => Promise<void>`

Close modal

#### Returns

Type: `Promise<void>`



### `dismiss<T = any>(reason?: T) => Promise<void>`

Dismiss modal instance

#### Returns

Type: `Promise<void>`




----------------------------------------------


