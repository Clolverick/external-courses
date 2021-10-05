function evenUnevenNumbers(arr) {
  const resultArray = [0, 0, 0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== null) {
      if (arr[i] === 0) {
        resultArray[2] += 1;
      } else if (arr[i] % 2) {
        resultArray[1] += 1;
      } else {
        resultArray[0] += 1;
      }
    }
  }

  console.log('четных: ', resultArray[0]);
  console.log('нечетных: ', resultArray[1]);
  if (resultArray[2] !== 0) {
    console.log('нуль: ', resultArray[2]);
  }

  return resultArray;
}

module.exports = evenUnevenNumbers;
