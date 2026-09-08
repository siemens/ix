---
name: visual-testing-snapshots
description: 'Run IX visual-testing snapshot checks or snapshot updates inside the Playwright Docker image. Use for updating or verifying visual regression snapshots with the visual-testing package, especially when a specific .e2e.ts test file should be run with or without -u.'
argument-hint: 'Provide the visual test file, for example button.e2e.ts, and whether snapshots should be updated'
user-invocable: true
---

# Visual Testing Snapshots

## When to Use

- Update IX visual regression snapshots for one or more `testing/visual-testing/**/*.e2e.ts` files.
- Re-run a visual regression test inside Docker to verify snapshot changes.
- A PR changes component UI, styling, theme output, layout, density, screenshots, or visual state and requires snapshot updates.
- A visual regression failure needs to be reproduced in the same Linux Playwright environment used by CI.

## Required Constraints

- Run visual-testing snapshot checks and updates only inside a Playwright Docker image.
- Use the Docker image that matches the currently used `@playwright/test` or `playwright` version from `pnpm-workspace.yaml`.
- For the current repository configuration, use `mcr.microsoft.com/playwright:v1.58.1-noble`.
- Install `pnpm` inside the Docker command or shell with `npm i -g pnpm`.
- Do not run a build inside Docker. If built package output is required, build outside Docker before starting the snapshot update flow.
- Do not run `pnpm run test.setup` inside the Playwright Docker image unless a test explicitly fails because the browser installation is missing.

## Inputs To Gather

- The visual test file to run, preferably a path under `testing/visual-testing/tests/`, for example `testing/visual-testing/tests/button/button.e2e.ts`.
- Whether the user wants to update snapshots (`-u`) or only verify the current snapshots.
- Whether the repository has already been built outside Docker when the visual test depends on built package output.

## Procedure

1. Confirm the current Playwright version from `pnpm-workspace.yaml` before choosing the Docker image. Use the matching `mcr.microsoft.com/playwright:v<version>-noble` image.
2. Make sure the test file exists under `testing/visual-testing/tests/`.
3. If the requested action is an update, run the test inside Docker with `-u`.
4. If the requested action is a verification run, run the same command without `-u`.
5. Keep the build outside Docker. Do not add `pnpm build`, `pnpm run build`, or Turbo build commands to the Docker command.
6. After the run, inspect the changed files under `testing/visual-testing/__screenshots__/` and report the updated snapshots or test failure.

## Commands

From the repository root, update snapshots for a specific test:

```sh
docker run --rm -v "$(pwd):/work" -w /work mcr.microsoft.com/playwright:v1.58.1-noble /bin/bash -lc 'npm i -g pnpm && pnpm --filter visual-testing visual-regression mytest.e2e.ts -u'
```

From the repository root, verify a specific test without updating snapshots:

```sh
docker run --rm -v "$(pwd):/work" -w /work mcr.microsoft.com/playwright:v1.58.1-noble /bin/bash -lc 'npm i -g pnpm && pnpm --filter visual-testing visual-regression mytest.e2e.ts'
```

Replace `mytest.e2e.ts` with the requested test file name or path, for example:

```sh
docker run --rm -v "$(pwd):/work" -w /work mcr.microsoft.com/playwright:v1.58.1-noble /bin/bash -lc 'npm i -g pnpm && pnpm --filter visual-testing visual-regression testing/visual-testing/tests/button/button.e2e.ts -u'
```

## Failure Handling

- If Docker is not available, stop and report that visual-testing snapshot updates require Docker.
- If `pnpm` is missing inside the container, keep `npm i -g pnpm` in the Docker pipeline instead of using a host-installed package manager.
- If the test fails because built IX output is missing, stop and ask for or run the needed build outside Docker, then re-run only the visual-testing command inside Docker.
- If snapshots change unexpectedly outside the requested test area, inspect the diff before reporting success.

## Output Format

When using this skill, report:

1. Docker image used.
2. Command run.
3. Snapshot update status: updated, unchanged, or failed.
4. Changed snapshot files, if any.
5. Any follow-up needed, such as running the build outside Docker before retrying.

## Example Prompts

- `Use the visual-testing-snapshots skill to update button.e2e.ts snapshots.`
- `Run the visual-testing snapshot check for testing/visual-testing/tests/menu/menu.e2e.ts without updating.`
- `Update the visual regression snapshots for mytest.e2e.ts in Docker.`
