---
sidebar_position: 3
sidebar_label: Shadows
title: Shadows
hide_table_of_contents: false
doc-type: 'component'
component-tabs: ['']
no_single_tab: true
description: "Shadows serve as crucial visual elements that add depth, create dimension, and enhance the perception of hierarchy within your application."
---

# 

All shadows are provided as custom properties.
To access them the `var()` CSS function can be called with the shadow's name:

```css
.some-example {
  box-shadow: var(--theme-shadow-1);
}
```
