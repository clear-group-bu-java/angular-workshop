module.exports = {
  displayName: 'people-data-address',
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../../../coverage/libs/people/data/address',
};
