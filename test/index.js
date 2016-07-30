'use strict'

var should = require('should')
var arrayList = require('..')

describe('Array list', function () {
  describe('create', function () {
    it('specifing limit', function () {
      arrayList(1).length.should.be.equal(1)
    })

    it('without specifing limit', function () {
      [null, undefined, -1, '1'].forEach(function (limit) {
        arrayList(limit).length.should.be.equal(0)
      })
    })
  })
})
