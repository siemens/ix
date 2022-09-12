<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 3
title: About and legal
---

import TabItem from '@theme/TabItem';
import Demo from '@site/src/components/Demo';
import Props from './../../auto-generated/ix-menu-about/props.md';
import Events from './../../auto-generated/ix-menu-about/events.md';
import PropsItem from './../../auto-generated/ix-menu-about-item/props.md';
import Preview from '@site/src/components/Preview';

import SourceWebComponent from './../../auto-generated/previews/web-component/about-and-legal.md'
import SourceReact from './../../auto-generated/previews/react/about-and-legal.md'
import SourceAngular from './../../auto-generated/previews/angular/about-and-legal.md'

## Usage

<Preview name="about-and-legal" height="30rem">
  <TabItem value="javascript">
    <SourceWebComponent />
  </TabItem>
  <TabItem value="react">
    <SourceReact />
  </TabItem>
  <TabItem value="angular">
    <SourceAngular />
  </TabItem>
</Preview>

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
