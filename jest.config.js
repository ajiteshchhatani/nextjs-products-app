const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**'
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

module.exports = createJestConfig(customJestConfig)