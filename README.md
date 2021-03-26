# @santima10/eslint-config

> My ESLint config to be used in my projects

## How to install

First you need to run in order to install the configuration and all the `peerDependencies` as `devDependencies` in the project.

```sh
npx install-peerdeps --dev @santima10/eslint-config
```

## Usage

### Basic TypeScript config

In the `.eslintrc`:

```plain
{
  "extends": [
    "@santima10/eslint-config"
  ]
}
```

### Basic NEXT.js + TypeScript config

In the `.eslintrc`:

```plain
{
  "extends": [
    "@santima10/eslint-config/nextjs"
  ]
}
```

### Prettier configuration

Edit `package.json`:

```json
{
  // ...
  "prettier": "@santima10/eslint-config/.prettierrc.json"
  // ...
}
```

Ready to code 🪄
