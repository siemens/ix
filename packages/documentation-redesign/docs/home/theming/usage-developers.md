# Developing with themes

Siemens Industrial Experience supports theming for all of its components.

Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:

- Classic light (theme-classic-light)
- Classic dark (theme-classic-dark)

You can also create your own themes in order to customize the design system for your own brand.

Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme.

## Using the old classic theme

The original classic theme was deprecated in favor of an updated version that is more easily maintainable for us.
The legacy theme is still available but no longer part of the main CSS file. In order to still apply it to your app, you have to load it manually.
This can be done in various ways.

The simplest way is to use the bundler/loader and just import the legacy styles inside your global stylesheet.

e.g. styles.css:

```
@import '@siemens/ix/dist-css/theme/legacy-classic-dark.css';
@import '@siemens/ix/dist-css/theme/legacy-classic-light.css';
```

If this step is done, you can set the theme name class on the body tag:

```html
<html>
  <!-- Framework related imports -->
  <!--  -->
  <body class="theme-legacy-classic-dark"></body>
</html>
```

- **deprecated** Legacy Classic light (theme-legacy-classic-light)
- **deprecated** Legacy Classic dark (theme-legacy-classic-dark)

## Siemens AG Corporate Brand Theme

<div className="siemens-brand-section">

The Siemens AG Corporate Brand Theme is exclusively available for official Siemens AG products, where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines.

Siemens AG employees can access the Corporate Brand Theme at [**https://code.siemens.com/siemens-ix/ix-brand-theme**](https://code.siemens.com/siemens-ix/ix-brand-theme).

</div>

## How to set a theme

The default theme is `theme-classic-dark`. To set a different theme, change the `class` attribute of the `<body>` tag to contain e.g. `theme-classic-light` instead of `theme-classic-dark`.

```html
<html>
  <!-- Framework related imports -->
  <!--  -->
  <body class="theme-classic-light"></body>
</html>
```

## Applying only one theme to reduce build size

Importing `siemens-ix-core.css` will only load core related functionalities, without preloading any theme or bootstrap.

You can load a specific theme by importing the corresponding CSS file.

**_Import CSS_**

```tsx
// Load 3rd Party libraries
import 'bootstrap/dist/css/bootstrap.css';

// Load the core parts
import '@siemens/ix/dist/siemens-ix/siemens-ix-core.css';

// Load theme
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
```

**_Set theme_**

```html
<body class="theme-classic-dark">
  ...
</body>
```

## Working with themes during runtime

<!-- <SinceTag message="1.3.0" />

<PlaygroundV3 name="theme-switcher" height="15rem">
</PlaygroundV3> -->
