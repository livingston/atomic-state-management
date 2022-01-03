const sharedConfig = require('tooling/jest/jest.config.shared');

module.exports = {
  ...sharedConfig({
    color: 'yellow',
    coveragePathIgnorePatterns: [
      './src/main.jsx',
    ]
  })
};
