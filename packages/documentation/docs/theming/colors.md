import ThemeColors from '@site/src/components/ThemeColors';

# Colors

All colors are provided as custom properties.
To access them the `var()` CSS function can be called with the color's name:

```css
.some-example {
  background-color: var(--theme-color-primary);
}
```

<ThemeColors></ThemeColors>
