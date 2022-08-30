---
sidebar_position: 3
sidebar_title: Javascript
title: Javascript
---

import Caution from './../caution-limitation.md';

<Caution />

## Installation of dependencies

Preparation steps: _[Artifactory access and npm configuration](./artifactory.md)_

### Install library

Install `@siemens/ix` (or a beta release `@siemens/ix@next`) and `@siemens/ix-icons`.

```
npm i -S @siemens/ix@latest
npm i -S @siemens/ix-icons@latest
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
