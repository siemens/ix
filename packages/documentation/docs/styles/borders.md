---
sidebar_position: 2
sidebar_label: Borders
title: Borders
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Borders serve as essential visual elements that define boundaries, create structure, and enhance the clarity of user interfaces.'
---

import BorderTable from '@site/src/components/BorderTable';

All borders are provided as custom properties.
To access them the `var()` CSS function can be called with the border's name:

```css
.some-example {
  border: var(--theme-primary-bdr-1);
}
```

- --theme-contrast-bdr is the darkest/lightest possible color and should be used in situations where the background color is hard to control (e.g. on custom colors)
- --theme-color-hard-bdr is used whenever the border should be a solid, non-transparent color
- --theme-color-std-bdr has a strong appearance and is used e.g. on input components
- --theme-color-soft-bdr is more subtle and used on cards and similar components or as separators
- --theme-color-weak-bdr is even more subtle and used for subtle separations of e.g. entire screen areas
- --theme-color-x-weak-bdr can be used for very subtle separations or content structuring

<BorderTable borderName="std-bdr-1">
</BorderTable>

<BorderTable borderName="soft-bdr-1">
</BorderTable>

<BorderTable borderName="weak-bdr-1">
</BorderTable>

<BorderTable borderName="x-weak-bdr-1">
</BorderTable>

<BorderTable borderName="contrast-bdr-1">
</BorderTable>

<BorderTable borderName="primary-bdr-1">
</BorderTable>

<BorderTable borderName="dynamic-bdr-1">
</BorderTable>

<BorderTable borderName="alarm-bdr-1">
</BorderTable>

<BorderTable borderName="critical-bdr-1">
</BorderTable>

<BorderTable borderName="warning-bdr-1">
</BorderTable>

<BorderTable borderName="success-bdr-1">
</BorderTable>

<BorderTable borderName="info-bdr-1">
</BorderTable>

<BorderTable borderName="neutral-bdr-1">
</BorderTable>
