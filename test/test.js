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
    var lesl = { firstName: 'Leslie', lastName: 'Strauss' };
    var andrea = {};
    andrea.firstName = 'Andrea';
    andrea.lastName = 'Moulding';
    var disciples = [lesl, andrea];
    expect(lib.getFullNames(disciples)).to.eql([
      'Leslie Strauss',
      'Andrea Moulding'
    ]);
  });

});

describe('getLast4OfSSNs()', function() {
  it('gets people\'s SSNs', function() {
    var people = [{
      firstName: 'John',
      lastName: 'Doe',
      ssn: '000-31-3912'
    },{
      firstName: 'Jane',
      lastName: 'Doe',
      ssn: '000-31-0000'
    }];
    var result = lib.getLast4OfSSNs(people);
    expect(result).to.eql(['3912', '0000']);
  });
});
