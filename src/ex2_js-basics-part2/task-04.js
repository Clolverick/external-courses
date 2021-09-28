function checkSimilarityElementsOfArray(arr) {
  let storeSameness = true;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] !== arr[j]) {
        storeSameness = false;
        return (storeSameness);
        // eslint-disable-next-line no-unreachable
        break;
      }
    }
  }
  return (storeSameness);
}

// console.log(checkSimilarityElementsOfArray([1, 1, '1', 1]))

module.exports = checkSimilarityElementsOfArray;
