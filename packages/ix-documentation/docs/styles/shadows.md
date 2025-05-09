---
sidebar_position: 3
sidebar_label: Shadows
title: Shadows
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Shadows serve as crucial visual elements that add depth, create dimension, and enhance the perception of hierarchy within your application.'
---

import ShadowTable from '@site/src/components/ShadowTable';
import ColorTable from '@site/src/components/ColorTable';

#

All shadows are provided as custom properties.
To access them the `var()` CSS function can be called with the shadow's name:

```css
.some-example {
  box-shadow: var(--theme-shadow-1);
}
```

<ShadowTable shadowName="shadow-1"/>
<ShadowTable shadowName="shadow-2"/>
<ShadowTable shadowName="shadow-3"/>
<ShadowTable shadowName="shadow-4"/>
<ShadowTable shadowName="inset-shadow-1"/>
