# Siemens iX registry

The registry is published to the repository's `gh-pages` branch by
[the Deploy registry workflow](../../.github/workflows/registry.yml). Do not
edit or deploy the `gh-pages` branch manually.

## Deployment targets

The workflow accepts only these deployment versions:

| Source or input           | Published path | Purpose                          |
| ------------------------- | -------------- | -------------------------------- |
| `main`                    | `/main/`       | Current development registry     |
| `release-registry/vX.Y.Z` | `/vX.Y.Z/`     | Stable, version-matched registry |
| `vX.Y.Z` workflow input   | `/vX.Y.Z/`     | Manual stable deployment         |

Stable versions must use an exact `v<major>.<minor>.<patch>` value, such as
`v4.3.0`. Prerelease versions, partial versions, and arbitrary names are
rejected.

## Deploy from a release branch

Use a release branch when publishing a stable registry:

```sh
git switch -c release-registry/v4.3.0 <release-commit>
git push --set-upstream origin release-registry/v4.3.0
```

Pushing the branch starts the workflow automatically. The branch name is
normalized to `v4.3.0`, and the generated registry is published below that
version path. After the workflow succeeds and the deployment is verified, the
release branch can be deleted.

Pushing `main` also starts the workflow and updates the mutable `/main/`
registry.

## Deploy manually

Run the workflow from GitHub Actions, or use the GitHub CLI:

```sh
gh workflow run registry.yml \
  --ref <source-ref> \
  -f registry_name=v4.3.0
```

`<source-ref>` selects the commit whose packages, blocks, and examples are
built. `registry_name` only sets the deployment version and path. Always select
the source ref that belongs to the version being published; setting
`registry_name` does not check out that release.

When `registry_name` is empty, the selected ref name is used. Accepted manual
values are `main`, `vX.Y.Z`, and `release-registry/vX.Y.Z`.

## Verify a deployment

Check the workflow run first, then verify:

- `https://siemens.github.io/ix/registry.json`
- `https://siemens.github.io/ix/llms.txt`
- `https://siemens.github.io/ix/vX.Y.Z/llms.txt`

In `registry.json`, confirm that:

1. `versions` contains the deployed version and previously published versions.
2. Paths for the new entry begin with the deployed version.
3. `dist-tags.latest` points to the highest deployed stable semantic version.

Redeploying an existing version replaces its complete version directory.
Artifacts removed or renamed by the new build therefore do not remain online.
Other version directories are retained.

## Test the deployment locally

From the repository root, run the deployment simulation:

```sh
tooling/registry/scripts/simulate-gh-pages-branches.sh \
  v4.3.0 \
  /tmp/ix-gh-pages-sim
```

The script builds and merges `main`, then builds and merges the requested
stable version. Inspect the simulated Pages content in:

```text
/tmp/ix-gh-pages-sim/pages
```

To build one registry version without simulating Pages:

```sh
REGISTRY_VERSION=v4.3.0 \
REGISTRY_PATH_PREFIX=v4.3.0 \
REGISTRY_LATEST_TAG=v4.3.0 \
pnpm --filter registry build
```

Build output is written to `tooling/registry/dist`.

## Deployment safety

The workflow:

- fails when the remote `gh-pages` state cannot be determined;
- preserves all existing version directories before using a clean Pages
  deployment;
- validates source definitions and generated artifacts against the registry
  schemas;
- serializes deployments through the `ci-registry-pages` concurrency group;
- keeps `latest` monotonic across stable semantic versions; and
- prevents a `main` deployment or an older stable redeployment from
  downgrading `latest`.

The same stable version can be redeployed intentionally. Its URL is mutable,
but `latest` is recalculated from all deployed stable versions.

## Required repository configuration

The workflow requires `contents: write` permission so it can update
`gh-pages`. Corporate-theme builds also use:

- `CORPORATE_THEME_TOKEN` from repository secrets
- `CORPORATE_THEME_VERSION` from repository variables

If a build fails before deployment, inspect the schema-validation output and
the workflow's artifact listings. If checking `gh-pages` fails, resolve the
authentication or remote-access problem instead of retrying with an empty
Pages state.
