#!/bin/bash

#
# SPDX-FileCopyrightText: 2026 Siemens AG
#
# SPDX-License-Identifier: MIT
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#

# Runs inside the pinned Playwright image. Sets up the bits the image does not
# ship, then executes the command handed over through PLAYWRIGHT_COMMAND.

set -euo pipefail

corepack enable

# Karma resolves ChromeHeadless through CHROME_BIN and the image carries no
# system Chrome, so point it at the browser bundled with Playwright. Chrome
# refuses to start as root without --no-sandbox and Karma passes no such flag,
# so hand it a wrapper rather than the binary itself. Playwright does not read
# CHROME_BIN, it disables the sandbox on its own.
if [ -z "${CHROME_BIN:-}" ]; then
  CHROME_PATH="$(find /ms-playwright -maxdepth 3 -type f -name chrome -path '*chrome-linux*' 2>/dev/null | head -n1 || true)"

  if [ -n "$CHROME_PATH" ]; then
    cat > /tmp/chrome-no-sandbox <<EOF
#!/bin/bash
exec "$CHROME_PATH" --no-sandbox --disable-dev-shm-usage "\$@"
EOF
    chmod +x /tmp/chrome-no-sandbox
    export CHROME_BIN=/tmp/chrome-no-sandbox
  fi
fi

if [ -z "${CHROME_BIN:-}" ]; then
  echo "::warning::No Chrome binary found below /ms-playwright, Karma based tests will fail"
else
  echo "CHROME_BIN=$CHROME_BIN -> ${CHROME_PATH:-preset}"
fi

eval "$PLAYWRIGHT_COMMAND"
