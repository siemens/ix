# ix-menu-about-news

> News panel shown within the application menu.

- Web component: `<ix-menu-about-news>`
- React/Vue: `IxMenuAboutNews` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-about-news>` (`IxModule` from `@siemens/ix-angular` or `IxMenuAboutNews` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/popover-news/guide.md

## Figma IDs

- None

## Properties

- `aboutItemLabel`; attr: `about-item-label`; type: `string | undefined` - Subtitle of the about news
- `activeAboutTabKey`; attr: `active-about-tab-key`; type: `string | undefined` - Defines which tab should be active, used when the about news is used in combination with ix-menu-about
- `i18nShowMore`; attr: `i18n-show-more`; type: `string`; default: `'Show more'` - i18n label for 'Show more' button
- `label`; attr: `label`; type: `string | undefined` - Title of the about news
- `show`; attr: `show`; type: `boolean`; default: `false` - Show about news

## Events

- `closePopover` - Popover closed
- `showMore` - Show More button is pressed

## Methods

- None

## Slots

- `` - About news content.

## Dependencies

- Renders: `ix-button`, `ix-icon-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- popover-news (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
