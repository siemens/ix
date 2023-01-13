---
sidebar_position: 3
sidebar_title: JavaScript
title: JavaScript
---

### Installation

Install `@siemens/ix` and `@siemens/ix-icons` using a package manager:

#### npm

```
npm i -S @siemens/ix @siemens/ix-icons
```

#### yarn

```
yarn add @siemens/ix @siemens/ix-icons
```

## Load styles and scripts

### Load web fonts

```html
<link rel="stylesheet" href="lib/ix-icons/dist/css/ix-icons.css" />
```

### Load common style sheet

```html
<link rel="stylesheet" href="lib/ix/dist/siemens-ix/siemens-ix.css" />
```

### Load `ix` Web Components

```html
<script type="module">
  import { defineCustomElements } from './lib/ix/loader/index.js';
  defineCustomElements();
</script>
```
