module.exports = {
  root: true,
  extends: "react-native-wcandillon",
  rules: {
    "react/no-array-index-key": "off",
    "react/jsx-no-bind": "off",
    "react/prop-types": "off", // Since we do not use prop-types
    "react/require-default-props": "off", // Since we do not use prop-types
    "react/default-props-match-prop-types": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "error",
    "react/jsx-curly-newline": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "react/jsx-wrap-multilines": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/camelcase": "off",
    "react-hooks/rules-of-hooks": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
  },
};
