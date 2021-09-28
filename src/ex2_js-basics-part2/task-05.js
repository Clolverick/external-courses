function maxPositiveNumberOfArray(arr) {
  let maxPositiveNumber = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      maxPositiveNumber = arr[i + 1];
    }
  }

  return maxPositiveNumber;
}

// let example = [1, 4, 3];
// maxPositiveNumberOfArray(example);

module.exports = maxPositiveNumberOfArray;
