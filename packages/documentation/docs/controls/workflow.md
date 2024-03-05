import Playground from '@site/src/components/Playground';

import WorkflowStepProps from './../auto-generated/ix-workflow-step/props.md';
import WorkflowStepEvents from './../auto-generated/ix-workflow-step/events.md';
import WorkflowStepsProps from './../auto-generated/ix-workflow-steps/props.md';
import WorkflowStepsEvents from './../auto-generated/ix-workflow-steps/events.md';

import SourceWorkflow from './../auto-generated/previews/web-component/workflow.md';
import SourceReactWorkflow from './../auto-generated/previews/react/workflow.md';
import SourceAngularWorkflow from './../auto-generated/previews/angular/workflow.ts.md';

import SourceWorkflowVertical from './../auto-generated/previews/web-component/workflow-vertical.md';
import SourceReactWorkflowVertical from './../auto-generated/previews/react/workflow-vertical.md';
import SourceAngularWorkflowVertical from './../auto-generated/previews/angular/workflow-vertical.ts.md';

import SourceVueWorkflow from './../auto-generated/previews/vue/workflow.md';
import SourceVueWorkflowVertical from './../auto-generated/previews/vue/workflow-vertical.md';

# Workflow

## Example

<Playground
name="workflow"
frameworks={{
  react: SourceReactWorkflow,
  angular: SourceAngularWorkflow,
  javascript: SourceWorkflow,
  vue: SourceVueWorkflow
}}></Playground>

### Vertical

<Playground
name="workflow-vertical" height="27rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactWorkflowVertical,
  angular: SourceAngularWorkflowVertical,
  javascript: SourceWorkflowVertical,
  vue: SourceVueWorkflowVertical
}}></Playground>

## API (ix-workflow-steps)

### Props

<WorkflowStepsProps />

### Events

<WorkflowStepsEvents />

## API (ix-workflow-step)

### Props

<WorkflowStepProps />
