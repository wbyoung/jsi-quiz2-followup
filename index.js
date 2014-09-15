/**
 * @typedef {Object} Person
 * @property {String} firstName The person's first name.
 * @property {String} lastName The person's last name.
 * @property {String} ssn The person's SSN.
 */

/**
 * Calculate a person's full name.
 *
 * @param {Person} person - A person.
 * @return {String} The person's full name.
 */
var getFullName =
module.exports.getFullName = function(person) {
  var names = [person.firstName, person.lastName];
  return names.join(' ');
  // this used to look like this, but someone decided
  // to use fancy array stuff above which just makes
  // this code so much more confusing! perhaps we should
  // change it back.
  // return person.firstName + ' ' + person.lastName;
};



/**
 * Calculate many people's full names.
 *
 * @param {Array.<Person>} people - The people.
 * @return {Array.<String>} The people's full names.
 */
module.exports.getFullNames = function(people) {
  return people.map(getFullName);
};

/**
 * Calculate many people's SSNs (last 4).
 *
 * @param {Array.<Person>} people - The people.
 * @return {Array.<String>} The people's SSNs.
 */
module.exports.getLast4OfSSNs = function(people) {
  return people.map(function(person) {
    return person.ssn.slice(-4);
  });
};
