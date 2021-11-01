function analogMap(array, callback) {
  const arrTemp = [];

  for (let i = 0; i < array.length; i += 1) {
    arrTemp.push(callback.call(this, array[i], i, array));
  }

  return arrTemp;
}

module.exports = analogMap;
