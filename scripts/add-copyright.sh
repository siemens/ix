#!/bin/bash

C=1

for i in $(find ./../packages -name '*.tsx' -not -path "**/node_modules/**" -not -path "**/dist/**" -not -path "**/*.d.ts" -not -path "**/core/stencil.config.ts" -not -path "**/core/loader/**"); # or whatever other pattern...
do
  if ! grep -q "COPYRIGHT (c) Siemens AG" $i
  then
    cat copyright.txt "$i" >"$i.new" && mv "$i.new" "$i"
  fi
done
