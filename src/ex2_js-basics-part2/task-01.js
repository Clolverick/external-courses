function outputDataType(val) {
  const result = typeof (val);
  let dataType;
  const checkNaN = val;
  if (checkNaN !== val) {
    dataType = undefined;
  } else {
    switch (result) {
      case 'string':
        dataType = 'string';
        break;
      case 'number':
        dataType = 'number';
        break;
      default:
        dataType = undefined;
        break;
    }
  }
  return dataType;
}

// console.log(outputDataType());

module.exports = outputDataType;
