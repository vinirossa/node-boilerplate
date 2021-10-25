/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**', 'lib/**', 'bin/**'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),
  preset: 'ts-jest',
  testMatch: [
    '**/test/**/*.[jt]s?(x)',
    '**/src/**/*.(spec|test).[jt]s?(x)',
    '**/lib/**/*.(spec|test).[jt]s?(x)',
    '**/bin/**/*.(spec|test).[jt]s?(x)'
  ],
  verbose: true
}
