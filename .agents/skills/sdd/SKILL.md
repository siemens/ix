---
name: sdd
description: >-
  Spec-Driven Development for Siemens IX: turns user-provided issue or tracking text
  into spec.md, plan.md, and tasks.md (GitHub spec-kit style, size-aware, no tracker integration).
  Use when the user asks for SDD, spec-kit planning, or structured feature docs from issue text
  (e.g. IX-1234 plus pasted description). Outputs live under .sdd/{tracking-id}/.
argument-hint: 'Tracking/issue id (e.g. IX-3896) and pasted title, description, acceptance criteria'
user-invocable: true
---

# Spec-Driven Development (IX)

## Overview

Transform **user-provided issue or tracking text** (no tracker integration required) into structured specifications following **GitHub spec-kit methodology**: clear separation, progressive disclosure, minimal duplication.

**When to use**: User wants SDD / spec planning for an IX change and supplies (or will supply) a tracking/issue identifier plus title, description, and acceptance criteria as plain text.

## Required input (no tracker integration)

Before Phase 1, confirm you have:

1. **Tracking/issue identifier** (e.g. `IX-3896`, issue number, ticket key) — if missing, ask once; if still missing, derive a short folder slug from the title (lowercase, hyphens, max ~40 chars).
2. **Issue title** (summary line).
3. **Description** — user story, context, bullets, links as pasted.
4. **Acceptance criteria** — pasted AC block or checklist from the issue/tracking source.

If the user only pastes prose without clear AC, extract implied AC into the spec and add a **Clarifications** note listing assumptions.

**Do not** call tracker APIs or assume an MCP; treat the chat message as the source of truth.

## Key principles

1. **Separation**: `spec.md` (WHAT), `plan.md` (HOW), `tasks.md` (DO) — no duplication.
2. **Tech-agnostic specs**: Requirements do not name Stencil/React/etc.
3. **Size-aware output**: XS compact; L fuller (see below).
4. **Line limits**: Each artifact file under 500 lines.
5. **Progressive disclosure**: Read spec → plan → tasks when implementing.

## Workflow phases

```
Pasted issue text → Specify → Review → Clarify → Review → Plan → Review → Tasks → Review → Implement
                    ↓                  ↓                 ↓                ↓
                  spec.md            spec.md           plan.md          tasks.md
```

**Mandatory phase gates**:

After creating or updating each artifact, stop and ask the user to review the created file before continuing:

1. After `spec.md`: ask whether to continue to planning or revise the spec.
2. After updated `spec.md` clarifications: ask whether to continue to planning or revise the clarified spec.
3. After `plan.md`: ask whether to continue to task breakdown or revise the plan.
4. After `tasks.md`: ask whether to implement, revise tasks, or stop at handoff.

Do **not** proceed to the next phase automatically after writing an artifact. If the runtime provides an `ask_user` tool, use it for these phase gates instead of asking in plain text.

If the XS strategy omits `spec.md` or `tasks.md`, skip only the omitted file's review gate; still stop after the merged `plan.md` and ask the user to review it before implementation.

### Phase 1: Specify (requirements)

Create `spec.md` from the pasted issue only (optional: spawn a read-only explore subagent for codebase context **after** spec is drafted if gaps exist — do not block spec on repo-wide search).

**Output path**: `.sdd/{TRACKING_ID}/spec.md` (use the agreed tracking/issue identifier or slug for `{TRACKING_ID}`).

**Review gate**: After writing `spec.md`, stop and ask the user to review `.sdd/{TRACKING_ID}/spec.md`. Continue only when the user approves moving to planning; otherwise revise `spec.md` first.

**Frontmatter**:

```yaml
---
tracking_id: {ID or slug}
feature: {TITLE}
date: {ISO date}
status: ready-for-planning
source: user-pasted-issue
---
```

**Body template** (adapt length to size tier):

```markdown
# Feature Spec: {TITLE}

## User input (from issue)
{2–5 lines summarizing pasted description — no copy-paste dump of entire ticket}

## User scenarios and testing

### US1 [P1] - {Scenario}
**As** {role}
**I want** {goal}
**So that** {benefit}

**Acceptance scenarios:**
**Given** {context}
**When** {action}
**Then** {outcome}

**Edge cases:** {if any}

## Requirements

### Functional requirements
**FR-001**: {requirement}
**FR-002**: {requirement}

### Key entities
{Only if data or domain models matter}

## Success criteria
**SC-001**: {measurable outcome}
**SC-002**: {measurable outcome}

## Assumptions
{Scope boundaries, dependencies on other IX areas}
```

**Size guide (spec.md only)**:

- XS: ~40 lines
- S: ~80 lines
- M: ~100 lines
- L: ~150 lines

### Phase 2: Clarify (optional)

If requirements are ambiguous, ask targeted questions in chat; when answered, append to `spec.md`:

```markdown
## Clarifications

**Q1**: …
**A**: …
```

**Review gate**: After adding clarifications, stop and ask the user to review the updated `.sdd/{TRACKING_ID}/spec.md`. Continue only when the user approves moving to planning; otherwise revise `spec.md` first.

### Phase 3: Plan (technical approach)

