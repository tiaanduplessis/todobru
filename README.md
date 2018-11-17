
# todobru
[![package version](https://img.shields.io/npm/v/todobru.svg?style=flat-square)](https://npmjs.org/package/todobru)
[![package downloads](https://img.shields.io/npm/dm/todobru.svg?style=flat-square)](https://npmjs.org/package/todobru)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/todobru.svg?style=flat-square)](https://npmjs.org/package/todobru)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Scan project for TODOs, FIXMEs, HACKs or whatever

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install todobru
$ # OR
$ yarn add todobru
```

## Usage

```js
const todobru = require('todobru')

console.log(todobru())

// [ [ { base: '/Users/tiaan/code/todobru',
//       name: 'parse-flags.js',
//       ext: '.js',
//       size: 1344,
//       content:
//        <Buffer 63 6f 6e 73 74 20 44 45 46 41 55 4c 54 5f 46 4c 41 47 53 20 3d 20 5b 27 54 4f 44 4f 27 2c 20 27 46 49 58 4d 45 27 2c 20 27 48 41 43 4b 27 5d 0a 0a 63 ... >,
//       flag: 'FIXME',
//       desc: 'Eat some food',
//       tags: [],
//       pairs: [Object] },
//     { base: '/Users/tiaan/code/todobru',
//       name: 'parse-flags.js',
//       ext: '.js',
//       size: 1344,
//       content:
//        <Buffer 63 6f 6e 73 74 20 44 45 46 41 55 4c 54 5f 46 4c 41 47 53 20 3d 20 5b 27 54 4f 44 4f 27 2c 20 27 46 49 58 4d 45 27 2c 20 27 48 41 43 4b 27 5d 0a 0a 63 ... >,
//       flag: 'FIXME',
//       desc: 'Eat some food',
//       tags: [],
//       pairs: [Object] },
//     { base: '/Users/tiaan/code/todobru',
//       name: 'parse-flags.js',
//       ext: '.js',
//       size: 1344,
//       content:
//        <Buffer 63 6f 6e 73 74 20 44 45 46 41 55 4c 54 5f 46 4c 41 47 53 20 3d 20 5b 27 54 4f 44 4f 27 2c 20 27 46 49 58 4d 45 27 2c 20 27 48 41 43 4b 27 5d 0a 0a 63 ... >,
//       flag: 'FIXME',
//       desc: 'Eat some food',
//       tags: [],
//       pairs: [Object] },
//     { base: '/Users/tiaan/code/todobru',
//       name: 'parse-flags.js',
//       ext: '.js',
//       size: 1344,
//       content:
//        <Buffer 63 6f 6e 73 74 20 44 45 46 41 55 4c 54 5f 46 4c 41 47 53 20 3d 20 5b 27 54 4f 44 4f 27 2c 20 27 46 49 58 4d 45 27 2c 20 27 48 41 43 4b 27 5d 0a 0a 63 ... >,
//       flag: 'FIXME',
//       desc: 'Eat some food',
//       tags: [],
//       pairs: [Object] } ],
//   [ { base: '/Users/tiaan/code/todobru/node_modules/debug/src',
//       name: 'browser.js',
//       ext: '.js',
//       size: 4734,
//       content:
//        <Buffer 2f 2a 2a 0a 20 2a 20 54 68 69 73 20 69 73 20 74 68 65 20 77 65 62 20 62 72 6f 77 73 65 72 20 69 6d 70 6c 65 6d 65 6e 74 61 74 69 6f 6e 20 6f 66 20 60 ... >,
//       flag: 'TODO',
//       desc:
//        'add a `localStorage` variable to explicitly enable/disable colors',
//       tags: [],
//       pairs: {} } ] ]

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    