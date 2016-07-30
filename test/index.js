'use strict'

var should = require('should')
var arrayList = require('..')

describe('Array list', function () {
  describe('.create', function () {
    it('specifing limit', function () {
      arrayList(1).length.should.be.equal(1)
    })

    it('without specifing limit', function () {
      ;[0, null, undefined, -1, '1'].forEach(function (limit) {
        arrayList(limit).length.should.be.equal(0)
      })
    })
  })

  describe('.push', function () {
    var arr = arrayList(1)

    it('push until full', function () {
      arr.push(1).size().should.be.equal(1)
    })

    it('throw an error when is full and try to push', function () {
      try {
        arr.push(1)
      } catch (err) {
        err.name.should.be.equal('ArrayListError')
        err.message.should.be.equal("ENOADD, It's full.")
      }
    })
  })

  it('.isFull', function () {
    var arr = arrayList(1)
    arr.isFull().should.be.false()
    arr.push(1).isFull().should.be.true()
  })

  it('.isEmpty', function () {
    var arr = arrayList(1)
    arr.isEmpty().should.be.true()
    arr.push(1).isEmpty().should.be.false()
  })

  it('.size', function () {
    var arr = arrayList()
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (n) {
      arr.push(n).size().should.be.equal(n)
    })
  })

  it('.clear', function () {
    var arr = arrayList()
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(arr.push)
    arr.size().should.not.be.equal(0)
    arr.clear()
    arr.size().should.be.equal(0)
  })

  describe('.get', function () {
    var range = [0, 1, 2, 3, 4]
    var arr = arrayList(5)
    range.forEach(arr.push)

    it('with index', function () {
      range.forEach(function (n) {
        arr.get(n).should.be.equal(n)
      })
    })

    it('without index', function () {
      arr.get().should.be.eql(range)
    })
  })

  it('.flush', function () {
    var range = [0, 1, 2, 3, 4]
    var arr = arrayList(5)
    range.forEach(arr.push)
    var data = arr.flush()

    data.should.be.eql(range)
    arr.size().should.be.equal(0)
    arr.isEmpty().should.be.true()
  })
})
