function getRandom(min, max) {
  return Math.floor(min + Math.random() * (1 + max - min));
}

module.exports = getRandom;
