'use strict'

const ArrayListError = require('whoops').create('ArrayListError')
const isInteger = Number.isInteger
const isNil = v => v == null

function clearArray (arr) {
  arr.length = 0
  return arr
}

function clearArrayLimit (limit) {
  function arrayLimit (arr) {
    arr = clearArray(arr)
    arr.length = limit
    return arr
  }

  return arrayLimit
}

function clearArrayFactory (limit) {
  if (isInteger(limit) && limit > 0) return clearArrayLimit(limit)
  return clearArray
}

/**
 * Simple Array List implementation.
 *
 * @link Reference: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
 * @param [Number] limit - Max number of elements of the list.
 */
function ArrayList (limit) {
  if (!(this instanceof ArrayList)) return new ArrayList(limit)

  const clear = clearArrayFactory(limit)
  let list = []
  let index

  function reset () {
    index = 0
    list = clear(list)
  }

  reset()

  let isFullFn

  if (isInteger(limit)) {
    isFullFn = function isFullLimit () {
      return index === limit
    }
  } else {
    isFullFn = function isFull () {
      return false
    }
  }

  Object.defineProperty(list, 'isFull', {
    value: isFullFn
  })

  Object.defineProperty(list, 'size', {
    value: function () {
      return index
    }
  })

  Object.defineProperty(list, 'push', {
    value: function (elem) {
      if (isNil(elem)) throw ArrayListError('ENOELEM', 'Provide a valid element.')
      if (list.isFull()) throw ArrayListError('ENOADD', "It's full.")

      list[index++] = elem
      return list
    }
  })

  Object.defineProperty(list, 'flush', {
    value: function () {
      var data = list.slice(0)
      list.clear()
      return data
    }
  })

  Object.defineProperty(list, 'get', {
    value: function (index) {
      if (isNil(index)) return list
      return list[index]
    }
  })

  Object.defineProperty(list, 'clear', {
    value: function () {
      reset()
      return list
    }
  })

  Object.defineProperty(list, 'isEmpty', {
    value: function () {
      return index === 0
    }
  })

  return list
}

module.exports = ArrayList
