const Listr = require('listr');
const { checkGit, publishGit, readLernaRootPackage } = require('./common');

(async function () {
  const { version } = readLernaRootPackage();
  const tasks = [];

  checkGit(tasks);
  publishGit(tasks, version);

  const listr = new Listr(tasks);

  try {
    await listr.run();
  } catch (e) {
    // console.error(e);
  }
})();
