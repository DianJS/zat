# @zatjs/stylelint

> 基于Taro的小电样式规范标准库

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

## Installation

```bash
yarn add @zatjs/stylelint --dev
```

## Usage

```json
{
  "extends": "@zatjs/stylelint"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-allowed-list` rule:

```json
{
  "extends": "@zatjs/stylelint",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "ignores"]
      }
    ],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```
