<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 2
sidebar_title: React
title: React
---

:::caution

Current **beta release** of _ix_ has some limitations, please check [this](./limitation).

:::

### Installation of dependencies

Preparation steps: _[Artifactory access and npm configuration](./artifactory.md)_

1. Install `@siemens/ix-react` (or a beta release `@siemens/ix-react@next`) and `@siemens/ix-icons`.

```
npm i -S @siemens/ix-react@latest
npm i -S @siemens/ix-icons@latest
```

### Import styles

```css
@import '../node_modules/@siemens/ix-icons/dist/css/ix-icons.css';
@import '../node_modules/@siemens/ix/dist/siemens-ix/siemens-ix.css';
```
