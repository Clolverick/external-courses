function analogFilter(array, callback) {
  const arrTemp = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback.call(this, array[i], i, array)) {
      arrTemp.push(array[i]);
    }
  }

  return arrTemp;
}

module.exports = analogFilter;
