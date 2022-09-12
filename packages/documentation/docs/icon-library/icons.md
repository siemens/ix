<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 3
---

import LivePreview from '@site/src/components/LivePreview';
import Icons from '@site/src/components/Icons';

# Icons

Using icons within your project. We need to:

- Install `@siemens/ix-icons` e.g `npm install --save @siemens/ix-icons`
- Import `@siemens/ix-icons/dist/scss/ix-icons.css`

## Usage

### Angular or HTML

```html
<i class="glyph glyph-16 glyph-star"></i>
<i class="glyph glyph-24 glyph-star"></i>
<i class="glyph glyph-32 glyph-star"></i>
```

### Web component

```html
<ix-icon name="star" size="16"></ix-icon>
<ix-icon name="star" size="24"></ix-icon>
<ix-icon name="star" size="32"></ix-icon>
```

## Example Angular style.scss

```scss
@import '@siemens/ix-icons/dist/scss/ix-icons.css';
```

## Icon Library

Click on tile to copy the icon code.

<Icons></Icons>
