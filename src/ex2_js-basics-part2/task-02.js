function viewingArray(arr) {
  const arrayLength = (arr.length);

  for (let i = 0; i < arrayLength; i += 1) {
    console.log(arr[i]);
  }

  console.log(arrayLength);
}

// let example = [1, 2, 4];
// viewingArray(example);

module.exports = viewingArray;
