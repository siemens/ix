<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-category-filter

<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute           | Description                                                                                                                                                                                                                                                                                                                                | Type                                                       | Default            |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ------------------ |
| `categories`              | --                  | Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality. Each ID maps to an object with a label and an array of options to select from.                                                                                                                                              | `{ [id: string]: { label: string; options: string[]; }; }` | `undefined`        |
| `filterState`             | --                  | A set of search criteria to populate the component with.                                                                                                                                                                                                                                                                                   | `FilterState`                                              | `undefined`        |
| `hideIcon`                | `hide-icon`         | Allows to hide the icon inside the text input. Defaults to false                                                                                                                                                                                                                                                                           | `boolean`                                                  | `undefined`        |
| `i18nPlainText`           | `i-1-8n-plain-text` | i18n                                                                                                                                                                                                                                                                                                                                       | `string`                                                   | `'Filter by text'` |
| `icon`                    | `icon`              | The icon next to the actual text input Defaults to 'search'                                                                                                                                                                                                                                                                                | `string`                                                   | `'search'`         |
| `initialState`            | --                  | <span style="color:red">**[DEPRECATED]**</span> Will be removed with 2.0.0. Use the member filterState instead.<br/><br/>When set this will initially populate the component with the provided search criteria. This will trigger all input events accordingly.                                                                            | `FilterState`                                              | `undefined`        |
| `labelCategories`         | `label-categories`  | i18n                                                                                                                                                                                                                                                                                                                                       | `string`                                                   | `'Categories'`     |
| `nonSelectableCategories` | --                  | In certain use cases some categories are not available for selection any more. To allow proper display of set filters with these categories this ID to label mapping can be populated. Configuration object hash used to supply labels to the filter chips in the input field. Each ID maps to a string representing the label to display. | `{ [id: string]: string; }`                                | `{}`               |
| `placeholder`             | `placeholder`       | Placeholder text to be displayed in an empty input field.                                                                                                                                                                                                                                                                                  | `string`                                                   | `undefined`        |
| `repeatCategories`        | `repeat-categories` | If set to true allows that a single category can be set more than once. An already set category will not appear in the category dropdown if set to false.  Defaults to true                                                                                                                                                                | `boolean`                                                  | `true`             |
| `suggestions`             | --                  | A list of strings that will be supplied as typeahead suggestions not tied to any categories.                                                                                                                                                                                                                                               | `string[]`                                                 | `undefined`        |


## Events

| Event           | Description                                         | Type                       |
| --------------- | --------------------------------------------------- | -------------------------- |
| `filterChanged` | Event dispatched whenever the filter state changes. | `CustomEvent<FilterState>` |
| `inputChanged`  | Event dispatched whenever the text input changes.   | `CustomEvent<InputState>`  |


----------------------------------------------


