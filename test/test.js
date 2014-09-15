var expect = require('chai').expect;
var lib = require('../index');

    var name1 = {};
    var name2 = {};
    var name3 = {};
      name1.firstName = 'Andrea', name1.lastName = 'Moulding';
      name2.firstName = 'Bob', name2.lastName = 'Vanderbuilt'; 
      name3.firstName = 'Suzie', name3.lastName = 'Little';
      var nameArray = [name1, name2, name3];

describe('fullName()', function() {

  it('returns a person\'s full name', function() {
    var result = fullName(name1);
    expect(result).to.eql('Andrea Moulding')
    // 1. create anything that needs to be sent as
    // an input/argument to the `fullName` function
    // here.
    // 2. pass the required info to the function and
    // get the result.
    // 3. make some sort of expectation based on the
    // result.
  });

});

describe('fullNames()', function() {

  it ('returns all people\'s full names', function() {
    // follow the same procedure as above.
  });

});
