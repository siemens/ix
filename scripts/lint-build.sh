#!/bin/bash

#
# SPDX-FileCopyrightText: 2024 Siemens AG
#
# SPDX-License-Identifier: MIT
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#

RESULT=$(git diff ./packages)
STATUS=$?

if [[ $STATUS -eq 0 && $RESULT == '' ]]
then
    exit 0
fi

echo There are some changed files after 'yarn build'
echo $RESULT

exit 1
