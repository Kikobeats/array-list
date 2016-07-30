'use strict'

var ArrayListError = require('whoops').create('ArrayListError')
var isInteger = Number.isInteger

function isNill (v) {
  return v == null
}

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

  var clear = clearArrayFactory(limit)
  var list = []
  var index

  function reset () {
    index = 0
    list = clear(list)
  }

  reset()

  var isFullFn

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

  Object.defineProperty(list, 'add', {
    value: function (elem) {
      if (isNill(elem)) throw ArrayListError('ENOELEM', 'Provide a valid element')
      if (list.isFull()) throw ArrayListError('ENOADD', "It's full.")

      list[index] = elem
      ++index
      return list
    }
  })

  Object.defineProperty(list, 'get', {
    value: function (index) {
      if (isNill(index)) return list
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
