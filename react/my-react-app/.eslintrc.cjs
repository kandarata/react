module.exports = {

  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:@typescript-eslint/recommended", 
    "next/core-web-vitals", 
    "prettier",
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // 각 코드 파일을 검사할 parser를 설정합니다. 
  // 지금과 같은 경우 typescript-eslint/parser를 사용하겠다고 명시하고 있습니다.
  // parser: '@typescript-eslint/parser',
  // parser의 추가 정보를 등록합니다.
  parserOptions: { 
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest', 
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  // eslint role 설정이 되어있는 외부 file을 extends 하는 부분입니다
  extends: [
    // typescript에서 제공하는 기본적인 eslint 설정을 불러옵니다.
    'plugin:@typescript-eslint/recommended',
    // prettier로 설정한 eslint 설정을 불러옵니다.
    'plugin:prettier/recommended',
  ],
  // 직접 lint rule을 적용하는 부분으로, 
  // extends로 자동 설정된 rules를 끄거나, 
  // error를 warning으로 변경하는 등 설정을 바꿀 수 있습니다.
  rules: {
		'comma-style': ['warn', 'last'],
		'dot-notation': 'warn',
		'eqeqeq': ['error', 'always'],
		'func-call-spacing': ['warn', 'never'],
		'lines-between-class-members': ['warn', 'always', { 'exceptAfterSingleLine': true }],
		'no-cond-assign': ['error', 'always'],
		'no-console': 'off',
		'no-multi-spaces': 'warn',
		'no-prototype-builtins': 'off',
		'no-shadow': 'off',
		'no-trailing-spaces': 'warn',
		'no-var': 'error',
		'padded-blocks': ['warn', 'never'],
		'prefer-const': 'warn',
		'prefer-rest-params': 'warn',
		'space-infix-ops': 'error',
		'spaced-comment': ['warn', 'always', {
			'line': {
				'markers': ['/']
			},
			'block': {
				'balanced': true
			}
		}],
		'yoda': ['warn', 'never'],
		'react/no-unescaped-entities': 'off',
		'@next/next/no-img-element': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
		'@typescript-eslint/no-var-requires': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
