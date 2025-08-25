# Siemens Industrial Experience (IX) - AI Coding Instructions

## Architecture Overview

**IX is a multi-framework design system** built on Stencil Web Components with framework-specific wrappers:

- `packages/core/` - Stencil-based Web Components (source of truth)
- `packages/react/`, `packages/angular/`, `packages/vue/` - Auto-generated framework wrappers via Stencil output targets
- `packages/aggrid/`, `packages/echarts/` - Theme packages for external libraries

**Monorepo Structure**: pnpm workspace with Turbo for build orchestration. All packages follow workspace:\* internal dependencies.

## Key Development Workflows

### Component Development (Core)

- Components live in `packages/core/src/components/[component-name]/`
- Each component has: `[component].tsx`, `[component].scss`, tests, and documentation
- Use `@Component`, `@Prop`, `@Event`, `@Listen` decorators from Stencil
- Framework wrappers are **auto-generated** via `stencil.config.ts` output targets - never edit directly

### Build & Development Commands

```bash
# Development server with watch mode
pnpm start                    # All packages
pnpm storybook               # Component development
pnpm docs                    # Documentation site

# Building
pnpm build                   # Full build (required before tests)
pnpm build --filter @siemens/ix    # Single package

# Visual regression testing (requires Docker)
pnpm build --filter \!documentation  # Build first
pnpm visual-regression              # All tests
pnpm visual-regression --filter @siemens/ix-aggrid  # Specific package
```

### Testing Architecture

- **Unit Tests**: Jest (Stencil) + Vitest (React)
- **Component Tests**: Playwright with `.ct.ts` files
- **Visual Regression**: Docker-based Playwright across multiple themes
- **Theme Testing**: All visual tests run against `theme-classic-light`, `theme-classic-dark`, and brand variants

## Release & Versioning

**Changesets-based releases**:

- Add changesets via `pnpm changeset`
- Prerelease mode uses `.changeset/pre.json`
- Snapshot releases for PR testing: comment `/release` on PRs
- Version bumps trigger framework wrapper regeneration

## Critical Patterns

### Stencil Component Structure

```tsx
@Component({
  tag: 'ix-button',
  shadow: true,
  styleUrl: './button.scss',
})
export class Button {
  @Prop() variant: ButtonVariant = 'primary';
  @Event() buttonClick: EventEmitter<void>;
}
```

### Theme System

- Themes in `packages/core/scss/theme/`
- CSS custom properties for theming
- Multiple theme support: classic-light/dark, brand variants
- Theme switching handled via CSS class application

### Framework Integration

- Angular: Two builds (component + standalone) via output targets
- React: Server-side rendering support via separate exports
- Vue: Experimental package with Vite build

### Documentation Generation

- Auto-generated from component JSDoc comments
- Cross-platform examples via test apps
- TypeDoc for API documentation
- Storybook for component playground

## File Naming & Organization Conventions

- Component folders: `kebab-case` matching tag names
- TypeScript: `.ts` for logic, `.tsx` for components
- Tests: `.spec.ts` (unit), `.ct.ts` (component), `.e2e.ts` (visual)
- Use SPDX license headers in all source files

When modifying components, always build first, then test visual regression changes with appropriate theme configurations.
