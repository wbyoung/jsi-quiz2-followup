/** Question: What are callback functions?
 *
 * Answer: A callback is a function that is passed to another
 * function as an argument.
 * This is useful when we have a function whose processes
 * take a while to complete. Callbacks allow us to ensure that the
 * faster functions do not run until after the slow function is complete.
 *
 */

// An example of a callback function.

var arkLoader = function(animal1, animal2, cb) {
  console.log("Looks like it's starting to rain pretty hard!");
  setTimeout(function() {
    console.log("Loading " + animal1);
  }, 1000);
  setTimeout(function() {
    console.log("Loading " + animal2);
    cb(); // Callback is faster, but always happens after the slower function.
  }, 3000);
};

arkLoader('giraffe', 'elephant', function() {
  console.log("All animals loaded up. Bring on the flood!");
});