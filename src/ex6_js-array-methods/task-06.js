function analogReduce(array, callback, initialValue) {
  let previousValue = initialValue;
  let beginWith = 0;

  if (initialValue === undefined) {
    previousValue = array[0];
    beginWith = 1;
  }

  for (let i = beginWith; i < array.length; i += 1) {
    previousValue = callback.call(this, previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = analogReduce;
