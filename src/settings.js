// @ts-check

const os = require('os');
const path = require('path');

module.exports = (options = {}) => {
  const homeDir = '/media/aleksandr/vint/PROG/Hexlet';
  const hexletDir = path.join(homeDir, 'Hexlet');
  const cliSrcDir = path.join(__dirname, '..', 'src');
  const hexletConfigPath = path.join(hexletDir, '.config.json');
  const hexletTemplatesPath = path.join(cliSrcDir, 'templates');
  const hexletGitlabNamespace = 'hexlethq'; // https://gitlab.com/hexlethq
  const branch = 'main';
  const generateHexletProgramPath = (programSlug) => path.join(hexletDir, programSlug);
  const author = {
    name: '@hexlet/cli',
    email: 'support@hexlet.io',
  };

  return {
    author,
    cliSrcDir,
    hexletConfigPath,
    hexletDir,
    hexletGitlabNamespace,
    branch,
    hexletTemplatesPath,
    generateHexletProgramPath,
  };
};
