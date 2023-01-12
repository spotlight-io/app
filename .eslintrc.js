module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint-config-airbnb',
  ],
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': 'off',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',
  },
};
