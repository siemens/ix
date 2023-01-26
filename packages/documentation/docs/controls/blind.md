import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-blind/props.md';
import Events from './../auto-generated/ix-blind/events.md';

import WebComponent from './../auto-generated/previews/web-component/blind.md'
import SourceReact from './../auto-generated/previews/react/blind.md'
import SourceAngularTs from './../auto-generated/previews/angular/blind.ts.md'
import SourceAngularHtml from './../auto-generated/previews/angular/blind.html.md'

import Playground from '@site/src/components/Playground'

# Blind

Blinds are UI controls that allow the users to hide or reveal content by clicking on a control element.

![Blind overview](/img/pattern_illustrations/Blind_overview.png)

Go to:

- [Code](#code)
- [States](#states)
- [Dos and don't](#dos-and-donts)

## Usage

Blinds are often used to display a large amount of content in a compact space, or to present information in an organized and hierarchical way.​ Blinds can reduce cognitive load of the user be removing clutter and less important information from an interface.

### When to use

Use blinds when you want to display a large amount of related content, and the content can be organized into discrete sections. This allows users to reveal only the content that they are interested in, and helps to reduce clutter and improve readability.​

### When not to use

Consider the context in which the blinds will be used. If the content is central to the user's task, using a blind might reduce the content's visibility and accessibility.

## Code

### Preview

<Playground
name="blind"
height="16rem"
frameworks={{
    react: SourceReact,
    angular: {
        "blind.html": SourceAngularHtml,
        "blind.ts": SourceAngularTs
    },
    javascript: WebComponent
}}>
</Playground>

### Properties

#### Props

<Props />

#### Events

<Events / >

## Behavior in context

### Expanding and collapsing

The user expands and collapses the blind by pressing anywhere in the header section. When the blind is expanded, content below the blind is moved downwards.

### Create accordion

Multiple blinds can be placed below each other to create an accordion. The recommended distance between the blinds is `0.5rem`

![Blind states collapsed](/img/pattern_illustrations/Blind_accordion.png)

## States

![Blind states collapsed](/img/pattern_illustrations/Blind_states1.png)
![Blind states expanded](/img/pattern_illustrations/Blind_states2.png)

| State     | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| Hover     | The hover state is indicated by fill color change in the header section.                          |
| Active    | The active state is indicated by fill color change in the header section. Equal to pressed state. |
| Focused   | The focused state is indicated by a focus frame around the header section.                        |
| Collapsed | The collapsed state is indicated by a chevron pointing right in the header section.               |
| Expanded  | The expanded state is indicated by a chevron pointing down in the header section.                 |

## Anatomy

### Main elements

The blinds consists of a header section on top and a content section below. The header section contains a chevron icon on the left, followed by the blind's name. Within the content section, content can be placed freely.

### Sizing

- The header section has a fixed height for single-line text entries.
- The content section has a fixed width matching the width of the header section.
- The content section has a flexible height according to the content displayed. The minimum height is ... and the maximum height is ... ?
- The blind has a minimum width of ... and a maximum width of ...?

### Alignment

The chevron icon and the blind name are left-justified within the header section. The content within the content section can be alighned freely.

## Dos and don'ts

- Don't use a blind if there is only a single category to be displayed. The recommened number of blinds ranges between three and seven.
- Do not use blinds to display hierarchically structured files or objects - rather use a tree for such cases.

## Related patterns:

- Tabs
- Tree
- Workflow
