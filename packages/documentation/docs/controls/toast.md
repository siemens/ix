import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';

import ApiToastConfigJavaScript from './\_toast/javascript/toast-config.md';

import ApiToastServiceAngular from './\_toast/angular/toast-service.html.md';
import ApiToastConfigAngular from './\_toast/angular/toast-config.md';

import ApiToastConfigReact from './\_toast/react/toast-config.md';

import ApiToastConfigVue from './\_toast/vue/toast-config.md';

import Playground from '@site/src/components/PlaygroundV2';

# Toast

## Examples

### Basic

<Playground
  name="toast" 
  height="18rem"
  examplesByName>
</Playground>

### Custom toast message

<Playground
  name="toast-custom" 
  height="18rem"
  hideInitalCodePreview
  examplesByName>
</Playground>

### Position

<ApiTableSinceTag message="1.5.0" />

<Playground
  name="toast-position" 
  height="18rem"
  examplesByName>
</Playground>

### APIs

<Tabs>
  <TabItem value="Angular">
    <h3>Config</h3>
    <ApiToastConfigAngular />
    <h3>Service</h3>
    <ApiToastServiceAngular />
  </TabItem>

  <TabItem value="React">
    <h3>Config</h3>
    <ApiToastConfigReact />
  </TabItem>

  <TabItem value="JavaScript">
    <h3>Config</h3>
    <ApiToastConfigJavaScript />
  </TabItem>

  <TabItem value="Vue">
    <h3>Config</h3>
    <ApiToastConfigVue />
  </TabItem>
</Tabs>
