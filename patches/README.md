# Stencil Core Patch

## Why This Patch Exists

This patch modifies `@stencil/core@4.38.3` to comment out the broad `*.css` module declaration in `internal/stencil-ext-modules.d.ts`.

### The Problem

1. **Monorepo Structure**: `@siemens/ix` (core) is built with Stencil and exports Stencil's type definitions
2. **Transitive Types**: When packages like `ionic-test-app` import `@siemens/ix-react`, they transitively get Stencil's types
3. **Type Conflict**: Stencil declares `declare module '*.css'` which returns `string`
4. **CSS Modules Break**: TypeScript's wildcard matching means `*.css` matches `*.module.css` files, preventing proper CSS Module support
5. **Vite Incompatibility**: Vite expects CSS Modules (`*.module.css`) to have type `{ readonly [key: string]: string }`, not `string`

### Why Not Other Solutions?

- **TypeScript `paths`**: Doesn't work for internal Stencil modules
- **`skipLibCheck`**: Already enabled but doesn't help with ambient module declarations  
- **Redeclaring modules**: TypeScript's "first match wins" means `*.css` always matches before `*.module.css`
- **`typeRoots`**: Can't selectively exclude specific files from node_modules packages
- **Fixing at source**: Would require Stencil upstream changes or not exporting these types from `@siemens/ix`

### What This Patch Does

Comments out the `declare module '*.css'` statement while preserving other useful declarations (svg, txt, etc.). This allows:
- CSS Modules (*.module.css) to work correctly with Vite's typing
- Other file imports (svg, txt) to continue working
- No breaking changes to Stencil-based components

### Alternative

If you want to avoid patches entirely, the only option is to:
1. Not use CSS Modules in packages that depend on `@siemens/ix-react`
2. Or publish `@siemens/ix` without Stencil's internal types (requires build config changes)

## References

- Stencil issue: https://github.com/ionic-team/stencil/issues/3315
- Related pnpm monorepo type issues with Stencil
