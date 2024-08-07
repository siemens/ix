import Playground from '@site/src/components/PlaygroundV2';

## Examples

## Toolbox

Apache ECharts offers a versatile toolbox that enables users to interact with and manipulate charts effectively. 
By default, the toolbox appears in the top right corner of the chart. 
You can customize this toolbox using the toolbox option within the option object.

The toolbox includes various interactive tools (like download, zoom, change type), each designed to enhance the user experience. 
Below is an example demonstrating some of the most commonly used tools and how to configure them to suit your needs.

<Playground
height="40rem"
name="echarts-special-toolbox"
noMargin
examplesByName>
</Playground>

## Zoom

In addition to the toolbox, ECharts provides zoom and pan functionality for a more interactive chart experience. 
Users can zoom in and out using the mouse wheel, and pan the chart by clicking and dragging. 
These features offer a seamless way to explore detailed data within the chart.

<Playground
height="40rem"
name="echarts-special-zoom"
noMargin
examplesByName>
</Playground>

## 3D

To utilize 3D charts in your project, you need to import the echarts-gl package. 
The echarts-gl package extends the functionality of ECharts by providing support for 3D visualizations, allowing you to create immersive and interactive 3D charts. 
These charts can include various types such as 3D scatter plots, 3D bar charts, and 3D surface plots.

<Playground
height="40rem"
name="echarts-special-3d"
noMargin
examplesByName>
</Playground>
