---
sidebar_position: 2
---

import Playground from '@site/src/components/Playground';

import SourceWebComponent from './../auto-generated/previews/web-component/theme-switcher.md'
import ReactComponent from './../auto-generated/previews/react/theme-switcher.md'
import AngularComponent from './../auto-generated/previews/angular/theme-switcher.ts.md'

import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';

# Themes

Siemens Industrial Experience supports theming for all of its components.

Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:

- Classic light (theme-classic-light)
- Classic dark (theme-classic-dark)

You can also create your own themes in order to customize the design system to your own brand.

Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme.

## How to set a theme

The default theme is `theme-classic-dark`. To set a different theme change the `class` attribute of the `<body>` tag to contain e.g. `theme-classic-light` instead of `theme-classic-dark`.

```html
<html>
  <!-- Framework related imports -->
  <!--  -->
  <body class="theme-classic-light"></body>
</html>
```

## Siemens AG Corporate Brand Theme

<div className="siemens-brand-section">

The Siemens AG Corporate Brand Theme is exclusively available to official Siemens AG products where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines.

Siemens AG employees can access the Corporate Brand Theme [here](https://code.siemens.com/siemens-ix/ix-brand-theme).

</div>

## Working with themes during runtime

<ApiTableSinceTag message="1.3.0" />

<Playground
name="theme-switcher" height="15rem"
frameworks={{
  react: ReactComponent,
  angular: AngularComponent,
  javascript: SourceWebComponent
}}></Playground>
