function viewingArray(arr) {
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i += 1) {
    console.log(arr[i]);
  }

  console.log(arrayLength);
}

module.exports = viewingArray;
