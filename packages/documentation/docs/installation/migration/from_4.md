# 5.0.0

## Icons

Moved the icons to `@siemens/core-ui-icons` (https://***REMOVED***/ui-library/core-ui-icons/)

## Deprecated components

The following components will be replaced with `Basic` and `Map` Navigation

- Sidebar (`<cui-sidebar></cui-sidebar>`)
- Menubar and all sub components (`<cui-menubar></cui-menubar>`)
- Header (`<cui-header></cui-header>`)

## Deprecated stylings and classes

- svg icons listed in (`projects/core-ui/scss/_icons.scss`)

## Angular Modules

Removed CoreUI submodules and replaced with one CoreUI Module.

e.g

from:

```javascript
@NgModule({
  imports: [
    NavigationModule,
    InputModule,
    MenuBarModule,
  ]
})
```

to:

```javascript
@NgModule({
  imports: [
    CoreUiModule
  ]
})
```

## Button styling

### Prefix `btn`

All button classes must prefixed with `btn`.

from:

```html
<button class="btn-icon btn-invisible"></button>
```

to:

```html
<button class="btn btn-icon btn-invisible"></button>
```

### Button modification class `btn-icon`

Removes now only the default margin of `glyph`'s in combination with `btn`-class

## AGGrid Styling imports

First you have to import the base grid styling

`@import '../node_modules/ag-grid-community/dist/styles/ag-grid.scss';`

After the base styling import the core ui theme for aggrid:

`@import '../node_modules/@siemens/core-ui-aggrid/scss/ag-theme-core-ui/sass/ag-theme-core-ui.scss';`
`@import '../node_modules/@siemens/core-ui-aggrid/scss/ag-theme-core-ui-dark/sass/ag-theme-core-ui-dark.scss';`
