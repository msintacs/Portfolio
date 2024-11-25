module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
    "max-depth": ["error", 2],
    "max-lines-per-function": "off",
    "operator-linebreak": "off", // Prettier가 이를 처리하도록 함
    "no-unused-expressions": ["error", { allowTernary: true }],
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off", // React 17 이상에서는 필요 없음
    "comma-dangle": "off", // ESLint의 comma-dangle 규칙을 비활성화
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5", // Prettier에게 trailing comma 처리를 맡김
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },
};
