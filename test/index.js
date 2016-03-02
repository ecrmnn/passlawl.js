'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const passlawl = require('../src');

describe('Passlawl.js test', function () {
  it('responds to get()', function () {
    expect(passlawl).to.respondTo('get');
  });

  it('responds to getArray()', function () {
    expect(passlawl).to.respondTo('getArray');
  });

  it('returns a string when calling get()', function () {
    expect(passlawl.get()).to.be.a('string');
  });

  it('returns an array when calling getArray()', function () {
    expect(passlawl.getArray()).is.an('array');
  });

  it('returned array contains 4 words', function () {
    expect(passlawl.getArray()).to.have.length(4);
  });

  it('returns different results when called', function () {
    const call1 = passlawl.get();
    const call2 = passlawl.get();
    expect(call1).to.not.equal(call2);
  });

  it('returns English as default locale', function () {
    expect(passlawl.getLocale()).to.equal('en');
  });

  it('can change locales', function () {
    passlawl.locale('no');
    expect(passlawl.getLocale()).to.equal('no');
  });
});