/**
 * Jest Setup
 * Runs before each test file
 */

// Add custom matchers if needed
// expect.extend({...});

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment to suppress console output in tests
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};

// Setup DOM environment
document.body.innerHTML = `
  <div id="errorMessage"></div>
  <div id="jsoneditor"></div>
  <div id="jsonview"></div>
`;
