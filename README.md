# JavaScript Library Starter

[![Build Status](https://travis-ci.org/user/repository.svg?branch=master)](https://travis-ci.org/user/repository)
[![npm Version](https://img.shields.io/npm/v/my-lib.svg)](https://www.npmjs.com/package/my-lib)
[![License](https://img.shields.io/npm/l/my-lib.svg)](https://github.com/user/repository/blob/master/LICENSE)

This is a starter template for building a JavaScript library that can be published to [npm](https://www.npmjs.com/). It includes a basic file structure, configuration files, and GitHub templates.

## Usage

```bash
git clone https://github.com/pm0915/javascript-library-starter.git YOURFOLDERNAME
cd YOURFOLDERNAME

# Run pnpm install and write your library name when asked. That's all!
pnpm install
```
## Features
- RollupJS for multiple optimized bundles following the standard convention and Tree-shaking
- Tests, coverage and interactive watch mode using Jest
- Prettier and ESLint for code formatting and consistency
- (Optional) Automatic releases and changelog, using Semantic release, Commitizen, Conventional changelog and Husky (for the git hooks)

## NPM scripts
- ```bash
  pnpm run test:  Run test suite 
  ```

- ```bash
  pnpm run build: Generate bundles
  ```

- ```bash
  pnpm run fix: Lints code and fix
  ```

- ```bash
  pnpm run commit: Commit using conventional commit style
  ```

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. Fork this repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-branch-name`
5. Submit a pull request

## License

This project is licensed under the [MIT License](https://github.com/user/repository/blob/master/LICENSE).
