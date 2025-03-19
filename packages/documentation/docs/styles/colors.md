---
sidebar_position: 1
sidebar_label: Colors
title: Color palette
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: "The color palette in our design system provides a comprehensive guide to the use of colors, ensuring consistency and accessibility across all components, from background and text colors to chart series and status indicators."
---

import ColorTable from '@site/src/components/ColorTable';

# 

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

<ColorTable.WithChildren colorName="color-alarm">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-alarm-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-alarm-10">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-critical">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-critical-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-warning">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-warning-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-warning-10">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-success">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-info">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-info-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-neutral">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-neutral-40">
</ColorTable.WithChildren>

## Text colors

Text colors are used on text and icons.

- “color-contrast-text” is the darkest/lightest possible color and should be used in situations where the background color is hard to control (e.g. on custom colors)
- “color-std-text” is used as default for texts and icons
- “color-soft-text” text is used for secondary texts, sub titles, labels, hints or placeholder texts
- “color-weak-text” is used for disabled texts
- “color-alarm-text” is used for alarm, error, danger texts
- The “color-inv...” texts are rarely used. They are used in “inverted” situations e.g. text on light background in dark mode.

<ColorTable.WithChildren colorName="color-contrast-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-std-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-soft-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-weak-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-inv-contrast-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-inv-std-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-inv-weak-text">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-alarm-text">
</ColorTable.WithChildren>

## Border colors

- color-contrast-bdr is the darkest/lightest possible color and should be used in situations where the background color is hard to control (e.g. on custom colors)
- color-hard-bdr is used whenever the border should be a solid, non-transparent color
- color-std-bdr has a strong appearance and is used e.g. on input components
- color-soft-bdr is more subtle and used on cards and similar components or as separators
- color-weak-bdr is even more subtle and used for subtle separations of e.g. entire screen areas
- color-x-weak-bdr can be used for very subtle separations or content structuring

<ColorTable.WithChildren colorName="color-contrast-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-hard-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-std-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-soft-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-weak-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-x-weak-bdr">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-focus-bdr">
</ColorTable.WithChildren>

## Effect colors

Effect colors are used for shadows, lightbox effects or gradients.

- color-lightbox can be used for lightbox effects behind modals in combination with a background blur effect
- color-backdrop is used for overlays in combination with background blur effect to provide a very subtle ranslucent effect
- The gradient colors are used for brand gradient effects like in the big numbers of the html error pages

<ColorTable.WithChildren colorName="color-shadow-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-shadow-2">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-lightbox">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-backdrop">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-backdrop-3">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-gradient-effect-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="color-gradient-effect-2">
</ColorTable.WithChildren>

## Chart infrastructure colors

Following colors can be used to color the infrastructural elements in charting components

- axes = x and y axis lines
- ticks = small separations line with value labels
- grid-lines = horizontal/vertical lines behind the chart
- grid-fill = background of charting area
- tooltip = background for chart tooltip
- tooltip-bdr = border for chart tooltip

<ColorTable.WithChildren colorName="chart-axes">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-ticks">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-grid-lines">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-grid-fill">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-tooltip-fill">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-tooltip-bdr">
</ColorTable.WithChildren>

## Chart data colors

Use the following colors for data inside of charts. The colors are only proposals and not mandatory to use. Each color has a related ...-40 color, which means 40% opacity. You can use these colors for comparisons like current year vs. last year, or actual value vs. benchmark value.

<ColorTable.WithChildren colorName="chart-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-1-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-2">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-2-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-3">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-3-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-4">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-4-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-5">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-5-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-6">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-6-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-7">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-7-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-8">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-8-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-9">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-9-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-10">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-10-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-11">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-11-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-12">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-12-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-13">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-13-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-14">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-14-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-15">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-15-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-16">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-16-40">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-17">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-17-40">
</ColorTable.WithChildren>

## Color series for charts

For easily distinguishable data series, we recommend the following color sequence.

<ColorTable.WithChildren colorName="chart-3">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-2">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-8">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-1">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-6">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-4">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-10">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-9">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-11">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-14">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-13">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-12">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-7">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-15">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-16">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-17">
</ColorTable.WithChildren>

<ColorTable.WithChildren colorName="chart-5">
</ColorTable.WithChildren>
