---
title: Cards
---
import Playground from '@site/src/components/Playground';

import PushCardTags from './../auto-generated/ix-push-card/tags.md';
import PushCardProps from './../auto-generated/ix-push-card/props.md';
import PushCardEvents from './../auto-generated/ix-push-card/events.md';

import ActionCardTags from './../auto-generated/ix-action-card/tags.md';
import ActionCardProps from './../auto-generated/ix-action-card/props.md';
import ActionCardEvents from './../auto-generated/ix-action-card/events.md';

import WebComponentPushCard from './../auto-generated/previews/web-component/push-card.md'
import ReactPushCard from './../auto-generated/previews/react/push-card.md'
import VuePushCard from './../auto-generated/previews/vue/push-card.md'
import AngularTsPushCard from './../auto-generated/previews/angular/push-card.ts.md'
import AngularHtmlPushCard from './../auto-generated/previews/angular/push-card.html.md'


import WebComponentActionCard from './../auto-generated/previews/web-component/action-card.md'
import ReactActionCard from './../auto-generated/previews/react/action-card.md'
import VueActionCard from './../auto-generated/previews/vue/action-card.md'
import AngularTsActionCard from './../auto-generated/previews/angular/action-card.ts.md'
import AngularHtmlActionCard from './../auto-generated/previews/angular/action-card.html.md'


## Push Card

<PushCardTags />

<Playground
height="20rem"
name="push-card"
frameworks={{
  javascript: WebComponentPushCard,
  react: ReactPushCard,
  vue: VuePushCard,
  angular: {
    "push-card.html": AngularHtmlPushCard,
    "push-card.ts": AngularTsPushCard
  },
}}>
</Playground>

## Action Card

<ActionCardTags />

<Playground
height="13rem"
name="action-card"
frameworks={{
  javascript: WebComponentActionCard,
  react: ReactActionCard,
  vue: VueActionCard,
  angular: {
    "action-card.html": AngularHtmlActionCard,
    "action-card.ts": AngularTsActionCard
  },
}}>
</Playground>

## Properties (ix-push-card)

### Props

<PushCardProps />

### Events

<PushCardEvents />

## Properties (ix-action-card)

### Props

<ActionCardProps />

### Events

<ActionCardEvents />
