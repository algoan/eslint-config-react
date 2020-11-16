<p align="center">
  <a href="http://algoan.com/" target="blank"><img src="https://media.licdn.com/dms/image/C4E0BAQH-hIlc5g9g7w/company-logo_200_200/0?e=2159024400&v=beta&t=j5y9KO1P22GsMx3vBNawrpvyvjD2iyBWGeVPUsRkn5s" width="320" alt="Algoan Logo" /></a>
</p>

# Algoan React ESLint config

Algoan [ESLint](https://eslint.org) configuration shared for [React](https://reactjs.org/) projects written in [TypeScript](https://www.typescriptlang.org/) and using [prettier](https://prettier.io/).

## Installation

First, install this module running:

```bash
npm install @algoan/eslint-config-react --save-dev
```

Then, create a `.eslintrc.json` file:

```json
{
  "extends": "@algoan/eslint-config-react"
}
```

## Usage

In your `package.json` file, add a script:

```json
{
  "lint": "eslint **/*.{js,jsx,ts,tsx}"
}
```
