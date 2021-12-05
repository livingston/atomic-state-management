module.exports = {
  roots: ['<rootDir>/src'],

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|jsx)$': [require.resolve('babel-jest'), {rootMode: "upward"}],
  },

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },

  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  haste: {
    hasteImplModulePath: require.resolve('./noHaste.js')
  }
};
