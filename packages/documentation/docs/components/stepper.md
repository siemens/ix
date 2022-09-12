<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

import LivePreview from '@site/src/components/LivePreview';
import ComponentApi from '@site/src/components/ComponentApi';

# Stepper

:::info
Only for Angular
:::

## None linear

<LivePreview name="stepper-no-progress" height="18rem" framework="angular"></LivePreview>

## Linear

<LivePreview name="stepper-in-progress" height="18rem" framework="angular"></LivePreview>

## Vertical direction

<LivePreview name="stepper-vertical" height="18rem" framework="angular"></LivePreview>

## Disable Step navigation **_readonly_**

To disable all click events the step-headers set `disableStepClick` to `true`.

<LivePreview name="stepper-readonly" height="18rem" framework="angular"></LivePreview>

## Step with warning state

<LivePreview name="stepper-warning" height="18rem" framework="angular"></LivePreview>
