# Button Link Functionality

The `ix-button` component now supports rendering as a link when the `href` property is provided. This gives users all the native browser link capabilities while maintaining the button's visual appearance.

## Usage

### Basic Link Button
```html
<ix-button href="https://example.com">Visit Example</ix-button>
```

### External Links
```html
<ix-button href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in New Tab
</ix-button>
```

### Download Links
```html
<ix-button href="/file.pdf" download="document.pdf">
  Download PDF
</ix-button>
```

### Internal Navigation
```html
<ix-button href="/dashboard">Go to Dashboard</ix-button>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `undefined` | URL for the button link. When provided, the button renders as an anchor tag |
| `target` | `'_self' \| '_blank' \| '_parent' \| '_top'` | `'_self'` | Specifies where to open the linked document |
| `download` | `string \| boolean` | `undefined` | Indicates that the linked resource should be downloaded |
| `rel` | `string` | `undefined` | Specifies the relationship between the current and linked documents |

## Behavior

### When `href` is provided:
- Component renders as `<a>` tag with `role="button"`
- All button styling and variants are preserved
- Native browser link behavior is available (right-click context menu, middle-click, etc.)
- Link attributes (`target`, `download`, `rel`) are applied
- When `disabled=true`, the `href` attribute is removed to prevent navigation

### When `href` is not provided:
- Component renders as `<button>` tag (default behavior)
- Standard button functionality is maintained

## Accessibility

- Link buttons have `role="button"` for screen readers
- All existing ARIA attributes are preserved
- Keyboard navigation works as expected
- Disabled state properly prevents navigation

## Browser Features

Users get all native browser link features:
- Right-click context menu (Open in new tab, Copy link, etc.)
- Middle-click to open in new tab
- Ctrl/Cmd+click to open in new tab
- URL preview in browser status bar
- Browser history integration
- Bookmarking capability

## Migration from ix-link-button

If you're currently using `ix-link-button` and want the full button styling:

**Before:**
```html
<ix-link-button url="https://example.com">Link</ix-link-button>
```

**After:**
```html
<ix-button href="https://example.com" variant="primary">Link</ix-button>
```

## Security Considerations

For external links opening in new tabs, always include `rel="noopener noreferrer"`:

```html
<ix-button 
  href="https://external-site.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  External Link
</ix-button>
```
