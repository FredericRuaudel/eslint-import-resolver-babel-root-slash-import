import fs from 'fs-extra';
import path from 'path';

const nodeResolve = require('eslint-import-resolver-node').resolve;

exports.interfaceVersion = 2;

function findModuleRootPath(file) {
  let found = false;
  const nodeModuleDir = 'node_modules';
  let currentPath = path.dirname(file);
  while (!found && currentPath !== '/') {
    const nodeModuleDirToCheck = path.join(currentPath, nodeModuleDir);
    if (fs.pathExistsSync(nodeModuleDirToCheck)) {
      found = true;
    } else {
      currentPath = path.dirname(currentPath);
    }
  }

  return currentPath;
}

exports.resolve = (source, file, config) => {
  if (source.slice(0, 1) === '/') {
    const moduleRootPath = findModuleRootPath(file);
    const resolvedPath = path.join(moduleRootPath, source);
    return nodeResolve(resolvedPath, file, config);
  }

  return nodeResolve(source, file, config);
};
