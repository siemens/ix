import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import WorkflowStepProps from './../auto-generated/ix-workflow-step/props.md';
import WorkflowStepEvents from './../auto-generated/ix-workflow-step/events.md';
import WorkflowStepsProps from './../auto-generated/ix-workflow-steps/props.md';
import WorkflowStepsEvents from './../auto-generated/ix-workflow-steps/events.md';

import SourceWorkflow from './../auto-generated/previews/web-component/workflow.md';
import SourceReactWorkflow from './../auto-generated/previews/react/workflow.md';
import SourceAngularWorkflow from './../auto-generated/previews/angular/workflow.md';

import SourceWorkflowVertical from './../auto-generated/previews/web-component/workflow-vertical.md';
import SourceReactWorkflowVertical from './../auto-generated/previews/react/workflow-vertical.md';
import SourceAngularWorkflowVertical from './../auto-generated/previews/angular/workflow-vertical.md';

# Workflow

## Usage

<Preview name="workflow" height="24rem">
  <TabItem value="javascript">
    <SourceWorkflow />
  </TabItem>
  <TabItem value="react">
    <SourceReactWorkflow />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularWorkflow />
  </TabItem>
</Preview>

### Vertical

<Preview name="workflow-vertical" height="24rem">
  <TabItem value="javascript">
    <SourceWorkflowVertical />
  </TabItem>
  <TabItem value="react">
    <SourceReactWorkflowVertical />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularWorkflowVertical />
  </TabItem>
</Preview>

## Properties ix-workflow-steps

### Props

<WorkflowStepsProps />

### Events

<WorkflowStepsEvents />

## Properties ix-workflow-step

### Props

<WorkflowStepProps />

### Events

<WorkflowStepEvents />
