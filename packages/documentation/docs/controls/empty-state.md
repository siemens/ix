import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-empty-state/props.md';
import Events from './../auto-generated/ix-empty-state/events.md';

import SourceEmptyState from './../auto-generated/previews/web-component/empty-state.md'
import SourceReactEmptyState from './../auto-generated/previews/react/empty-state.md'
import SourceAngularEmptyState from './../auto-generated/previews/angular/empty-state.ts.md'
import SourceVueEmptyState from './../auto-generated/previews/vue/empty-state.md'

import SourceEmptyStateCompact from './../auto-generated/previews/web-component/empty-state-compact.md'
import SourceReactEmptyStateCompact from './../auto-generated/previews/react/empty-state-compact.md'
import SourceAngularEmptyStateCompact from './../auto-generated/previews/angular/empty-state-compact.ts.md'
import SourceVueEmptyStateCompact from './../auto-generated/previews/vue/empty-state-compact.md'

import SourceEmptyStateCompactBreak from './../auto-generated/previews/web-component/empty-state-compact-break.md'
import SourceReactEmptyStateCompactBreak from './../auto-generated/previews/react/empty-state-compact-break.md'
import SourceAngularEmptyStateCompactBreak from './../auto-generated/previews/angular/empty-state-compact-break.ts.md'
import SourceVueEmptyStateCompactBreak from './../auto-generated/previews/vue/empty-state-compact-break.md'

# Empty state

## Usage

<Playground
name="empty-state" height="16rem"
frameworks={{
  react: SourceReactEmptyState,
  angular: SourceAngularEmptyState,
  javascript: SourceEmptyState,
  vue: SourceVueEmptyState
}}>
</Playground>

### Compact

<Playground
name="empty-state-compact"
frameworks={{
  react: SourceReactEmptyStateCompact,
  angular: SourceAngularEmptyStateCompact,
  javascript: SourceEmptyStateCompact,
  vue: SourceVueEmptyStateCompact
}}>
</Playground>

### Compact break

<Playground
name="empty-state-compact-break"
frameworks={{
  react: SourceReactEmptyStateCompactBreak,
  angular: SourceAngularEmptyStateCompactBreak,
  javascript: SourceEmptyStateCompactBreak,
  vue: SourceVueEmptyStateCompactBreak
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
