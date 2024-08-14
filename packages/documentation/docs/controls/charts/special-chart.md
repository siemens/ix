---
sidebar_position: 1
---
import DocsTabs from '@site/src/components/DocsTabs';
import Playground from '@site/src/components/PlaygroundV2';

# Functionalities

ECharts offers a wide variety of different chart types and features. Following page deals with some more special chart types and chart features, which might become handy in some use cases.


## Examples

## Interactive toolbox

Apache ECharts offers a versatile toolbox that enables users to interact with and manipulate charts effectively.
By default, the toolbox appears in the top right corner of the chart.
You can customize this toolbox using the `toolbox` option within the option object.

The toolbox includes various interactive tools (like download, zoom, change type), each designed to enhance the user experience.
Below is an example demonstrating some of the most commonly used tools and how to configure them to suit your needs.

<Playground
height="40rem"
name="echarts-special-toolbox"
noMargin
examplesByName>
</Playground>

## Advanced zoom and pan

In addition to the toolbox, ECharts provides zoom and pan functionality for a more interactive chart experience.
Users can zoom in and out using the mouse wheel, and pan the chart by clicking and dragging.
These features offer a seamless way to explore detailed data within the chart.

<Playground
height="40rem"
name="echarts-special-zoom"
noMargin
examplesByName>
</Playground>

