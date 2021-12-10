function analogSome(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback.call(this, array[i], i, array)) {
      return true;
    }
  }

  return false;
}

module.exports = analogSome;