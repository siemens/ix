import LinkableDocsTabs from '@site/src/components/LinkableDocsTabs';
import Props from './../auto-generated/ix-message-bar/props.md';
import Events from './../auto-generated/ix-message-bar/events.md';
import Playground from '@site/src/components/PlaygroundV3';

## Development

<!-- introduction start -->
Message bars display important information to users, e.g. feedback, warnings or errors.
<!-- introduction end -->

The message bar Web Component only provides the visual appearance of the message bar.
To fully utilize the message bar, you need to implement a mechanism to remove it from the DOM when it is no longer needed.
This typically involves handling the close event and updating the state of your application to reflect the removal of the message bar.

### Basics

<Playground
name="message-bar"
height="14rem"
></Playground>

### Dismissible

<Playground
name="message-bar-removal"
height="14rem"
></Playground>

### API

#### Properties

<Props />

#### Events

<Events />
