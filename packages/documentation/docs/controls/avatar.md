import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-avatar/props.md';
import Events from './../auto-generated/ix-avatar/events.md';
import Tags from './../auto-generated/ix-avatar/tags.md';

import SourceAvatar from './../auto-generated/previews/web-component/avatar.md'
import SourceAvatarImage from './../auto-generated/previews/web-component/avatar-image.md'
import SourceAvatarInitials from './../auto-generated/previews/web-component/avatar-initials.md'

import SourceReactAvatar from './../auto-generated/previews/react/avatar.md'
import SourceReactAvatarImage from './../auto-generated/previews/react/avatar-image.md'
import SourceReactAvatarInitials from './../auto-generated/previews/react/avatar-initials.md'

import SourceAngularAvatar from './../auto-generated/previews/angular/avatar.ts.md'
import SourceAngularAvatarImage from './../auto-generated/previews/angular/avatar-image.ts.md'
import SourceAngularAvatarInitials from './../auto-generated/previews/angular/avatar-initials.ts.md'

import SourceVueAvatar from './../auto-generated/previews/vue/avatar.md'
import SourceVueAvatarImage from './../auto-generated/previews/vue/avatar-image.md'
import SourceVueAvatarInitials from './../auto-generated/previews/vue/avatar-initials.md'

# Avatar

<Tags />

## Usage

<Playground
name="avatar"
frameworks={{
  react: SourceReactAvatar,
  angular: SourceAngularAvatar,
  javascript: SourceAvatar,
  vue: SourceVueAvatar
}}>
</Playground>

## Image

<Playground
name="avatar-image"
frameworks={{
  react: SourceReactAvatarImage,
  angular: SourceAngularAvatarImage,
  javascript: SourceAvatarImage,
  vue: SourceVueAvatarImage
}}>
</Playground>

## Initials

<Playground
name="avatar-initials"
frameworks={{
  react: SourceReactAvatarInitials,
  angular: SourceAngularAvatarInitials,
  javascript: SourceAvatarInitials,
  vue: SourceVueAvatarInitials
}}>
</Playground>

## Properties

### Props

<Props />
