import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-grid/props.md';
import Events from './../auto-generated/ix-grid/events.md';

import ColProps from './../auto-generated/ix-col/props.md';
import ColEvents from './../auto-generated/ix-col/events.md';


import SourceGrid from './../auto-generated/previews/web-component/grid.md'
import SourceGridSize from './../auto-generated/previews/web-component/grid-size.md'
import SourceGridFluid from './../auto-generated/previews/web-component/grid-fluid.md'
import SourceGridFixed from './../auto-generated/previews/web-component/grid-fixed.md'

# Grid

## Usage

<Playground
  height="15rem"
  name="grid"
  frameworks={{
    javascript: SourceGrid,
  }}>
</Playground>

### Size

<Playground
  height="15rem"
  name="grid-size"
  frameworks={{
    javascript: SourceGridSize,
  }}>
</Playground>

### Fixed

<Playground
  height="18rem"
  name="grid-fixed"
  frameworks={{
    javascript: SourceGridFixed,
  }}>
</Playground>

### Fluid

<Playground
  name="grid-fluid"
  height="14rem"
  frameworks={{
    javascript: SourceGridFluid,
  }}>
</Playground>

## Properties (ix-grid)

### Props 

<Props />

### Events

<Events />

## Properties (ix-col)

### Props

<ColProps />

### Events

<ColEvents />
