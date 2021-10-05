function checkSimilarityElementsOfArray(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }

  return true;
}

module.exports = checkSimilarityElementsOfArray;
