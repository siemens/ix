| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|categories| Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality. Each ID maps to an object with a label and an array of options to select from. | `undefined` | `{ [id: string]: { label: string; options: string[]; }; }` | `undefined` |
|filterState| A set of search criteria to populate the component with. | `undefined` | `FilterState` | `undefined` |
|hideIcon| Allows to hide the icon inside the text input. Defaults to false | `hide-icon` | `boolean` | `undefined` |
|i18nPlainText| i18n | `i-1-8n-plain-text` | `string` | `'Filter by text'` |
|icon| The icon next to the actual text input Defaults to 'search' | `icon` | `string` | `'search'` |
|initialState| When set this will initially populate the component with the provided search criteria. This will trigger all input events accordingly. | `undefined` | `FilterState` | `undefined` |
|labelCategories| i18n | `label-categories` | `string` | `'Categories'` |
|nonSelectableCategories| In certain use cases some categories are not available for selection any more. To allow proper display of set filters with these categories this ID to label mapping can be populated. Configuration object hash used to supply labels to the filter chips in the input field. Each ID maps to a string representing the label to display. | `undefined` | `{ [id: string]: string; }` | `{}` |
|placeholder| Placeholder text to be displayed in an empty input field. | `placeholder` | `string` | `undefined` |
|repeatCategories| If set to true allows that a single category can be set more than once. An already set category will not appear in the category dropdown if set to false.<br /><br />Defaults to true | `repeat-categories` | `boolean` | `true` |
|suggestions| A list of strings that will be supplied as typeahead suggestions not tied to any categories. | `undefined` | `string[]` | `undefined` |
|tmpDisableScrollIntoView|  | `tmp-disable-scroll-into-view` | `boolean` | `true` |
