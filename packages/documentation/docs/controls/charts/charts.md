import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceEcharts from './../../auto-generated/previews/web-component/echarts.md'

# ECharts

Siemens Industrial Experience provides a theme for the populer chart library [ECharts](https://echarts.apache.org/handbook/en/get-started).
This lets you harness the power of ECharts with seemless intergration into the Siemens Industrial Experience styleguide.

<div className="siemens-brand-section">

ECharts is a third party library distributed under [Apache License 2.0](https://www.apache.org/licenses).

</div>

### Installation

```sh
npm install --save @siemens/ix-echarts
```

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