**Output**: `.sdd/{TRACKING_ID}/plan.md`

1. Read `spec.md`.
2. Align with IX repo: skim `CONTRIBUTING.md` and relevant package/component paths touched; follow existing patterns in the monorepo.
3. Record technical decisions with short rationale; **do not** repeat requirements from `spec.md` — reference them (`See spec.md US1`).

**Plan frontmatter**:

```yaml
---
tracking_id: {ID or slug}
phase: plan
created: {ISO date}
depends_on: []
---
```

**Sections**: Summary, Technical context (language, packages, tests), Architecture (decisions with alternatives rejected), Implementation structure, Risks and mitigations, Deployment strategy only if non-trivial.

**Review gate**: After writing `plan.md`, stop and ask the user to review `.sdd/{TRACKING_ID}/plan.md`. Continue only when the user approves creating tasks; otherwise revise `plan.md` first.

**Size guide (plan.md)**:

- XS: merge spec + plan into a **single** `plan.md` only (~80 lines total) — skip separate `spec.md` only when doing XS merge (see XS strategy below).
- S: ~120 lines
- M: ~150 lines
- L: ~200 lines

### Phase 4: Tasks (implementation steps)

**Output**: `.sdd/{TRACKING_ID}/tasks.md`

Ordered steps; each task: id, file path in repo, action, optional snippet, dependencies. Mark parallelizable tasks with `[P]`. Do not repeat plan rationale.

**Review gate**: After writing `tasks.md`, stop and ask the user to review `.sdd/{TRACKING_ID}/tasks.md`. Implement only if the user explicitly approves implementation; otherwise revise `tasks.md` or stop at handoff.

**Size guide (tasks.md)**:

- XS: omit `tasks.md` (implement from merged plan).
- S: ~100 lines
- M: ~150 lines
- L: ~200 lines

### Phase 5: Research (optional)

Create `research.md` only for unusual dependency or API verification — not for routine Stencil/Playwright usage.

**Output**: `.sdd/{TRACKING_ID}/research.md` (<300 lines).

## XS output strategy

For **XS** (<~2h) work:

- Produce **one** file: `.sdd/{TRACKING_ID}/plan.md` (~80 lines) that merges concise requirements + approach + minimal task list + validation checklist.
- Omit separate `spec.md` / `tasks.md` unless the user explicitly wants full spec-kit layout.
- Stop after writing the merged `plan.md` and ask the user to review it before implementation.

## S / M / L output strategy

| Tier | Outputs | Approx. total lines |
|------|---------|---------------------|
| S | spec.md + plan.md + tasks.md | ~300 |
| M | spec.md + plan.md + tasks.md | ~400 |
| L | spec.md + plan.md + tasks.md (+ optional research.md) | ~600 |

Classify size from pasted story points, AC count, and breadth (single component vs cross-package).

## Anti-duplication rules

Before each paragraph:

1. Already in `spec.md`? → Link, do not repeat.
2. Technical decision? → `plan.md` only.
3. Implementation step? → `tasks.md` only.
4. Obvious to an IX maintainer? → Skip (standard monorepo test commands, changeset rules — point to existing skills if needed).
5. Project-wide rule? → Reference `CONTRIBUTING.md` or the relevant package README.

**Cross-reference pattern**:

```markdown
See spec.md US1 for acceptance criteria.
See plan.md Architecture for rationale.
```

## File layout

```text
.sdd/{TRACKING_ID}/
├── spec.md       # Requirements (tech-agnostic)
├── plan.md       # Technical approach
├── tasks.md      # Implementation steps
└── research.md   # Optional tech verification
```

Do **not** generate `narrative.md` or standalone `alternatives.md` — keep decisions inline in `plan.md`.

## Context management

- **Main chat**: clarify scope, write `plan.md` / `tasks.md`, discuss trade-offs.
- **Read-only exploration**: large codebase search to ground `plan.md` paths — use sparingly after `spec.md` exists.

## Implementation handoff

When artifacts are ready:

```text
Specification complete for {TRACKING_ID}.

Files:
- spec.md — requirements
- plan.md — technical approach
- tasks.md — steps (if created)

Next: implement a task, all tasks in order, or revise the plan — say which you prefer.
```

## Quality checklist

**spec.md**: Tech-agnostic; Given/When/Then where applicable; numbered FRs; measurable success criteria; <500 lines.

**plan.md**: No requirement duplication; decisions with 1–2 line rationale; references spec; IX-realistic paths; <500 lines.

**tasks.md**: Exact repo paths; dependency order; `[P]` for parallel; no decision essays; <500 lines.

**Overall**: No cross-file duplication; size tier matches work; each file has one job.

## IX-specific notes

- Prefer paths under `packages/core`, `packages/angular`, `packages/react`, `packages/documentation`, etc., as appropriate — discover real paths from the tree, do not invent directories.
- Testing and release hygiene: use existing project skills (component tests, Storybook a11y, changesets) when the user’s workflow requires them; do not restate full skill bodies here.

## References

- [GitHub spec-kit](https://github.com/github/spec-kit)
- Project skill definition: `.github/skills/sdd/SKILL.md` — this repo skill uses pasted issue/tracking text and `.sdd/…` for generated artifacts.
