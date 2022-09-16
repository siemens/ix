import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceEcharts from './../../auto-generated/previews/web-component/echarts.md'

# ECharts

`@siemens/ix` does not provide a own chart implementation, but we can give you a
nice recommendation [`echarts`](https://echarts.apache.org/handbook/en/get-started/)

## Theme

`echarts` provides the possiblity to implement own color designs for a chart instance. We from `@siemens/ix` provide you two color sets `classic-dark` and `classic-light`

To keep the `@siemens/ix` library as lightweight as possible you have to install a separate package called `@siemens/ix-echarts`

```sh
npm install --save @siemens/ix-echarts
```

### Installation

Import the module once in your application.

```typescript
import '@siemens/ix-echarts';
```

## Usage

<Preview name="echarts" height="42rem">
  <TabItem value="javascript">
    <SourceEcharts />
  </TabItem>
</Preview>
