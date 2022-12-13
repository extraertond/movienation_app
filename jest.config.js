module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{ts,tsx}", "<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/jest.setup.ts"],
  modulePathIgnorePatterns: ["__mocks__", "__fixtures__"],
  coverageDirectory: "./coverage",
  testEnvironment: "jsdom",
};
