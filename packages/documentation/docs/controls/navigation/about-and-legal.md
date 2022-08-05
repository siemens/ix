---
sidebar_position: 3
title: About and legal
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Demo from '@site/src/components/Demo';
import Props from './../../auto-generated/cw-menu-about/props.md';
import Events from './../../auto-generated/cw-menu-about/events.md';
import PropsItem from './../../auto-generated/cw-menu-about-item/props.md';

import WebComponent from './../../auto-generated/previews/web-component/about-and-legal.md'

## Usage

<Tabs groupId="about-and-legal" defaultValue="preview" values={[{ value: 'preview', label: 'Preview' }, { value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }]}>

<TabItem value="preview">

<Demo name="about-and-legal" height="30rem" noMargin></Demo>

</TabItem>

<TabItem value="javascript">

<WebComponent />

</TabItem>

</Tabs>

## Change language of legal links

Supported language codes are `'global/en' | 'global/es' | 'de/de' | 'cn/zh'`

### cw-menu-about

#### Props

<Props />

#### Events

<Events />

### cw-menu-about-item

#### Props

<PropsItem />
