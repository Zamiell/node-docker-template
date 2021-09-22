// This is the configuration file for ESLint, the TypeScript linter
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // The linter base is the shared IsaacScript config
    // https://github.com/IsaacScript/eslint-config-isaacscript/blob/main/base.js
    "eslint-config-isaacscript/base",
  ],

  // Don't bother linting the template files (for inserting into a new IsaacScript project)
  // or the compiled output
  ignorePatterns: ["./file-templates/**", "./dist/**"],

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly
    project: "./tsconfig.json",
  },

  // We modify the linting rules from the base for some specific things
  // (listed in alphabetical order)
  rules: {
    // Documentation:
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    // Not defined in parent configs
    // This helps to find dead code that should be deleted
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: [".eslintrc.js"],
      },
    ],
  },
};
