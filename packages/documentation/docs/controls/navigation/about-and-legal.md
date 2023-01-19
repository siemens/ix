---
sidebar_position: 3
title: About and legal
---

import Playground from '@site/src/components/Playground';

import Props from './../../auto-generated/ix-menu-about/props.md';
import Events from './../../auto-generated/ix-menu-about/events.md';
import PropsItem from './../../auto-generated/ix-menu-about-item/props.md';

import SourceWebComponent from './../../auto-generated/previews/web-component/about-and-legal.md'
import SourceReact from './../../auto-generated/previews/react/about-and-legal.md'
import SourceAngular from './../../auto-generated/previews/angular/about-and-legal.ts.md'

## Usage

<Playground
name="about-and-legal" height="30rem" width="100%" noMargin
frameworks={{
  react: SourceReact,
  angular: SourceAngular,
  javascript: SourceWebComponent
}}>
</Playground>

## Change language of legal links

Supported language codes are `'global/en' | 'global/es' | 'de/de' | 'cn/zh'`

## Properties (ix-menu-about)

#### Props

<Props />

#### Events

<Events />

## Properties (ix-menu-about-item)

#### Props

<PropsItem />
