const path = require('path');
const fs = require('fs-extra');

const cwdPath = process.cwd();
const prePath = path.join(cwdPath, '.changeset', 'pre.json');

const PROJECT = [
  ['@siemens/ix-aggrid', 'aggrid'],
  ['@siemens/ix-angular', 'angular'],
  ['@siemens/ix', 'core'],
  ['@siemens/ix-echarts', 'echarts'],
  ['@siemens/ix-react', 'react'],
  ['@siemens/ix-vue', 'vue'],
].map(([pkg, p]) => [pkg, path.join(cwdPath, 'packages', p, 'package.json')]);

if (!fs.existsSync(prePath)) {
  throw Error('pre.json not exist.');
}

const pre = JSON.parse(fs.readFileSync(prePath).toString());
Object.keys(pre.initialVersions).forEach((pkg) => {
  const version = pre.initialVersions[pkg];
  console.log(`Reset version ${pkg} to ${version}`);

  const localPkg = PROJECT.find(([p]) => p === pkg);

  if (localPkg) {
    setPkgVersion(localPkg[1], version);
  }

  PROJECT.forEach((patchPkg) => {
    updatePackageJSON(patchPkg[1], pkg, version);
  });
});

function setPkgVersion(packageJSONPath, newVersion) {
  const data = fs.readFileSync(packageJSONPath).toString();
  const packageJSON = JSON.parse(data);

  packageJSON.version = newVersion;

  fs.writeFileSync(
    packageJSONPath,
    JSON.stringify(packageJSON, null, 2),
    'utf8'
  );
}

function updatePackageJSON(packageJSONPath, packageName, newVersion) {
  const data = fs.readFileSync(packageJSONPath).toString();
  const packageJSON = JSON.parse(data);

  if (packageJSON.dependencies && packageJSON.dependencies[packageName]) {
    const existingVersion = packageJSON.dependencies[packageName];

    if (!existingVersion.startsWith('workspace')) {
      packageJSON.dependencies[packageName] = preserveSemVer(
        existingVersion,
        newVersion
      );
    }
  }

  if (packageJSON.devDependencies && packageJSON.devDependencies[packageName]) {
    const existingVersion = packageJSON.devDependencies[packageName];
    if (!existingVersion.startsWith('workspace')) {
      packageJSON.devDependencies[packageName] = preserveSemVer(
        existingVersion,
        newVersion
      );
    }
  }

  fs.writeFileSync(
    packageJSONPath,
    JSON.stringify(packageJSON, null, 2),
    'utf8'
  );
}

function preserveSemVer(existingVersion, newVersion) {
  const semverRegex = /(\^|~)?(\d+)\.(\d+).(\d+)/;
  const match = semverRegex.exec(existingVersion);

  if (match) {
    const caretTilde = match[1] || '';
    return `${caretTilde}${newVersion}`;
  }

  return newVersion;
}
