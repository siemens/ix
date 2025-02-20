import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';

import Playground from '@site/src/components/PlaygroundV3';

import ApiToastConfigJavaScript from './\_toast/javascript/toast-config.md';

import ApiToastServiceAngular from './\_toast/angular/toast-service.html.md';
import ApiToastConfigAngular from './\_toast/angular/toast-config.md';

import ApiToastConfigReact from './\_toast/react/toast-config.md';

## Development

### Basic

<Playground
name="toast" height="18rem"

> </Playground>

### Custom toast message

<Playground
name="toast-custom" height="18rem"
hideInitalCodePreview

> </Playground>

### Position

<ApiTableSinceTag message="1.5.0" />

<Playground
name="toast-position" height="18rem"

> </Playground>

### API

<Tabs>
  <TabItem value="Angular">
    <h3>ToastService</h3>
    <ApiToastServiceAngular />
    <h3>ToastConfig</h3>
    <ApiToastConfigAngular />
  </TabItem>

  <TabItem value="React">
    <h3>ToastConfig</h3>
    <ApiToastConfigReact />
  </TabItem>

  <TabItem value="JavaScript">
    <h3>ToastConfig</h3>
    <ApiToastConfigJavaScript />
  </TabItem>
</Tabs>
