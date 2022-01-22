module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js
    'plugin:react/recommended',
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js
    'plugin:react-hooks/recommended',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/src/index.ts
    'plugin:jest/recommended',
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    // https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  settings: {
    // import 時に js, jsx, ts, tsx の拡張子を読み込めるようにする
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // 型定義のときは変数使ってなくても良い
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // state は immer を利用しているので受け取った引数を直接変更したいので許容する
    'no-param-reassign': [2, {
      props: true,
      ignorePropertyModificationsFor: ['state', 'draftState'],
    }],

    // test 関連のファイルは devDependencies から import OKにする
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'setupTests.js',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
      ],
    }],

    // warn と error はメッセージとして使いたいのでワーニング対象から外す
    'no-console': [1, { allow: ['warn', 'error'] }],

    // import 時に js, jsx, ts, tsx の拡張子を読み込めるようにする
    'import/extensions': [2, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    // export default 必須にする必要はない
    'import/prefer-default-export': 0,

    // next/link と相性悪いので辛い(https://github.com/vercel/next.js/issues/5533)
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    'jsx-a11y/anchor-is-valid': [2, {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],

    // JSX の記法 を TSX の拡張子も許可する
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx'],
    }],

    // カスタムcomponentに対してはめんどくさいので許容する
    'react/jsx-props-no-spreading': [2, {
      html: 'enforce',
      custom: 'ignore',
      explicitSpread: 'enforce',
    }],

    // 新しいトランスパイルで無視できるようになったので消した
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // TypeScript導入しているので黙らせる
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,
    // 関数の括弧内の改行ルールはoffにした。あとで prettier入れたら消す。
    'function-paren-newline': 0,
    // 関数コンポーネントの定義を arrow-function にした
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
