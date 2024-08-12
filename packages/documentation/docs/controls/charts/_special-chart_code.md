import Playground from '@site/src/components/PlaygroundV2';

## Examples

## Interactive toolbox

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

## 3D visualizations

The `echarts-gl` package extends ECharts to support 3D visualizations, enabling you to create immersive and interactive charts. 
With this package, you can design a variety of 3D charts, including:

- 3D scatter plots
- 3D bar charts
- 3D surface plots

### Installation

```sh
npm install --save @siemens/ix-echarts
```

### Import 

```typescript
import 'echarts-gl';
```

<Playground
height="40rem"
name="echarts-special-3d"
noMargin
examplesByName>
</Playground>
