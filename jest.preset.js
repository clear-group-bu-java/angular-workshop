const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  // set this to a sensible value for a real project
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
