# array-list

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/array-list.svg)](https://greenkeeper.io/)

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

### arrayList([limit])

#### limit

Type: `integer`

Specify the limit of the array. It's need to be a positive integer number.

### .size()

Returns how many elements are stored in the array list.

This value is different from .length, that returns the size reserved for the array.

### .push({element})

It adds a new element in the array list.

This methods could be throw an error if:

- You don't provide a valid element.
- The array list is full.

### .get([element])

It gets the elements in the array list.

You can specify an index, in other case the methods will return all the elements.

### .clear()

It removes all the elements in the array list.

### .flush()

It returns a copy of the elements in array list.

An alias from concat `.get` +  `.clear`.

### .isEmpty()

Returns `true` is the `.size` is 0; `false` in other case.

### .isFull()

Returns `true` is the `.size` is equal to `limit`; `false` in other case.

## Related

* [array-future](https://github.com/Kikobeats/array-future) – A collection of Array prototypes prollyfills as proposition for ECMAScript 7.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
