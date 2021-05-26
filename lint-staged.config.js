module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'npx eslint -c eslint.config.js --fix',
  ],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{css,less}': [
    'npx stylelint --config stylelint.config.js --fix',
  ],
}
