import Playground from '@site/src/components/Playground';

import CardListProps from './../auto-generated/ix-card-list/props.md';
import CardListEvents from './../auto-generated/ix-card-list/events.md';

import WebComponentCardList from './../auto-generated/previews/web-component/card-list.md'
import ReactCardList from './../auto-generated/previews/react/card-list.md'
import VueCardList from './../auto-generated/previews/vue/card-list.md'
import AngularTsCardList from './../auto-generated/previews/angular/card-list.ts.md'
import AngularHtmlCardList from './../auto-generated/previews/angular/card-list.html.md'

## Examples

<Playground
height="55rem"
name="card-list"
frameworks={{
  javascript: WebComponentCardList,
  react: ReactCardList,
  vue: VueCardList,
  angular: {
    "card-list.html": AngularHtmlCardList,
    "card-list.ts": AngularTsCardList
  },
}}>
</Playground>

## API (ix-card-list)

### Props

<CardListProps />

### Events

<CardListEvents />
