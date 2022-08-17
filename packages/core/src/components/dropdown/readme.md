# ix-dropdown

<!-- Auto Generated Below -->


## Properties

| Property                              | Attribute                                  | Description                                                                                                                                                                                                                 | Type                                                                                                                                                                                                         | Default        |
| ------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `adjustDropdownWidthToReferenceWidth` | `adjust-dropdown-width-to-reference-width` | Adjust dropdown width to the parent width                                                                                                                                                                                   | `boolean`                                                                                                                                                                                                    | `false`        |
| `adjustDropdownWidthToReferenceWith`  | `adjust-dropdown-width-to-reference-with`  | <span style="color:red">**[DEPRECATED]**</span> - property has a typo and will get removed in the next major version. Use `adjustDropdownWidthToReferenceWidth` instead.<br/><br/>Adjust dropdown width to the parent width | `boolean`                                                                                                                                                                                                    | `false`        |
| `anchor`                              | `anchor`                                   | Define an anchor element                                                                                                                                                                                                    | `HTMLElement \| string`                                                                                                                                                                                      | `undefined`    |
| `closeBehavior`                       | `close-behavior`                           | Close behavior                                                                                                                                                                                                              | `"both" \| "inside" \| "outside" \| boolean`                                                                                                                                                                 | `'both'`       |
| `header`                              | `header`                                   | An optional header shown at the top of the dropdown                                                                                                                                                                         | `string`                                                                                                                                                                                                     | `undefined`    |
| `placement`                           | `placement`                                | Placement of the dropdown                                                                                                                                                                                                   | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-end'` |
| `positioningStrategy`                 | `positioning-strategy`                     | Position strategy                                                                                                                                                                                                           | `"absolute" \| "fixed"`                                                                                                                                                                                      | `'fixed'`      |
| `show`                                | `show`                                     | Show dropdown                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                    | `false`        |
| `trigger`                             | `trigger`                                  | Define an element that triggers the dropdown. A trigger can either be a string that will be interprated as id attribute or a DOM element.                                                                                   | `HTMLElement \| string`                                                                                                                                                                                      | `undefined`    |


## Events

| Event         | Description                                         | Type                   |
| ------------- | --------------------------------------------------- | ---------------------- |
| `showChanged` | Fire event after visibility of dropdown has changed | `CustomEvent<boolean>` |


## Methods

### `updatePosition() => Promise<void>`

Update position of dropdown

#### Returns

Type: `Promise<void>`




----------------------------------------------


