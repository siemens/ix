import Playground from '@site/src/components/Playground';

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

<Playground
name="workflow"
frameworks={{
  react: SourceReactWorkflow,
  angular: SourceAngularWorkflow,
  javascript: SourceWorkflow
}}></Playground>

### Vertical

<Playground
name="workflow-vertical" height="27rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactWorkflowVertical,
  angular: SourceAngularWorkflowVertical,
  javascript: SourceWorkflowVertical
}}></Playground>

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
