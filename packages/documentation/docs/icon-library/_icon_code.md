import Icons from '@site/src/components/Icons';

## Usage

### Angular

```html
<ix-icon name="star" size="16"></ix-icon>
<ix-icon name="star" size="24"></ix-icon>
<ix-icon name="star" size="32"></ix-icon>
```

### React

```html
<IxIcon name="star" size="16"></IxIcon>
<IxIcon name="star" size="24"></IxIcon>
<IxIcon name="star" size="32"></IxIcon>
```

### Web components

```html
<ix-icon name="star" size="16"></ix-icon>
<ix-icon name="star" size="24"></ix-icon>
<ix-icon name="star" size="32"></ix-icon>
```

### Vue

```html
<IxIcon name="star" size="16"></IxIcon>
<IxIcon name="star" size="24"></IxIcon>
<IxIcon name="star" size="32"></IxIcon>
```

## Integrate external icons

### Technical requirements
- Supported icon format is SVG
- Each icon is a single SVG file, Sprites are not supported yet
- The icon has a size of 512✕512 (width, height and viewBox)
- All color information within the SVG will be ignored
- For visual and formal requirements see guidelines tab above

```tsx
  <ix-icon name="./assets/my-icon.svg"></ix-icon>
  <ix-icon name="https://my.example.cdn.address/assets/my-icon.svg"></ix-icon>
```

## Icon library

<Icons></Icons>
