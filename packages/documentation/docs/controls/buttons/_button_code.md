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
import WebComponentButtonLoading from './../auto-generated/previews/web-component/button-loading.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'
import ReactButtonIcon from './../auto-generated/previews/react/button-with-icon.md'
import ReactButtonSecondary from './../auto-generated/previews/react/button-secondary.md'
import ReactButtonGhost from './../auto-generated/previews/react/button-ghost.md'
import ReactButtonGrey from './../auto-generated/previews/react/button-grey.md'
import ReactButtonGreySecondary from './../auto-generated/previews/react/button-grey-secondary.md'
import ReactButtonGreyGhost from './../auto-generated/previews/react/button-grey-ghost.md'
import ReactButtonTextIcon from './../auto-generated/previews/react/button-text-icon.md'
import ReactButtonLoading from './../auto-generated/previews/react/button-loading.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.ts.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.ts.md'
import AngularButtonIcon from './../auto-generated/previews/angular/button-with-icon.ts.md'
import AngularButtonSecondary from './../auto-generated/previews/angular/button-secondary.ts.md'
import AngularButtonGhost from './../auto-generated/previews/angular/button-ghost.ts.md'
import AngularButtonGrey from './../auto-generated/previews/angular/button-grey.ts.md'
import AngularButtonGreySecondary from './../auto-generated/previews/angular/button-grey-secondary.ts.md'
import AngularButtonGreyGhost from './../auto-generated/previews/angular/button-grey-ghost.ts.md'
import AngularButtonTextIcon from './../auto-generated/previews/angular/button-text-icon.ts.md'
import AngularButtonLoading from './../auto-generated/previews/angular/button-loading.ts.md'

import VueButtons from './../auto-generated/previews/vue/buttons.md'
import VueButtonGroup from './../auto-generated/previews/vue/button-group.md'
import VueButtonIcon from './../auto-generated/previews/vue/button-with-icon.md'
import VueButtonSecondary from './../auto-generated/previews/vue/button-secondary.md'
import VueButtonGhost from './../auto-generated/previews/vue/button-ghost.md'
import VueButtonGrey from './../auto-generated/previews/vue/button-grey.md'
import VueButtonGreySecondary from './../auto-generated/previews/vue/button-grey-secondary.md'
import VueButtonGreyGhost from './../auto-generated/previews/vue/button-grey-ghost.md'
import VueButtonTextIcon from './../auto-generated/previews/vue/button-text-icon.md'
import VueButtonLoading from './../auto-generated/previews/vue/button-loading.md'

## Usage

### Primary

<Playground
name="buttons"
frameworks={{
  react: ReactButtons,
  angular: AngularButtons,
  javascript: WebComponentButtons,
  vue: VueButtons
}}>
</Playground>

### Primary Outline

:::info

Will be used as **Secondary** in UX context

:::

<Playground
name="button-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonSecondary,
  angular: AngularButtonSecondary,
  javascript: WebComponentButtonSecondary,
  vue: VueButtonSecondary
}}></Playground>

### Primary Ghost

:::info

Will be used as **Ghost** in UX context

:::

<Playground
name="button-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGhost,
  angular: AngularButtonGhost,
  javascript: WebComponentButtonGhost,
  vue: VueButtonGhost
}}></Playground>

### Secondary

:::info

Will be used as **Grey button** in UX context

:::

<Playground
name="button-grey"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGrey,
  angular: AngularButtonGrey,
  javascript: WebComponentButtonGrey,
  vue: VueButtonGrey
}}></Playground>

### Secondary Outline

:::info

Will be used as **Grey secondary** in UX context

:::

<Playground
name="button-grey-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreySecondary,
  angular: AngularButtonGreySecondary,
  javascript: WebComponentButtonGreySecondary,
  vue: VueButtonGreySecondary
}}></Playground>

### Secondary Ghost

:::info

Will be used as **Grey ghost** in UX context

:::

<Playground
name="button-grey-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreyGhost,
  angular: AngularButtonGreyGhost,
  javascript: WebComponentButtonGreyGhost,
  vue: VueButtonGreyGhost
}}></Playground>

### Button group

<Playground
name="button-group"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGroup,
  angular: AngularButtonGroup,
  javascript: WebComponentButtonGroup,
  vue: VueButtonGroup
}}></Playground>

### Button with text and icon

<Playground
name="button-text-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonTextIcon,
  angular: AngularButtonTextIcon,
  javascript: WebComponentButtonTextIcon,
  vue: VueButtonTextIcon
}}></Playground>

### Icon button

<Playground
name="button-with-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonIcon,
  angular: AngularButtonIcon,
  javascript: WebComponentButtonIcon,
  vue: VueButtonIcon
}}></Playground>

### Loading button

<Playground
name="button-loading"
hideInitalCodePreview
frameworks={{
  react: ReactButtonLoading,
  angular: AngularButtonLoading,
  javascript: WebComponentButtonLoading,
  vue: VueButtonLoading
}}></Playground>

## Properties (ix-button)

<Props />

## Properties (ix-icon-button)

<PropsIcon />
