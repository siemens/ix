<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-menu

<!-- Auto Generated Below -->

## Properties

| Property                 | Attribute                 | Description                                                                                                                                   | Type      | Default                       |
| ------------------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------- |
| `applicationDescription` | `application-description` | Should only be set if you use ix-menu standalone                                                                                              | `string`  | `''`                          |
| `applicationName`        | `application-name`        | Should only be set if you use ix-menu standalone                                                                                              | `string`  | `undefined`                   |
| `enableMapExpand`        | `enable-map-expand`       | Internal                                                                                                                                      | `boolean` | `false`                       |
| `enableSettings`         | `enable-settings`         | Is settings tab is visible                                                                                                                    | `boolean` | `true`                        |
| `enableToggleTheme`      | `enable-toggle-theme`     | Show toggle between light and dark variant. Only if the provided theme have implemented both!                                                 | `boolean` | `false`                       |
| `expand`                 | `expand`                  | Expand menu                                                                                                                                   | `boolean` | `false`                       |
| `i18nCollapse`           | `i-1-8n-collapse`         |                                                                                                                                               | `string`  | `'Collapse'`                  |
| `i18nExpand`             | `i-1-8n-expand`           |                                                                                                                                               | `string`  | `' Expand'`                   |
| `i18nLegal`              | `i-1-8n-legal`            |                                                                                                                                               | `string`  | `'About & legal information'` |
| `i18nMore`               | `i-1-8n-more`             |                                                                                                                                               | `string`  | `'More…'`                     |
| `i18nSettings`           | `i-1-8n-settings`         |                                                                                                                                               | `string`  | `'Settings'`                  |
| `i18nToggleTheme`        | `i-1-8n-toggle-theme`     |                                                                                                                                               | `string`  | `'Toggle theme'`              |
| `maxVisibleMenuItems`    | `max-visible-menu-items`  | Maximum number of menu items to show in case enough vertical space is available. Extra menu items will be collapsed to 'show more' menu item. | `number`  | `9`                           |
| `showAbout`              | `show-about`              | Is about tab visible                                                                                                                          | `boolean` | `false`                       |
| `showSettings`           | `show-settings`           | Is settings tab visible                                                                                                                       | `boolean` | `false`                       |

## Events

| Event             | Description          | Type                   |
| ----------------- | -------------------- | ---------------------- |
| `expandChange`    | Menu expanded        | `CustomEvent<boolean>` |
| `mapExpandChange` | Map Sidebar expanded | `CustomEvent<boolean>` |

## Methods

### `toggleAbout(show: boolean) => Promise<void>`

Toggle About tabs

#### Returns

Type: `Promise<void>`

### `toggleMapExpand(show?: boolean) => Promise<void>`

Toggle map sidebar expand

#### Returns

Type: `Promise<void>`

### `toggleMenu(show?: boolean) => Promise<void>`

Toggle menu

#### Returns

Type: `Promise<void>`

### `toggleSettings(show: boolean) => Promise<void>`

Toggle Settings tabs

#### Returns

Type: `Promise<void>`

---
