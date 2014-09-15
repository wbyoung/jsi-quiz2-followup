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
 * @param {Array.<Person>} people The people.
 * @return {Array.<String>} The people's full names.
 */
module.exports.getFullNames = function(people) {
  return people.map(getFullName);
};

  people.forEach(function(person) {
    var fullName = getFullName(person);
    fullNames.push(fullName);
  });

  return fullNames;
};
