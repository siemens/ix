import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import SourceAggrid from './../../auto-generated/previews/web-component/aggrid.md'
import ReactSourceAggrid from './../../auto-generated/previews/react/aggrid.md'
import AngularSourceAggrid from './../../auto-generated/previews/angular/aggrid.md'

# AG-Grid

## Installation

### React

Follow the offical react installation instruction https://www.ag-grid.com/react-data-grid/getting-started/

### Angular

Follow the offical angular installation instruction https://www.ag-grid.com/angular-data-grid/getting-started/

### Javascript

Follow the offical javascript installation instruction https://www.ag-grid.com/javascript-data-grid/getting-started/

### Siemens ix theme for aggrid

The `ag-theme-ix` is build on base of the `ag-theme-alpine-dark`. To get the theme working correctly it is
necessary to apply the class `ag-theme-alpine-dark` frist and the the ix theme `ag-theme-ix`.

e.g

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
