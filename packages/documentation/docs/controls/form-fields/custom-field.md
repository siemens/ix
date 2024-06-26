import Tags from '@site/docs/auto-generated/ix-custom-field/tags.md';

# Custom Field

<Tags />

`ix-custom-field` allows you to create form fields with all available validation states and all familiar field text inputs like `helper-text`, `valid-text`, `info-text`, `warning-text` or `invalid-text`.
The component will check if one of the children has the classes `ix-valid, ix-info, ix-warning or ix-invalid` is provided, if this is the case
the component will show the corresponding text.

Custom fields a be used to migrate from existing input concept (native inputs) to the new validation / from look.

A typical example would be:

<!-- TODO: Add example here html code is just an placeholder/example -->

```html
<ix-custom-field helper-text="Add your name here" invalid-text="The name is already taken!">
  <input type="text" class="form-control ix-invalid" />
</ix-custom-field>
```
