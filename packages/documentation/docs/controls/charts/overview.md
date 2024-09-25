---
sidebar_position: 0
---
import Playground from '@site/src/components/PlaygroundV3';

# Basics

Siemens Industrial Experience provides a theme for the popular chart library [ECharts](https://echarts.apache.org/handbook/en/get-started).
This lets you harness the power of ECharts with seamless integration into the Siemens Industrial Experience design system.

<div className="siemens-brand-section">
ECharts is a third party library distributed under [Apache License 2.0](https://www.apache.org/licenses).
</div>

![Chart usage guide](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3532-4181&t=MD9MvUCkoIcmSi8H-4)

## Attributes

| Name           | Discription                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Axes**       | Most charts have a horizontal (x-axis) and a vertical (y-axis) axis. These axes are labeled to indicate what data they represent.                                                             |
| **Scale**      | Each axis has a scale, often marked with periodic graduations and numerical or categorical indications.                                                                                       |
| **Labels**     | Axes labels describe the dimensions represented, often including units of measurement, e.g. “Distance traveled (m)”.                                                                          |
| **Grid lines** | Grid lines help in visually aligning data points within the chart.                                                                                                                            |
| **Legend**     | Legends explain the symbols, colors, or patterns used in the chart to represent different data sets. By clicking on the date in the legend, you can toggle the visibility of the data series. |
| **Tooltip**    | Provides detailed information about data while hover over the area of interest.                                                                                                               |

## Installation

To install the Siemens Industrial Experience ECharts theme, run the follow the steps below:

```sh
npm install --save @siemens/ix-echarts
```

1. Import the `registerTheme` function from our module. 
2. Invoke this function, passing in your `echarts` instance as an argument. You don't need to provide the `echarts` instance if it is provided globally in your `window` object when using vanilla Javascript. 
3. Once this is done, you’ll be able to utilize the `brand-dark`, `brand-light`, `classic-dark`, and `classic-light` themes for your chart.

```typescript
import { registerTheme } from '@siemens/ix-echarts';

registerTheme(echarts);
```

<div className="Angular">
For Angular make sure to correctly add `NgxEcharts` in your module file.
</div>

### Colors

The Siemens Industrial Experience ECharts theme provides a set of colors that are used to style the charts. These colors are optimized for accessibility and readability. 

**Categorical data**
For easily distinguishable data series where each category is distinct but not ordered, we recommend the following color sequence. 
Example: Different product types or regions.

![Colors for categorical data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3223-1647&t=MD9MvUCkoIcmSi8H-4)

**Sequential data**
For ordered data, we recommend to use every second color (e.g. chart-1, chart-3, chart-5, ...). Example: monthly data.

![Colors for sequential data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3225-2412&t=MD9MvUCkoIcmSi8H-4)

**Comparative data**
For comparing data within a category, we recommend to use the matching -40 color with 40% opacity. Example: last year and current year.

![Colors for comparative data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3225-2885&t=MD9MvUCkoIcmSi8H-4)

<Playground
height="40rem"
name="echarts"
noMargin
>
</Playground>

## Empty state

An empty state occurs when a user first opens an application, and no chart was added manually. Make sure to provide a clear message and a call to action to guide users on what to do next.

<Playground
height="40rem"
name="echarts-empty-state"
noMargin
examplesByName>
</Playground>

### Loading indicator

A loading indicator provides users with visual feedback that the chart is being processed and will be displayed shortly. This helps manage user expectations and enhances the overall user experience by preventing confusion or frustration during data loading times. 

### Failure and error message

A failure occurs when no data can be displayed within the chart. This can happen for various reasons, such as connection failure, missing data or other. Error messages have following three elements to move users forward:

- State problem: What happened?​ Add a clear reason for the error, i.e. “No data available”
- Explain cause: Why did the error appear?​ A clear and concise message explaining why the error happened. "Connection failure"
- Give solution: What can the user do to proceed?​  
    Add clear instructions for the user regarding what to do next to resolve the error, e.g. “Try again”

### Missing data points

Indicate missing data with a special visual marker (like a different color or shape) to highlight the gaps without connecting them.
