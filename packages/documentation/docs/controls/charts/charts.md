import Playground from '@site/src/components/Playground';

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import JavaScriptSourceEcharts from './../../auto-generated/previews/web-component/echarts.md'
import ReactSourceEcharts from './../../auto-generated/previews/react/echarts.md'
import VueSourceEcharts from './../../auto-generated/previews/vue/echarts.md'
import AngularSourceEcharts from './../../auto-generated/previews/angular/echarts.ts.md'

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

<Playground
height="50rem"
name="echarts"
frameworks={{
  react: ReactSourceEcharts,
  angular: AngularSourceEcharts,
  javascript: JavaScriptSourceEcharts,
  vue: VueSourceEcharts
}}>
</Playground>
