# eslint-plugin-api-standard

规范 api 请求函数格式

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-api-standard`:

```sh
npm install eslint-plugin-api-standard --save-dev
```

## Usage

Add `api-standard` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["api-standard"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "api-standard/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
