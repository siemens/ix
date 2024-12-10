import Playground from '@site/src/components/PlaygroundV3';

# Line chart
<!-- introduction start -->
Line charts are effective graphical tools for displaying data trends over time, helping users identify patterns and anomalies.
<!-- introduction end -->
Line charts can reveal patterns or fluctuations in data, making it easier for users to identify anomalies. By analyzing past trends, line charts can help in predicting future values. Multiple lines can be used to compare different sets of data, such as the performance of various assets or technical devices, providing a clear visual comparison.

## Examples

### Basic line chart
Basic line charts use a series of data points connected by straight lines to show changes in values, making it easy to identify patterns, trends, and fluctuations. They are particularly effective for displaying continuous data, such as stock prices, temperature changes, or sales figures. Their simplicity and clarity make them a popular choice for dashboards, where understanding data trends is essential.
<Playground
height="40rem"
name="echarts-line-simple"
noMargin
examplesByName>
</Playground>

### Multi-y-axis line chart
Multi-y-axis line charts visualize complex data sets that involve different scales or units of measurement. These charts use two or more vertical axes to plot multiple data series, allowing for a clear comparison of trends and relationships between different variables. By aligning each data series with its respective axis, these charts make it easier to interpret and analyze data that would otherwise be difficult to compare on a single axis.
<Playground
height="40rem"
name="echarts-line-multiple-y-axis"
noMargin
examplesByName>
</Playground>

### Advanced line chart
Advanced line charts are an enhanced version of basic line charts, designed to provide deeper insights and more detailed analysis of data trends. These charts often incorporate features such as multiple data series, interactive elements, and additional annotations to highlight key points or events. Advanced line charts can also include trend lines, moving averages, and other statistical tools to help identify patterns and correlations.
<Playground
height="40rem"
name="echarts-line-advanced"
noMargin
examplesByName>
</Playground>
