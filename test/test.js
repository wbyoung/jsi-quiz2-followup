var chai = require('chai');
var expect = chai.expect;

var functions = require('../index');
var getFullName = functions.getFullName;
var getFullNameArray = functions.getFullNameArray;

describe('Quiz functions', function() {
  it("takes a person object with the properties 'firstName' and 'lastName' and returns their full name", function() {
    var person1 = {
      firstName: "Blothrog",
      lastName: "The Impaler"
    };

    var fullName = "Blothrog The Impaler";

    expect(getFullName(person1)).to.eql(fullName);
  });

  it("takes an array of people and returns an array of their full names", function() {
    var person1 = {
      firstName: "Blothrog",
      lastName: "The Impaler"
    };
    var person2 = {
      firstName: "Maktar",
      lastName: "The Infinite"
    };

    var arrayOfPeople = [person1, person2];
    var person1FullName = "Blothrog The Impaler";
    var person2FullName = "Maktar The Infinite";
    var arrayOfFullNames = [person1FullName, person2FullName];

    expect(getFullNameArray(arrayOfPeople)).to.eql(arrayOfFullNames);
  });
});