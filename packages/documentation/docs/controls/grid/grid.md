import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import SourceAggrid from './../../auto-generated/previews/web-component/aggrid.md'
import ReactSourceAggrid from './../../auto-generated/previews/react/aggrid.md'
import AngularSourceAggrid from './../../auto-generated/previews/angular/aggrid.md'

# AG Grid

## Installation

### React

Follow the offical AG Grid [installation instructions](https://www.ag-grid.com/react-data-grid/getting-started/) for React.

### Angular

Follow the offical AG Grid [installation instructions](https://www.ag-grid.com/angular-data-grid/getting-started/) for Angular.

### Javascript

Follow the offical AG Grid [installation instruction](https://www.ag-grid.com/javascript-data-grid/getting-started/) for JavaScript.

### Siemens iX theme for AG Grid

Install the `@siemens/ix-aggrid` package.

```shell
npm install @siemens/ix-aggrid
```

and apply the style file in some of your style files e.g. styles.scss

```scss
@import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
```

Siemens iX theming for AG Grid (`ag-theme-ix`) is based on `ag-theme-alpine-dark`.
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
