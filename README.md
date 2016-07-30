# array-list

![Last version](https://img.shields.io/github/tag/Kikobeats/array-list.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/array-list/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/array-list)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/array-list.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/array-list)
[![Dependency status](https://img.shields.io/david/Kikobeats/array-list.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-list)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/array-list.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-list#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/array-list.svg?style=flat-square)](https://www.npmjs.org/package/array-list)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Simple array list implementation.

## Install

```bash
$ npm install array-list --save
```

## Usage

```js
var arrayList = require('array-list')

// with limit
var arr = arrayList(100)

// without limit
var arr = arrayList()
```

## API

### arrayList({limit})

#### limit

Type: `integer`

Specify the limit of the array. It's need to be a positive integer number.

### .size
### .add
### .get
### .clear
### .isEmpty

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
