<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-spinner/props.md';
import Events from './../auto-generated/ix-spinner/events.md';

import SourceSpinner from './../auto-generated/previews/web-component/spinner.md';
import SourceSpinnerLarge from './../auto-generated/previews/web-component/spinner-large.md';

import SourceReactSpinner from './../auto-generated/previews/react/spinner.md';
import SourceReactSpinnerLarge from './../auto-generated/previews/react/spinner-large.md';

import SourceAngularSpinner from './../auto-generated/previews/angular/spinner.md';
import SourceAngularSpinnerLarge from './../auto-generated/previews/angular/spinner-large.md';

# Spinner

## Usage

<Preview name="spinner" height="5rem">
  <TabItem value="javascript">
    <SourceSpinner />
  </TabItem>
  <TabItem value="react">
    <SourceReactSpinner />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularSpinner />
  </TabItem>
</Preview>

### Large

<Preview name="spinner-large" height="16rem">
  <TabItem value="javascript">
    <SourceSpinnerLarge />
  </TabItem>
  <TabItem value="react">
    <SourceReactSpinnerLarge />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularSpinnerLarge />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events />
