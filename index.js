'use strict'

var ArrayListError = require('whoops').create('ArrayListError')
var isInteger = Number.isInteger

function createArray () {
  return []
}

function createArrayLimit (limit) {
  return new Array(limit)
}

function createArrayFactory (limit) {
  if (isInteger(limit) && limit > 0) return createArrayLimit
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

  var that = {}

  if (isInteger(limit)) {
    that.isFull = function isFullLimit () {
      return index === limit
    }
  } else {
    that.isFull = function isFull () {
      return false
    }
  }

  that.size = function size () {
    return index
  }

  that.add = function add (e) {
    if (that.isFull()) throw ArrayListError('ENOADD', "It's full.")

    list[index] = e
    ++index
    return list
  }

  that.get = function get (index) {
    if (index) return list[index]
    return list
  }

  that.clear = function clear () {
    reset()
    return list
  }

  that.isEmpty = function isEmpty () {
    return index === 0
  }

  return Object.assign(list, that)
}

module.exports = ArrayList
