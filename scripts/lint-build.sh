#!/bin/bash

#
# SPDX-FileCopyrightText: 2022 Siemens AG
#
# SPDX-License-Identifier: MIT
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#

git diff --quiet -p ./packages/core/component-doc.json
STATUS=$?

if [ $STATUS -eq 0 ]
then
    exit 0
fi

exit 1
