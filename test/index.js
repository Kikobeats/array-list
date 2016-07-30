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

  describe('.add', function () {
    var arr = arrayList(1)

    it('add until full', function () {
      arr.add(1).size().should.be.equal(1)
    })

    it('throw an error when is full and try to add', function () {
      try {
        arr.add(1)
      } catch (err) {
        err.name.should.be.equal('ArrayListError')
        err.message.should.be.equal("ENOADD, It's full.")
      }
    })
  })

  it('.isFull', function () {
    var arr = arrayList(1)
    arr.isFull().should.be.false()
    arr.add(1).isFull().should.be.true()
  })

  it('.isEmpty', function () {
    var arr = arrayList(1)
    arr.isEmpty().should.be.true()
    arr.add(1).isEmpty().should.be.false()
  })

  it('.size', function () {
    var arr = arrayList()
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (n) {
      arr.add(n).size().should.be.equal(n)
    })
  })

  it('.clear', function () {
    var arr = arrayList()
    ;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(arr.add)
    arr.size().should.not.be.equal(0)
    arr.clear()
    arr.size().should.be.equal(0)
  })

  describe('.get', function () {
    var range = [0, 1, 2, 3, 4]
    var arr = arrayList(5)
    range.forEach(arr.add)

    it('with index', function () {
      range.forEach(function (n) {
        arr.get(n).should.be.equal(n)
      })
    })

    it('without index', function () {
      arr.get().should.be.eql(range)
    })
  })
})
