import Playground from '@site/src/components/PlaygroundV3';

# Line charts

Line charts display data as a series of data points connected by straight line segments. Line charts are commonly used to visualize trends over time or compare two variables. We typically use line charts to visualize continuous data.

### Basic line charts

Basic line charts use a series of data points connected by straight lines to show changes in values, making it easy to identify patterns, trends and fluctuations. Line charts are particularly effective for displaying continuous data, such as stock prices, temperature changes or sales figures. Their simplicity and clarity make them a popular choice for dashboards, where understanding data trends is essential.

<Playground
height="40rem"
name="echarts-line-simple"
noMargin
examplesByName>
</Playground>

### Multi-y-axis line charts

Multi-y-axis line charts are used to compare multiple data series that have different scales or units of measurement. By using multiple y-axes, you can display data with different ranges on the same chart, making it easier to compare trends and relationships between variables. Multi-y-axis line charts are particularly useful when visualizing data with distinct patterns or trends.

<Playground
height="40rem"
name="echarts-line-multiple-y-axis"
noMargin
examplesByName>
</Playground>

### Advanced line charts

Advanced line charts are an enhanced version of basic line charts, designed to provide deeper insights and a more detailed analysis of data trends. These charts often incorporate features such as multiple data series, interactive elements, and additional annotations to highlight key points or events. Advanced line charts can also include trend lines, moving averages and other statistical tools to help identify patterns and correlations.

<Playground
height="40rem"
name="echarts-line-advanced"
noMargin
examplesByName>
</Playground>

## Dos and Don'ts

- Do start the Y-axis at zero and label axes clearly
- Do use contrasting colors for multiple lines to better distinguish different data series 
- Do use consistent intervals on axes
- Do highlight important data points
- Do use visual cues to show gaps in data
- Don’t overcrowd the chart with colors
- Don’t clutter the chart with too many lines, we recommend no more than 7 lines