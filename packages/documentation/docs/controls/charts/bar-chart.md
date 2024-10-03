import DocsTabs from '@site/src/components/DocsTabs';
import Playground from '@site/src/components/PlaygroundV3';

# Bar chart

Bar charts are a type of chart that displays data using rectangular bars. The length of each bar is proportional to the value it represents. Bar charts are commonly used to compare the values of different categories. We typically use bar charts to visualize data that is categorical or ordinal in nature.

### Bar chart

The common bar chart is typically used to compare the values of different categories. The length of each bar is proportional to the value it represents.

<Playground
height="40rem"
name="echarts-bar-simple"
noMargin
examplesByName>
</Playground>

### Stacked bar chart

The stacked bar chart is typically used to visualize the relationship between the parts and the whole. Each bar is divided into segments, with each segment representing a different category.

<Playground
height="40rem"
name="echarts-bar-horizontal-stacked"
noMargin
examplesByName>
</Playground>

## Dos and Don'ts

- Do start the Y-axis at zero
- Do label axes clearly
- Do use short and clear category names
- Do include context only when necessary
- Do arrange categories and bars in logical order
- Don’t use too many bars in one chart
- Don’t overcrowd with colors and categories, especially within the stacked variant
- Don’t use stacked bars if the total value is not important


