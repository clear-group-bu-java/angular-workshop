module.exports = {
  displayName: 'apis-people',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../../coverage/libs/apis/people',
};
