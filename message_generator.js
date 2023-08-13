const adjectives = ['early', 'smelly', 'ugly', 'dead', 'happy'];
const animals = ['bird', 'cow', 'spider', 'elephant', 'tardigrade'];
const nouns = ['worm', 'shaft', 'cash', 'elixer of life', 'road-kill'];

const selectRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const blank1 = selectRandomItem(adjectives);
const blank2 = selectRandomItem(animals);
const blank3 = selectRandomItem(nouns);

console.log(`The ${blank1} ${blank2} gets the ${blank3}`);