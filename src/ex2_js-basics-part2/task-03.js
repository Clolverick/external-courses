function evenUnevenNumbers(arr) {
  const evenArray = [];
  const unevenArray = [];
  const zeroArray = [];
  const resultArray = [0, 0, 0];
  const arrayLength = (arr.length);

  for (let i = 0; i < arrayLength; i += 1) {
    if (arr[i] !== null) {
      if (arr[i] !== null) {
        if (arr[i] === 0) {
          zeroArray.push(0);
        } else if (arr[i] % 2) {
          unevenArray.push(arr[i]);
        } else {
          evenArray.push(arr[i]);
        }
      }
    }
  }

  // console.log('четных: ', evenArray.length);
  resultArray[0] = evenArray.length;
  // console.log('нечетных: ', unevenArray.length);
  resultArray[1] = unevenArray.length;
  if (zeroArray.length !== 0) {
    // console.log('нуль: ', zeroArray.length);
    resultArray[2] = zeroArray.length;
  }
  return resultArray;
}

module.exports = evenUnevenNumbers;
