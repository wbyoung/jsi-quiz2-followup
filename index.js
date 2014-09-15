/**
 * A function that takes a 'person' object with, the properties 'firstName'
 * and 'lastName,' and returns their full name.
 *
 *
 * @function getFullName
 * @param {Object} person - A 'person' object with properties 'firstName' and 'lastName.'
 * @return {String} The person's full name.
 *
 * @example
 *
 * var person1 = {
 *  firstName: "Blothrog",
 *  lastName: "The Impaler"
 * };
 *
 * getFullName(person1);
 *
 * //=> "Blothrog The Impaler"
 *
 *
 */
var getFullName = function(person) {
  var fullName = person.firstName + ' ' + person.lastName;
  return fullName;
};


/**
 * A function that takes an array of 'people' objects, and returns a new
 * array of their full names.
 *
 * @function getFullNameArray
 * @param {Array} arrayOfPeople - An array of 'person' objects with properties 'firstName' and 'lastName.'
 * @return {Array} An array of full names.
 *
 * @example
 *
 * var person1 = {
 *  firstName: "Blothrog",
 *  lastName: "The Impaler"
 * };
 * 
 * var person2 = {
 *  firstName: "Maktar",
 *  lastName: "The Infinite"
 * };
 *
 * var arrayOfPeople = [ person1, person2 ];
 *
 * getFullNameArray(arrayOfPeople);
 *
 * //=> [ 'Blothrog The Impaler', 'Maktar The Infinite' ]
 *
 */
var getFullNameArray = function(arrayOfPeople) {
  return arrayOfPeople.map(getFullName);
};

module.exports = {
  getFullName: getFullName,
  getFullNameArray: getFullNameArray
};

