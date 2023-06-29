---
sidebar_position: 0
sidebar_title: Overview
title: Overview
---

import GuidingPrinciples from '@site/src/components/DocsComponents/GuidingPrinciples';
import {Card, CardList} from '@site/src/components/Card';
import AngularIcon from '@site/static/img/angular.svg';
import ReactIcon from '@site/static/img/react.svg';
import WebComponentsIcon from '@site/static/img/webcomponents.svg';
import VueIcon from '@site/static/img/vue.svg';
import GitHubIcon from '@site/static/img/github.svg';
import BlazorIcon from '@site/static/img/blazor.svg';

# Welcome to Siemens Industrial Experience

<p className="text-l-title">
Siemens Industrial Experience is an open-source design system for designers and developers to consistently create the perfect digital experience for partners and customers within industrial contexts. Siemens Industrial Experience gives you access to a broad range of UI patterns, web-based code implementations, design tools, resources and content guidelines to accelerate collaboration between designers, developers and writers, helping to build efficient and consistent products.
</p>

## Guiding principles

<GuidingPrinciples></GuidingPrinciples>

## Resources & assets

Siemens Industrial Experience provides and maintains a Figma design kit containing all components, design foundations and assets. Multiple code implementations are offered and maintained by the Siemens Industrial Experience team. With guidelines on UX writing, pattern usage and more, Siemens Industrial Experience supports its users along the way. The comprehensive icon set contains more than 500 icons and is constantly growing.

<CardList>
  <Card link="design-kit">Go to design kits</Card>
  <Card link="icon-library/icons">Go to icon set</Card>
</CardList>

### Choose your framework

<CardList>
  <Card link="installation/angular"><AngularIcon className="Card_Icon" />Angular</Card>
  <Card link="installation/react"><ReactIcon className="Card_Icon" />React</Card>
  <Card link="installation/javascript"><WebComponentsIcon className="Card_Icon" />Web Components</Card>
  <Card link="installation/vue"><VueIcon className="Card_Icon" />Vue&nbsp;<span style={{fontSize: '0.8rem'}}>(experimental)</span></Card>
  <Card link="installation/blazor"><BlazorIcon class="Card_Icon" />Blazor&nbsp;<span style={{fontSize: '0.8rem'}}>(experimental)</span></Card>
</CardList>

## Contribute

We welcome contributions from the community as Siemens Industrial Experience is continuously being improved. Send all your feedback, questions and contributions via GitHub.

<CardList>
  <Card link="https://www.github.com/siemens/ix"><GitHubIcon className="Card_Icon"/>Contribute</Card>
</CardList>
