import Events from './../auto-generated/ix-tooltip/events.md';
import Tags from './../auto-generated/ix-tooltip/tags.md';
import Props from './../auto-generated/ix-tooltip/props.md';
import Slots from './../auto-generated/ix-tooltip/slots.md';

import Playground from '@site/src/components/PlaygroundV3'

# Tooltip

<Tags />
<!-- introduction start -->
Tooltips provide additional information when users hover over or focus on an element.
<!-- introduction end -->
## Examples

<Playground
  name="tooltip"
  height="16rem"
  >
</Playground>

## API

### Properties

<Props />

### Events

<Events />

### Slots

<Slots />

## A11y

Set the `aria-describedby` attribute on the trigger element to the tooltip `id` attribute. This allows assistive technologies to establish a logical connection between the trigger and the tooltip. 

See examples [above](#usage). 

[More information](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

