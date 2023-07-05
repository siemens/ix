import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import SourceAggrid from './../auto-generated/previews/web-component/aggrid.md'
import ReactSourceAggrid from './../auto-generated/previews/react/aggrid.md'
import AngularSourceAggrid from './../auto-generated/previews/angular/aggrid.ts.md'

# AG Grid

Siemens Industrial Experience provides a theme for the populer data grid library [AG Grid](https://www.ag-grid.com).
This lets you harness the power of AG Grid with seemless intergration into the Siemens Industrial Experience styleguide.

<div className="siemens-brand-section">
AG Grid is a third party library that provides a feature rich data grid implementation.

Its basic functionality is free and open source (distributed under the [MIT license](https://www.ag-grid.com/eula/AG-Grid-Community-License.html)).

Please note that more advanced features like e.g. Row Grouping are only available with AG Grid Enterprise wich is a commercial product.

More information can be found on the [AG Grid licences page](https://www.ag-grid.com/license-pricing).

</div>

## Installation

### React

Follow the offical AG Grid [installation instructions](https://www.ag-grid.com/react-data-grid/getting-started/) for React.

### Angular

Follow the offical AG Grid [installation instructions](https://www.ag-grid.com/angular-data-grid/getting-started/) for Angular.

### Javascript

Follow the offical AG Grid [installation instruction](https://www.ag-grid.com/javascript-data-grid/getting-started/) for JavaScript.

### Siemens Industrial Experience theme for AG Grid

Install the `@siemens/ix-aggrid` package.

```shell
npm install @siemens/ix-aggrid
```

and apply the style file in one of your project's style files e.g. styles.scss

```scss
@import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
```

Siemens Industrial Experience theming for AG Grid (`ag-theme-ix`) is based on `ag-theme-alpine-dark`.
Therefore it is vital to apply the two CSS theme classes in the correct order:

1. `ag-theme-alpine-dark`
2. `ag-theme-ix`

e.g.:

```html
<div class="ag-theme-alpine-dark ag-theme-ix"></div>
```

## Usage

<Preview name="aggrid" height="16rem">
  <TabItem value="javascript">
    <SourceAggrid />
  </TabItem>
  <TabItem value="react">
    <ReactSourceAggrid />
  </TabItem>
  <TabItem value="angular">
    <AngularSourceAggrid />
  </TabItem>
</Preview>
