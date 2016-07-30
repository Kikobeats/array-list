'use strict'

var ArrayListError = require('whoops').create('ArrayListError')
var isInteger = Number.isInteger

function createArray () {
  return []
}

function createArrayLimit (limit) {
  function arrayLimit () {
    var arr = []
    arr.length = limit
    return arr
  }

  return arrayLimit
}

function createArrayFactory (limit) {
  if (isInteger(limit) && limit > 0) return createArrayLimit(limit)
  return createArray
}

/**
 * Simple Array List implementation.
 *
 * @link Reference: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
 * @param [Number] limit - Max number of elements of the list.
 */
function ArrayList (limit) {
  if (!(this instanceof ArrayList)) return new ArrayList(limit)

  var factory = createArrayFactory(limit)
  var index
  var list

  function reset () {
    index = 0
    list = factory()
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
    value: function (e) {
      if (list.isFull()) throw ArrayListError('ENOADD', "It's full.")

      list[index] = e
      ++index
      return list
    }
  })

  Object.defineProperty(list, 'get', {
    value: function (index) {
      if (index != null) return list[index]
      return list
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
