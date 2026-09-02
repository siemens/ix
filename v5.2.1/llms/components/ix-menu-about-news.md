# ix-menu-about-news

> News panel shown within the application menu.

## Documentation

- https://ix.siemens.io//docs/components/popover-news/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- popover-news
  - angular:
    - `angular/popover-news.html`: [file](../../examples/angular/popover-news.html)
    - `angular/popover-news.ts`: [file](../../examples/angular/popover-news.ts)
  - angular-standalone:
    - `angular-standalone/popover-news.html`: [file](../../examples/angular-standalone/popover-news.html)
    - `angular-standalone/popover-news.ts`: [file](../../examples/angular-standalone/popover-news.ts)
  - html:
    - `html/popover-news.html`: [file](../../examples/html/popover-news.html)
  - react:
    - `react/popover-news.tsx`: [file](../../examples/react/popover-news.tsx)
  - vue:
    - `vue/popover-news.vue`: [file](../../examples/vue/popover-news.vue)

## Related blocks

Block and file links are relative to this Markdown file.

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

## Slots

- `` - About news content.
