const getCallerDir = require('caller-dir');
const baseConfig = require('./jest.config.base');

module.exports = (config, context = getCallerDir()) => {
  const packageContext = { paths: [context] };
  const pkgJSON = require(require.resolve('./package.json', packageContext));

  return {
    ...baseConfig,

    displayName: {
      name: pkgJSON.name,
      color: config.color
    },
  };
};
