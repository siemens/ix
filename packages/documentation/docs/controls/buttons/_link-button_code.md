import Playground from '@site/src/components/Playground';
import Props from './../../auto-generated/ix-link-button/props.md';

import SourceLinkButton from './../../auto-generated/previews/web-component/link-button.md'
import SourceReactLinkButton from './../../auto-generated/previews/react/link-button.md'
import SourceAngularLinkButton from './../../auto-generated/previews/angular/link-button.ts.md'
import SourceVueLinkButton from './../../auto-generated/previews/vue/link-button.md'

import SourceLinkButtonDisabled from './../../auto-generated/previews/web-component/link-button-disabled.md'
import SourceReactLinkButtonDisabled from './../../auto-generated/previews/react/link-button-disabled.md'
import SourceAngularLinkButtonDisabled from './../../auto-generated/previews/angular/link-button-disabled.ts.md'
import SourceVueLinkButtonDisabled from './../../auto-generated/previews/vue/link-button-disabled.md'

## Examples

<Playground
name="link-button"
frameworks={{
  react: SourceReactLinkButton,
  angular: SourceAngularLinkButton,
  javascript: SourceLinkButton,
  vue: SourceVueLinkButton
}}>
</Playground>

### Disabled

<Playground
name="link-button-disabled"
frameworks={{
  react: SourceReactLinkButtonDisabled,
  angular: SourceAngularLinkButtonDisabled,
  javascript: SourceLinkButtonDisabled,
  vue: SourceVueLinkButtonDisabled
}}>
</Playground>

## API (ix-link-button)

### Props

<Props />
