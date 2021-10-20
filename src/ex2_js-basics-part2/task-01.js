function outputDataType(val) {
  const result = typeof (val);

  // eslint-disable-next-line no-self-compare
  if (val !== val) {
    return undefined;
  }
  switch (result) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    default:
      return undefined;
  }
}

module.exports = outputDataType;
