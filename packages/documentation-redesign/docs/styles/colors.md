import ColorTable from '@site/src/components/ColorTable';

# Colors

All colors are provided as custom properties.
To access them the `var()` CSS function can be called with the color's name:

```css
.some-example {
  background-color: var(--theme-color-primary);
}
```

## Background colors

Use “background colors” on non-interactive backgrounds like screen areas. Background colors are solid without opacity. The color-0 is an exception, it is transparent.

<ColorTable.WithChildren colorName="color-0">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-2">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-3">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-4">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-5">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-6">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-7">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-8">
</ColorTable.WithChildren>

## Component interaction colors

Component & interaction colors are used on interactive elements that often come with hover, active and selected states like buttons, toggle buttons, switch, cards, etc. Primary color is equal to brand color, often used for primary buttons or selected elements. “alt” means alternative and is used rarely, e.g. in date picker component to distinguish between selection start/end and the days in the range between.

<ColorTable.WithChildren colorName="color-primary">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-dynamic">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-dynamic-alt">
</ColorTable.WithChildren>

“color-component-1” are used on interactive elements with a visible fill like cards. They are semi-transparent to work on most background colors.

<ColorTable.WithChildren colorName="color-component-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-2">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-3">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-4">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-5">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-6">
</ColorTable.WithChildren>

Following ghost colors are used on elements with an invisible background but visible hover, active and selected states. “...-ghost-alt...” colors are used on alternating table grid patterns. These colors a semi-transparent and therefore work on most background colors.

<ColorTable.WithChildren colorName="color-ghost">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-ghost-alt">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-ghost-primary">
</ColorTable.WithChildren>

Following colors are widely solid, without opacity and are therefore used only on a specific background color or are used in combination with a border (e.g. outline button, input fields)

<ColorTable.WithChildren colorName="color-1--hover">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-1--active">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-secondary">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-8">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-error">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-info">
</ColorTable.WithChildren>

Following colors are only used in very specific components like date picker calendar

<ColorTable.WithChildren colorName="color-component-7">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-9">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-10">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-component-11">
</ColorTable.WithChildren>

## Status color

Status color are made to represent the different statuses. We support the following states:

- Alarm (error, invalid, danger)
- Critical (status between alarm and warning)
- Warning
- Success (valid, ok, good)
- Info (information)
- Neutral
  All colors are available for interaction states “hover” and “active”, each status color has a matching “contrast” color for placing text and icons on such a colored background.
  Each status color has furthermore a semi-transparent color that can be used on more subtle colored backgrounds.

:::note
Please note:
Don’t use status colors for texts as they would not meet the minimum required contrast in some constellations. Use the color for icons or on status indictors or backgrounds instead.
There is a special alarm text color that can be used for texts, see “text colors”.
:::
