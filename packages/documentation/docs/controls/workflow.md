import WorkflowStepProps from './../auto-generated/ix-workflow-step/props.md';
import WorkflowStepEvents from './../auto-generated/ix-workflow-step/events.md';
import WorkflowStepsProps from './../auto-generated/ix-workflow-steps/props.md';
import WorkflowStepsEvents from './../auto-generated/ix-workflow-steps/events.md';

import Playground from '@site/src/components/PlaygroundV3';

## Development

<!-- introduction start -->
Workflows are a series of logical steps that guide users through a process.
<!-- introduction end -->

### Basic

<Playground
  name="workflow"
  >
</Playground>

### Vertical

<Playground
  name="workflow-vertical"
  height="27rem"
  hideInitalCodePreview
  >
</Playground>

### API (ix-workflow-steps)

#### Properties

<WorkflowStepsProps />

#### Events

<WorkflowStepsEvents />

### API (ix-workflow-step)

#### Properties

<WorkflowStepProps />

#### Events

<WorkflowStepEvents />
