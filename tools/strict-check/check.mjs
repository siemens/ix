#!/usr/bin/env node

import execa from 'execa';
let tscOutput = '';

const [_, __, ...changedFiles] = process.argv;

console.log(changedFiles);

try {
  const tscCommand = await execa('tsc', ['-p', 'tsconfig.sonar.json']);
  tscOutput = tscCommand.stdout;
} catch (error) {
  tscOutput = error.stdout;
}

const lines = tscOutput.split('\n');

const output = [];

for (const line of lines) {
  const regexFile = /(.*)(\(\d+,\d+\)):\W(.*)/;

  const match = line.match(regexFile);

  if (match) {
    const [_, file, position, message] = match;
    // console.log(file);
    // console.log(position);
    // console.log(message);
    // console.log('---');

    if (changedFiles.includes(file)) {
      console.log(line);
    }
  }
}
