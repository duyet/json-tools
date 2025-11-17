/**
 * Jest Configuration
 * @see https://jestjs.io/docs/configuration
 */

module.exports = {
  // Test environment
  testEnvironment: 'jsdom',

  // Test match patterns
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  // Coverage configuration
  collectCoverageFrom: [
    'js/**/*.js',
    '!js/jsoneditor*.js', // Exclude vendored library
    '!js/**/*.test.js',
    '!js/**/*.spec.js'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov', 'html'],

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

  // Module paths
  moduleDirectories: ['node_modules', 'js'],

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Transform files
  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  // Ignore patterns
  testPathIgnorePatterns: ['/node_modules/', '/_site/', '/vendor/'],

  // Verbose output
  verbose: true,

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks between tests
  restoreMocks: true
};
