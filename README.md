# eslint-plugin-blm-eslint-plugin

规范 api 请求函数格式

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-blm-eslint-plugin`:

```sh
npm install eslint-plugin-blm-eslint-plugin --save-dev
```

## Usage

Add `blm-eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "blm-eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "blm-eslint-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


