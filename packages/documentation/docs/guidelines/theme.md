---
sidebar_position: 0
---

# Themes

Siemens Industrial Experience supports theming for all of its components.

Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:

- Classic light (theme-classic-light)
- Classic dark (theme-classic-dark)
- **deprecated** Legacy Classic light (theme-legacy-classic-light)
- **deprecated** Legacy Classic dark (theme-legacy-classic-dark)

You can also create your own themes in order to customize the design system to your own brand.

Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme.

## Siemens AG Corporate Brand Theme

<div className="siemens-brand-section">

The Siemens AG Corporate Brand Theme is exclusively available to official Siemens AG products where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines.

Siemens AG employees can access the Corporate Brand Theme [here](https://code.siemens.com/siemens-ix/ix-brand-theme).

</div>


## How to set a theme

The default theme is `theme-classic-dark`. To set a different theme change the `class` attribute of the `<body>` tag to contain e.g. `theme-classic-light` instead of `theme-classic-dark`.

```html
<html>
  <!-- Framework related imports -->
  <!--  -->
  <body class="theme-classic-light"></body>
</html>
```

## Applying only one theme to reduce build size

The `siemens-ix-core.css` provides the possibility to import only core related functionalities, without any theme preloaded.

You can load a specific theme by importing the corresponding CSS file.

***Import CSS***

```tsx
// Load only the core parts
import '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';

// Load theme
import '@siemens/ix/dist/siemens-ix/theme/classic-new-light.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-new-dark.css';
```

***Set theme***

```html
<body class="theme-classic-new-dark">
  ...
</body>
```

