---
title: Button
---

import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-button/props.md';
import PropsIcon from './../auto-generated/ix-icon-button/props.md';

import WebComponentButtons from './../auto-generated/previews/web-component/buttons.md'
import WebComponentButtonSecondary from './../auto-generated/previews/web-component/button-secondary.md'
import WebComponentButtonGhost from './../auto-generated/previews/web-component/button-ghost.md'
import WebComponentButtonGrey from './../auto-generated/previews/web-component/button-grey.md'
import WebComponentButtonGreySecondary from './../auto-generated/previews/web-component/button-grey-secondary.md'
import WebComponentButtonGreyGhost from './../auto-generated/previews/web-component/button-grey-ghost.md'
import WebComponentButtonTextIcon from './../auto-generated/previews/web-component/button-text-icon.md'
import WebComponentButtonGroup from './../auto-generated/previews/web-component/button-group.md'
import WebComponentButtonIcon from './../auto-generated/previews/web-component/button-with-icon.md'
import WebComponentButtonSelected from './../auto-generated/previews/web-component/button-selected.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'
import ReactButtonIcon from './../auto-generated/previews/react/button-with-icon.md'
import ReactButtonSelected from './../auto-generated/previews/react/button-selected.md'

import ReactButtonSecondary from './../auto-generated/previews/react/button-secondary.md'
import ReactButtonGhost from './../auto-generated/previews/react/button-ghost.md'
import ReactButtonGrey from './../auto-generated/previews/react/button-grey.md'
import ReactButtonGreySecondary from './../auto-generated/previews/react/button-grey-secondary.md'
import ReactButtonGreyGhost from './../auto-generated/previews/react/button-grey-ghost.md'
import ReactButtonTextIcon from './../auto-generated/previews/react/button-text-icon.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.md'
import AngularButtonIcon from './../auto-generated/previews/angular/button-with-icon.md'
import AngularButtonSelected from './../auto-generated/previews/angular/button-selected.md'
import AngularButtonSecondary from './../auto-generated/previews/angular/button-secondary.md'
import AngularButtonGhost from './../auto-generated/previews/angular/button-ghost.md'
import AngularButtonGrey from './../auto-generated/previews/angular/button-grey.md'
import AngularButtonGreySecondary from './../auto-generated/previews/angular/button-grey-secondary.md'
import AngularButtonGreyGhost from './../auto-generated/previews/angular/button-grey-ghost.md'
import AngularButtonTextIcon from './../auto-generated/previews/angular/button-text-icon.md'

## Usage

### Primary

<Playground
name="buttons"
frameworks={{
  react: ReactButtons,
  angular: AngularButtons,
  javascript: WebComponentButtons
}}>
</Playground>

### Primary Outline

:::info

Will be used in UX context as **Secondary**

:::

<Playground
name="button-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonSecondary,
  angular: AngularButtonSecondary,
  javascript: WebComponentButtonSecondary
}}></Playground>

### Primary Ghost

:::info

Will be used in UX context as **Ghost**

:::

<Playground
name="button-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGhost,
  angular: AngularButtonGhost,
  javascript: WebComponentButtonGhost
}}></Playground>

### Secondary

:::info

Will be used in UX context as **Grey button**

:::

<Playground
name="button-grey"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGrey,
  angular: AngularButtonGrey,
  javascript: WebComponentButtonGrey
}}></Playground>

### Secondary Outline

:::info

Will be used in UX context as **Grey secondary**

:::

<Playground
name="button-grey-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreySecondary,
  angular: AngularButtonGreySecondary,
  javascript: WebComponentButtonGreySecondary
}}></Playground>

### Secondary Ghost

:::info

Will be used in UX context as **Grey ghost**

:::

<Playground
name="button-grey-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreyGhost,
  angular: AngularButtonGreyGhost,
  javascript: WebComponentButtonGreyGhost
}}></Playground>

### Selectable button

:::info

Only available in secondary ghost state

:::

<Playground
name="button-selected"
hideInitalCodePreview
frameworks={{
  react: ReactButtonSelected,
  angular: AngularButtonSelected,
  javascript: WebComponentButtonSelected
}}></Playground>

### Button group

<Playground
name="button-group"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGroup,
  angular: AngularButtonGroup,
  javascript: WebComponentButtonGroup
}}></Playground>

### Button with text and icon

<Playground
name="button-text-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonTextIcon,
  angular: AngularButtonTextIcon,
  javascript: WebComponentButtonTextIcon
}}></Playground>

### Icon button

<Playground
name="button-with-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonIcon,
  angular: AngularButtonIcon,
  javascript: WebComponentButtonIcon
}}></Playground>

## Properties (ix-button)

<Props />

## Properties (ix-icon-button)

<PropsIcon />
