import Playground from '@site/src/components/PlaygroundV3';

# Bar chart
<!-- introduction start -->
Bar charts display data to visualize and compare relationships between or trends across different categories.
<!-- introduction end -->
Bar charts can be oriented horizontally or vertically, providing a straightforward way to represent and compare data across various categories or assets. Each bar in a bar chart represents a category of data, with the length or height of the bar proportional to the value it represents. This makes it easy to quickly identify which categories are larger or smaller and to compare values across different groups.
## Examples

### Bar chart horizontal
A basic bar chart is a simple graphical representation of data, where the length of each bar is proportional to the value it represents. It’s commonly used to compare different categories or track changes over time.
<Playground
height="40rem"
name="echarts-bar-simple"
noMargin
examplesByName>
</Playground>

### Bar chart horizontal stacked
A stacked bar chart is a variation where the bars in a standard chart are divided into segments denoting contributing categories that sum up to the whole. These charts are used to compare totals and simultaneously understand the values of contributing categories. 
<Playground
height="40rem"
name="echarts-bar-horizontal-stacked"
noMargin
examplesByName>
</Playground>



