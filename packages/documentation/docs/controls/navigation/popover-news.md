import Playground from '@site/src/components/Playground';

import Props from './../../auto-generated/ix-menu-about-news/props.md';
import Events from './../../auto-generated/ix-menu-about-news/events.md';

import SourcePopoverNews from './../../auto-generated/previews/web-component/popover-news.md'
import SourceReactPopoverNews from './../../auto-generated/previews/react/popover-news.md'
import SourceAngularPopoverNews from './../../auto-generated/previews/angular/popover-news.ts.md'

# Popover News

## Usage

<Playground
name="popover-news" height="30rem" noMargin
frameworks={{
  react: SourceReactPopoverNews,
  angular: SourceAngularPopoverNews,
  javascript: SourcePopoverNews
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
