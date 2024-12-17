---
sidebar_position: 0
---
import Playground from '@site/src/components/PlaygroundV3';

# Basics

Siemens Industrial Experience provides a theme for the popular chart library [ECharts](https://echarts.apache.org/handbook/en/get-started).
This lets you harness the power of ECharts with seamless integration into the Siemens Industrial Experience styleguide.

<div className="siemens-brand-section">

ECharts is a third party library distributed under [Apache License 2.0](https://www.apache.org/licenses).

</div>

## Installation

```sh
npm install --save @siemens/ix-echarts
```

First, import the `registerTheme` function from our module. Then, invoke this function, passing in your `echarts` instance as an argument. You don't need to provide the `echarts` instance if it is provided globally in your `window` object when using vanilla Javascript. Once this is done, you’ll be able to utilize the `brand-dark`, `brand-light`, `classic-dark`, and `classic-light` themes for your chart.

```typescript
import { registerTheme } from '@siemens/ix-echarts';

registerTheme(echarts);
```

### Angular

Please make sure to correctly add `NgxEcharts` in your module file.

## Examples

<Playground
height="40rem"
name="echarts"
noMargin>
</Playground>

## Empty state

<Playground
height="40rem"
name="echarts-empty-state"
noMargin>
</Playground>
