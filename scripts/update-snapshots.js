const owner = 'danielleroux';
const body = '/snapshot:approve --sha=value --args="bind.e2e"';

const [command, ...commandArgs] = body.split(' ');

console.log(body);
console.log(command);
console.log(commandArgs);

function parseArgs() {
  const result = {};
  const arr = commandArgs.map((arg) => {
    const param = arg.substring(0, arg.indexOf('=')).replace('--', '');
    const value = arg.substring(arg.indexOf('=') + 1);
    return {
      param,
      value,
    };
  });

  arr.forEach(({ param, value }) => {
    result[param] = value;
  });

  return result;
}

function setOutput(args) {
  Object.keys(args).forEach((key) => {
    core.setOutput(key, args[key]);
  });
}

if (command !== '/snapshot:approve') {
  throw Error('Invalid command', command);
}

const args = parseArgs();

if (owner === 'danielleroux') {
  setOutput(args);
  return;
}

if (!args['sha']) {
  throw Error('No sha provided');
}

setOutput(args);
