import Playground from '@site/src/components/PlaygroundV3';

## Development

Gauge charts are a type of chart that displays data using a dial or needle to indicate a value within a specific range. Gauge charts are commonly used to visualize performance metrics, such as speedometers, progress meters, and other KPIs. We typically use gauge charts to represent a single value within a range of values.

### Metric gauge charts

Metrics gauge charts, also known as dial or speedometer charts, are an effective way to visualize key performance indicators (KPIs) and other metrics. These charts indicate the current value of a metric within a predefined range, often segmented into different zones, e.g. red for poor performance, green for good performance, etc.


<Playground
height="25rem"
name="echarts-gauge"
noMargin
examplesByName>
</Playground>

### Circle gauge charts

Circle gauge charts, also known as radial progress charts or circular progress bars, are a visually appealing way to represent data and track progress towards a goal. These charts use a circle to display the percentage of completion, making it easy to quickly grasp the status of a project or task. The circle is typically filled in proportion to the progress made, with the center often displaying the percentage value.

<Playground
height="30rem"
name="echarts-progress-circle"
noMargin
examplesByName>
</Playground>

### Arc gauge charts

Arc gauge charts, also known as semi-circular progress bars, are a dynamic way to visualize data and track progress. Unlike circle charts, arc gauge charts use a semi-circle or arc to represent the percentage of completion. This design can be particularly effective in dashboards and user interfaces where users need a clear and engaging visual representation but space is limited.

<Playground
height="30rem"
name="echarts-progress-arc"
noMargin
examplesByName>
</Playground>

### Dos and Don'ts

- Do keep it simple and easy to read, with a clear needle and well-defined ranges
- Do use color coding, e.g. green for good, red for danger, etc. to indicate different ranges
- Do label ranges and the needle value clearly to avoid  confusion
- Don’t overcrowd the gauge with too many ranges or labels
- Don’t use gauge charts for visualizing complex data or large datasets
- Don’t use similar colors for adjacent ranges to avoid confusion
