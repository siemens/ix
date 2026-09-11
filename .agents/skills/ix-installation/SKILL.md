---
name: ix-installation
description: 'Install, configure, repair, or verify Siemens iX in an existing React, Angular, Vue, web-components, or native HTML project. Detect the framework, Angular standalone or module style, and package manager; add the correct iX packages and required wiring; then optionally install the official iX MCP server.'
argument-hint: 'Provide the application or workspace path and any preferred iX version'
user-invocable: true
---

# iX Installation

## When to Use

- Add Siemens iX to an existing application.
- Repair an incomplete iX installation, missing styles, loader setup, Vue plugin, or Angular module configuration.
- Verify which iX packages and imports an application needs.
- Configure the official iX MCP server after installing iX.

Do not use this skill for implementing application features after iX is configured. Use the `ix` skill for component selection, APIs, examples, blocks, icons, and design guidance.

## Required Principles

- Inspect the project before changing it. Do not assume React when detection fails.
- Preserve the existing package manager, framework conventions, application UI, and theme when already configured.
- Do not add a demo button, application shell, or other visible sample UI.
- Do not upgrade existing framework or iX versions unless the user requests it or approves a required compatibility change.
- Use the official installation documentation linked from `https://ix.siemens.io/llms.txt` when current version-specific details are needed.
- Never add `defineCustomElements` or `defineCustomElement` loader calls when using the React, Angular, or Vue wrapper.

## Phase 1: Identify the Target

1. Find the application package that should receive iX.
   - In a single-package project, use the project root.
   - In a monorepo, inspect workspace manifests and application folders. If more than one target is plausible, ask the user which application to configure.
2. Read the target `package.json`, framework configuration, source entry files, global styles, HTML document or framework layout, and available scripts.
3. Detect the package manager in this order:
   - the target or workspace root `packageManager` field
   - `pnpm-lock.yaml`
   - `yarn.lock`
   - `package-lock.json`
   - `bun.lock` or `bun.lockb`
4. If multiple lockfiles conflict or no package manager can be identified reliably, ask the user which package manager to use.
5. Run install commands from the workspace level expected by that package manager. Use workspace filters or the target package directory rather than adding dependencies to the wrong manifest.

## Phase 2: Detect the Framework

Use dependencies and project files together:

| Target | Strong indicators |
| --- | --- |
| React | `react`, `next`, or `@remix-run/react`; React/Next entry files |
| Angular | `@angular/core` or `@angular/cli`; `angular.json` |
| Vue | `vue` or `nuxt`; Vue/Nuxt entry files |
| Web components / native HTML | Browser application with HTML/JS/TS entry files and no supported framework wrapper |

If indicators conflict, the project uses another framework, or the result is unclear, ask the user. Do not silently choose a package.

### Angular Mode

For Angular, determine how the target application is bootstrapped:

- **Standalone**: `bootstrapApplication`, `ApplicationConfig`, or root components with `standalone: true`.
- **Module**: `bootstrapModule`, an application `NgModule`, or `AppModule`.

If the project mixes both patterns or the target component cannot be identified, ask whether to use standalone or module integration.

Both modes install `@siemens/ix-angular`. The mode only changes imports:

- Standalone components and directives come from `@siemens/ix-angular/standalone`.
- Module applications import `IxModule` from `@siemens/ix-angular`.

## Phase 3: Install the Required Packages

Use the detected package manager's normal dependency-add command:

| Target | Runtime dependencies |
| --- | --- |
| React | `@siemens/ix`, `@siemens/ix-react`, `@siemens/ix-icons` |
| Angular standalone | `@siemens/ix`, `@siemens/ix-angular`, `@siemens/ix-icons` |
| Angular module | `@siemens/ix`, `@siemens/ix-angular`, `@siemens/ix-icons` |
| Vue | `@siemens/ix`, `@siemens/ix-vue`, `@siemens/ix-icons` |
| Web components / native HTML | `@siemens/ix`, `@siemens/ix-icons` |

Before installing:

1. Check existing dependencies and lockfile resolutions.
2. Keep compatible installed iX versions instead of replacing them blindly.
3. When one of `@siemens/ix` or a framework wrapper is already installed, keep the core and wrapper on compatible iX versions.
4. Check framework peer requirements, especially `@angular/core` and `@angular/forms`. If the target framework version is incompatible with the selected iX release, explain the conflict and ask the user to choose an iX version or approve a framework upgrade.
5. Install only missing or approved packages.

## Phase 4: Apply Framework Setup

### Shared Theme Setup

Ensure the Siemens iX stylesheet is loaded once through the application's existing global-style mechanism:

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

An equivalent JavaScript or TypeScript import in the global application entry is valid:

