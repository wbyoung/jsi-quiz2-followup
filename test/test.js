var expect = require('chai').expect;
var lib = require('../index');

describe('getFullName()', function() {

  it('returns a person\'s full name', function() {
    var whitney = {
      firstName: 'Whitney',
      lastName: 'Young'
    };
    var result = lib.getFullName(whitney);
    expect(result).to.eql('Whitney Young');
  });

  it('returns another person\'s full name', function() {
    var result = lib.getFullName({
      firstName: 'Leslie',
      lastName: 'Strauss'
    });
    expect(result).to.eql('Leslie Strauss');
  });

});

describe('getFullNames()', function() {

  it ('returns all people\'s full names', function() {
    // follow the same procedure as above.
    // 1. create anything that needs to be sent as
    // an input/argument to the `fullName` function
    // here.
    // 2. pass the required info to the function and
    // get the result.
    // 3. make some sort of expectation based on the
    // result.
    var lesl = { firstName: 'Leslie', lastName: 'Strauss' };
    var andrea = {};
    andrea.firstName = 'Andrea';
    andrea.lastName = 'Moulding';
    var disciples = [lesl, andrea];
    disciples.push({
      firstName: 'Steve',
      lastName: 'Young'
    });
    expect(lib.getFullNames(disciples)).to.eql([
      'Leslie Strauss',
      'Andrea Moulding',
      'Steve Young'
    ]);
  });

});
