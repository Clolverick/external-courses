function analogEvery(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (!callback.call(this, array[i], i, array)) {
      return false;
    }
  }

  return true;
}

module.exports = analogEvery;
