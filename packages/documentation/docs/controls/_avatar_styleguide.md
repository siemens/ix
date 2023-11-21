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

Avatars are visual or textual representations of individual identities and they are most often used to represent users logged into a system. Identity providers or user management systems usually provide identity information, and the amount of information provided varies from system to system. The iX avatar component offers different options to handle this.

## Options

![Avatar overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=963-565&mode=design&t=M9CowfOcGyqnSycV-4)

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Default (1)  | Without any set option the visual is just a predefined placeholder graphic, it can be used when identity information is unavailable or cannot be used for other reasons.|
| Initials (2) | Shows a string of one or two characters, can be used when only textual information is available. Examples: a user’s initials (JD for John Doe), the first character from the username (J for johndoe)|
| Image (3)    | Shows an image, can be used when identity information includes an image|
 
## Behavior
The avatar is a display-only component with no further interactions. Images provided are proportionally scaled to fill the content. A circle shape clips the image. All image formats that browser engines support can be used.

## Dos and Don’ts

![Avatar dos and Don‘ts](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=975-13&mode=design&t=SxUA6AcHswBAiIzi-4)

- Don't use more than 2 characters when using the "Initials" option
