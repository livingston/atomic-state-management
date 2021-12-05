const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,

  globalSetup: require.resolve('./setup.global.js'),

  timers: 'fake',

  rootDir: process.cwd(),
  roots: ['<rootDir>/packages'],

  projects: ['<rootDir>/packages/*/jest.config.js'],

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.jsx',
    '!<rootDir>/src/**/*.test.js',
    '!<rootDir>/src/**/*.test.jsx',
    '!<rootDir>/src/**/*.d.ts'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/*/dist/'],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
