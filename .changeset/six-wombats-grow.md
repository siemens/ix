---
'@siemens/ix-angular': minor
---

Add `suppressClassMapping` to value-accessors to prevent that the accessors automatically map `ng-`-classes to `ix-`-classes.

If `[suppressClassMapping]="true"` you need to control the `ix-`-classes on your own.

```html
<ix-input label="Name:" formControlName="name" [suppressClassMapping]="true" [class.ix-invalid]="!form.get('name')!.valid && form.get('name')!.touched" required> </ix-input>
```

`value-accessor` ignores NgControls which are untouched but has `required=true` errors

Fixes #1638 #1680