```ts
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

Preserve existing `data-ix-theme` and `data-ix-color-schema` values. If they are absent, add them to the root `<html>` element using non-invasive defaults:

```html
<html data-ix-theme="classic" data-ix-color-schema="system">
```

Do not duplicate stylesheet imports or overwrite an existing theme choice.

### React

- Use components from `@siemens/ix-react`.
- Put the global stylesheet import where the React, Vite, Next.js, Remix, or other existing application convention expects global CSS.
- Do not call loaders from `@siemens/ix/loader` or `@siemens/ix-icons/loader`.
- Do not add a component import until application code needs that component.

### Angular Standalone

- Add the global stylesheet through the existing Angular global styles configuration or stylesheet.
- Import each used component, directive, and form value accessor from `@siemens/ix-angular/standalone` in the standalone component that uses it.
- Do not add unused component imports merely to prove installation.
- When form components are later used, include their matching standalone value accessor directive to avoid `No value accessor` errors.
- Do not call custom-element loaders.

### Angular Module

- Add the global stylesheet through the existing Angular global styles configuration or stylesheet.
- Import `IxModule` from `@siemens/ix-angular`.
- Add `IxModule.forRoot()` to the application module imports.
- Preserve existing animation setup. Add `BrowserAnimationsModule` only when the application does not already provide Angular animations and the selected iX usage requires it.
- Do not call custom-element loaders.

### Vue

Register the wrapper plugin in the existing Vue application entry:

```ts
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { ixPlugin } from '@siemens/ix-vue';

app.use(ixPlugin);
```

Use the project's actual `app` instance and preserve plugin ordering where it matters. Do not call custom-element loaders.

### Web Components / Native HTML

Load the stylesheet and register both iX component sets once in the application entry:

```ts
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconCustomElements } from '@siemens/ix-icons/loader';

defineIxIconCustomElements();
defineCustomElements();
```

Reuse an existing loader registration if present. Do not register either loader more than once.

## Phase 5: Validate the Application

1. Inspect the diff for duplicate imports, edits to the wrong workspace, or overwritten theme/application code.
2. Run the smallest existing command that validates the affected application:
   - framework build or type-check first
   - targeted lint when available and relevant
3. Do not introduce a new test runner, linter, or build tool.
4. If validation fails because of a version or peer-dependency mismatch, surface the exact mismatch. Do not hide it with broad dependency overrides.

## Phase 6: Offer the Official iX MCP Server

Only after the base iX setup is valid, ask the user whether to install the official iX MCP server described at:

`https://ix.siemens.io/docs/home/mcp-server`

Offer these choices:

1. Project installation (recommended).
2. Global installation.
3. Skip MCP installation.

Do not install or configure the MCP server without explicit user approval.

### Prerequisites

Before installation, explain:

- Node.js 20 or newer is recommended.
- Semantic documentation search currently requires a free token from `https://my.siemens.com` with `llm` scope.
- The setup command collects and stores the token. Never ask the user to paste the token into chat, command arguments, source files, or tracked configuration.

### Select the MCP Package

Use the same framework decision made for the iX installation:

| iX package | Official MCP package |
| --- | --- |
| `@siemens/ix` | `@siemens/ix-mcp` |
| `@siemens/ix-angular` | `@siemens/ix-mcp-angular` |
| `@siemens/ix-react` | `@siemens/ix-mcp-react` |
| `@siemens/ix-vue` | `@siemens/ix-mcp-vue` |

Read the installed `@siemens/ix` version and select the matching MCP distribution tag `ix<version>`. For example, iX `5.0.0` uses `@ix5.0.0`. Do not assume the MCP package version equals the iX version; the resolved MCP version also contains its own implementation version.

Before installing, query the selected package's published distribution tags and confirm that the exact `ix<version>` tag exists. If it is not published, report that the official MCP server is unavailable for the installed iX version. Do not silently install `latest` or a tag for another iX version.

### Install and Configure

- **Project installation**: add the selected MCP package as an exact dev dependency using the existing package manager and the matching `ix<version>` distribution tag.
- **Global installation**: use the user's selected package manager and the same matching distribution tag.
- Run the selected package's interactive `setup` command from the project root.
- Let the setup command manage secure token entry and tool selection.
- Preserve generated repository configuration and instruction files. Inspect them before suggesting they be committed, and ensure no secret is present.
- Ask the user to restart the configured AI tool and trust/enable the MCP server where required.
- Run the selected package's `check` command to verify installation and configuration.

For WSL, follow the documented environment-variable setup only when needed. Ensure `.env` is ignored before placing `SDL_MCP_TOKEN_ENV` or `OPENAI_API_KEY` there. Never commit either value.

## Failure Handling

- Unsupported or ambiguous framework: ask the user; do not guess.
- Ambiguous Angular mode: ask standalone or module.
- Conflicting package managers or workspace targets: ask before installing.
- Incompatible peer dependencies: explain the supported choices and wait for approval before upgrades.
- Matching official MCP distribution tag unavailable: skip MCP installation or let the user choose a compatible iX version; never fall back to `latest` silently.
- No interactive terminal for official MCP setup: provide the exact setup command for the user to run locally, then continue with `check` after they complete it.
- MCP token unavailable or Siemens access unavailable: skip MCP configuration without treating the base iX installation as failed.

## Output

Report:

1. Target application, framework, and Angular mode when applicable.
2. Package manager and dependencies added or retained.
3. Setup files changed.
4. Build/type-check/lint result.
5. Official MCP choice: project, global, skipped, or blocked.
6. MCP package, matched iX version, setup result, and `check` result when installed.
