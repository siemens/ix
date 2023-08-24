import ThemeFonts from '@site/src/components/ThemeFonts';
import Props from './../auto-generated/ix-typography/props.md';

# Fonts

iX provides utility CSS classes to style text.
Theme changes will apply to texts automatically (e.g. change color).

## Usage

<ThemeFonts />

### `ix-typography`

<Props />

### Mixins

IX provides additional SCSS mixins which can be used to create valid custom typography
classes.

```scss
@import '@siemens/ix/scss/mixins/font';

.my-class-name {
  @include typography-h3;
}

```

```html
<span class="my-class-name">
  Lorem ipsum dolor sit amet consectetur. Et pulvinar arcu placerat
  tristique. Velit ipsum donec pulvinar erat donec turpis ultrices.
  Scelerisque pharetra sed sapien diam lorem. Risus quis in faucibus
  tempor. Hendrerit at cursus suspendisse neque adipiscing at at eu.
</span>

<!-- Same result as: -->
<ix-typography format="h3">
  Lorem ipsum dolor sit amet consectetur. Et pulvinar arcu placerat
  tristique. Velit ipsum donec pulvinar erat donec turpis ultrices.
  Scelerisque pharetra sed sapien diam lorem. Risus quis in faucibus
  tempor. Hendrerit at cursus suspendisse neque adipiscing at at eu.
</ix-typography>
```

