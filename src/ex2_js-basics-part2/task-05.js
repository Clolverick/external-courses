function maxPositiveNumberOfArray(arr) {
  let maxPositiveNumber = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (maxPositiveNumber < arr[i]) {
      maxPositiveNumber = arr[i];
    }
  }

  return maxPositiveNumber;
}

module.exports = maxPositiveNumberOfArray;
