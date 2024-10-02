#!/usr/bin/env node

import execa from 'execa';
import * as core from '@actions/core';
import mustache from 'mustache';

let tscOutput = '';

const [_, __, ...changedFiles] = process.argv;

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
    const [, file, position, message] = match;

    changedFiles.forEach((changedFile) => {
      if (changedFile.includes(file)) {
        output.push({
          line,
          file,
          position,
          message,
        });
      }
    });
  }
}

function getCommentBody() {
  if (output.length === 0) {
    return ['### Report of `strict` check', '', 'No errors found 🎉'].join(
      '\n'
    );
  }

  const comment = `### Report of \`strict\` check

{{#files}}
<details>
<summary>{{file}}</summary>

<ul>
{{#errors}}
  <li>
    {{message}}
  </li>
{{/errors}}
</ul>

</details>
{{/files}}

`;

  const groupedByFile = output.reduce((acc, obj) => {
    const { file } = obj;
    if (!acc[file]) {
      acc[file] = [];
    }
    acc[file].push(obj);
    return acc;
  }, {});

  const viewData = {
    files: Object.keys(groupedByFile).map((file) => ({
      file,
      errors: groupedByFile[file],
    })),
  };

  const rendered = mustache.render(comment, viewData);
  return rendered;
}

core.setOutput('body', getCommentBody());
core.setOutput('has_errors', output.length > 0);
