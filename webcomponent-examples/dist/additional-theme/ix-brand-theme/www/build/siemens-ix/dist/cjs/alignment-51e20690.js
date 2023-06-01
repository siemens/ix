'use strict';

function getAlignment(placement) {
  if (placement.includes('-end')) {
    return 'end';
  }
  else if (placement.includes('-start')) {
    return 'start';
  }
  return undefined;
}

exports.getAlignment = getAlignment;
