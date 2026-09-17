# Siemens Industrial Experience CLI

`@siemens/ix-cli` is a private workspace tool for installing Siemens IX blocks.
It exposes the `ix` executable and is not published as a public package.

## Initialize a project

Run the CLI from the project root:

```sh
ix init
ix init --target-folder src/features/blocks
```

This creates `ix-blocks-lock.json`. `targetFolder` must be a safe path inside the
project.

## Add or update a block

```sh
ix add change-password
ix add change-password --tag v4.3.0
ix add change-password --registry https://example.test/ix-registry
ix add change-password --dry-run
ix add change-password --force
```

- `--tag` selects a registry version or distribution tag (default: `latest`).
- `--registry` selects a custom registry. Registry metadata and paths are
  treated as untrusted and validated before use.
- `--dry-run` fetches, validates, transforms, and hashes the complete block,
  then reports writes and conflicts without changing project files or the lock.
- `--force` permits overwriting modified tracked files and untracked file
  collisions. Without it, either conflict aborts the installation.

Use `--framework react|angular|auto` to override framework detection and
`--tokens '{"__IX_PREFIX__":"Ix"}'` for string token replacement.

## Lock and hash behavior

The lock records the installed registry version and a SHA-256 hash for every
generated file. On update, the CLI compares current file contents with those
hashes. A changed tracked file is considered customized; an existing output
that is absent from the lock is an untracked collision.

All remote files are fetched and validated before the first project write.
Writes and the atomic lock update are applied as one recoverable transaction.
If applying a file or saving the lock fails, affected files are restored and
new files and transaction data are removed.
