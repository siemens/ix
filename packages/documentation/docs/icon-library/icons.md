---
sidebar_position: 3
---

import LivePreview from '@site/src/components/LivePreview';
import Icons from '@site/src/components/Icons';

# Icons

Using icons within your project. We need to:

- Install `@siemens/core-ui-icons` e.g `npm install --save @siemens/core-ui-icons`
- Import `@siemens/core-ui-icons/dist/scss/core-ui-webfont.css`

## Usage

### Angular or HTML

```html
<i class="glyph glyph-16 glyph-star"></i>
<i class="glyph glyph-24 glyph-star"></i>
<i class="glyph glyph-32 glyph-star"></i>
```

### Web component

```html
<cw-icon name="star" size="16"></cw-icon>
<cw-icon name="star" size="24"></cw-icon>
<cw-icon name="star" size="32"></cw-icon>
```

## Example Angular style.scss

```scss
@import '@siemens/core-ui-icons/dist/scss/core-ui-webfont.css';
```

## Icon Library

Click on tile to copy the icon code.

<Icons></Icons>
