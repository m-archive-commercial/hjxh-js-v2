module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended"],
  // bail: true, // stop early if test failed
  // jestCircus: 1 // same as the above
};
