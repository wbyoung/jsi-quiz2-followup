/**
 * @typedef {Object} Person
 * @property {String} firstName The person's first name.
 * @property {String} lastName The person's last name.
 */

/**
 * Calculate a person's full name.
 *
 * @param {Person} person A person.
 * @return {String} The person's full name.
 */
module.exports.fullName = function(person) {
  var mergeName = person.firstName + ' ' + person.lastName;
  console.log(mergeName);
  return mergeName
};

/**
 * Calculate many people's first names.
 *
 * @param {Array.<Person>} people The people.
 * @return {Array.<String>} The people's first names.
 */
module.exports.fullNames = function(people) {
  
  //for Each object in the array make a fullName and put it in the 
  //new array.

var newArray = [];

people.forEach(function(person){
  var mergeName = person.firstName + ' ' + person.lastName;
  newArray.push(mergeName);
})


return newArray



  // if you're having trouble here, slow down. don't just guess and throw code
  // in. one thing that is often helpful is to write out the steps of what you
  // want to do in comments, then take the comments one by one and translate
  // them into the required steps.
};
