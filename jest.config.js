// jest.config.js

module.exports = {
    // Specify test environment
    testEnvironment: 'jsdom',
    // Configure Jest to use Babel
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  