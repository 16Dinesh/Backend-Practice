let giveMeAJoke = require('give-me-a-joke');

giveMeAJoke.getRandomDadJoke (function(joke) {
     console.log(joke);
});

// // To get a random Chuck Norris joke
// giveMeAJoke.getRandomCNJoke (function(joke) {
//      console.log(joke);
// });

// To get a customized joke
let fn = "Gandu";
let ln = "Varsha";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
     console.log(joke);
});

// // To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
// var category = "blonde";
// giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
//      // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
//     //=> console.log(joke);
// });