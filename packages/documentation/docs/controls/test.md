---
title: Button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Demo from '@site/src/components/Demo';
import Props from './../auto-generated/cw-button/props.md';

## Usage

### Default buttons

<Tabs groupId="default_buttons" defaultValue="preview" values={[{ value: 'preview', label: 'Preview' }, { value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }]}>

<TabItem value="preview">

<Demo name="buttons"></Demo>

</TabItem>

<TabItem value="angular">

```html
<cw-button class="m-1" variant="primary">Webcomponents button</cw-button>
<cw-button class="m-1" variant="secondary">Webcomponents button</cw-button>
<cw-button class="m-1" outline>Webcomponents button</cw-button>
<cw-button class="m-1" invisible>Webcomponents button</cw-button>
```

</TabItem>

<TabItem value="javascript">

```html
<cw-button class="m-1" variant="primary">Webcomponents button</cw-button>
<cw-button class="m-1" variant="secondary">Webcomponents button</cw-button>
<cw-button class="m-1" outline>Webcomponents button</cw-button>
<cw-button class="m-1" invisible>Webcomponents button</cw-button>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';

import { CwButton } from '@siemens/ix-react';

export const ButtonExample: React.FC = () => (
  <>
    <CwButton className="m-1" variant="Primary">
      Webcomponents button
    </CwButton>
    <CwButton className="m-1" variant="Secondary">
      Webcomponents button
    </CwButton>
    <CwButton className="m-1" outline>
      Webcomponents button
    </CwButton>
    <CwButton className="m-1" invisible>
      Webcomponents button
    </CwButton>
  </>
);
```

</TabItem>

</Tabs>

### Button group

<Tabs groupId="button_group" defaultValue="preview" values={[{ value: 'preview', label: 'Preview' }, { value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }]}>

<TabItem value="preview">

<Demo name="button-group"></Demo>

</TabItem>

<TabItem value="angular">

```html
<div class="btn-group">
  <cw-button variant="Primary" outline> Left </cw-button>
  <cw-button variant="Primary">Middle</cw-button>
  <cw-button variant="Primary" outline> Right </cw-button>
</div>
```

</TabItem>

<TabItem value="javascript">

```html
<div class="btn-group">
  <cw-button variant="Primary" outline> Left </cw-button>
  <cw-button variant="Primary">Middle</cw-button>
  <cw-button variant="Primary" outline> Right </cw-button>
</div>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';

import { CwButton } from '@siemens/ix-react';

export const ButtonExample: React.FC = () => (
  <>
    <div className="btn-group">
      <CwButton variant="Primary" outline>
        Left
      </CwButton>
      <CwButton variant="Primary">Middle</CwButton>
      <CwButton variant="Primary" outline>
        Right
      </CwButton>
    </div>
  </>
);
```

</TabItem>

</Tabs>

## Properties

<Props />
