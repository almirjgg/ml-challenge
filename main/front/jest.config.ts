/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Mocks para archivos de estilos y assets
    '\\.(scss|css|png|svg)$': 'identity-obj-proxy',
    // Alias para que Jest entienda '@/'
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
