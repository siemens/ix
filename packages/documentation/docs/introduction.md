import GuidingPrinciples from '@site/src/components/DocsComponents/GuidingPrinciples';
import {Card, CardList} from '@site/src/components/Card';
import AngularIcon from '@site/static/img/angular.svg';
import ReactIcon from '@site/static/img/react.svg';
import WebComponentsIcon from '@site/static/img/webcomponents.svg';
import VueIcon from '@site/static/img/vue.svg';
import GitHubIcon from '@site/static/img/github.svg';
import BlazorIcon from '@site/static/img/blazor.svg';

# Introduction

<p className="text-l-title">
Siemens Industrial Experience is an open-source design system for creating the perfect digital experience in the industrial context. The design system consists of a broad range UI patterns, web-based code implementations, design tools, resources and guidelines. Siemens Industrial Experience accelerates the colloboration between designers and developers and helps to them to build efficient and consistent products.
</p>

## Guiding principles

<GuidingPrinciples></GuidingPrinciples>

## Resources & Assets

Siemens Industrial Experience provides and maintains a Figma design kit containing all components, design foundations and assets. Multiple code implementations are offered and maintained by the Siemens Industrial Experience team. With guidelines on UX writing, pattern usage and more, Siemens Industrial Experience supports it’s users along the way. The comprehensive icon set contains more than 500 icons and is constantly growing.

<CardList>
  <Card link="design-kit">Get UI design kit</Card>
  <Card link="icon-library/icons">Check out icon set</Card>
</CardList>

### Start developing with your framework

<CardList>
  <Card link="installation/angular"><AngularIcon className="Card_Icon" />Angular</Card>
  <Card link="installation/react"><ReactIcon className="Card_Icon" />React</Card>
  <Card link="installation/javascript"><WebComponentsIcon className="Card_Icon" />Web Components</Card>
  <Card link="installation/vue"><VueIcon className="Card_Icon" />Vue&nbsp;<span style={{fontSize: '0.8rem'}}>(experimental)</span></Card>
  <Card link="installation/blazor"><BlazorIcon class="Card_Icon" />Blazor&nbsp;<span style={{fontSize: '0.8rem'}}>(experimental)</span></Card>
</CardList>

## Community

Siemens Industrial Experience strives to improve continuously. The team is open to feedback and welcomes contributions. Pattern are harvested from successful applications to enhance the design system over time.

<CardList>
  <Card link="https://www.github.com/siemens/ix"><GitHubIcon className="Card_Icon"/>Contribute</Card>
</CardList>
