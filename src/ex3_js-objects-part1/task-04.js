function checkAndAddProperty(key, obj) {
  // eslint-disable-next-line prefer-object-spread
  const copyObj = Object.assign({}, obj);

  if (!(copyObj.hasOwnProperty(key))) {
    copyObj[key] = 'new';
  }

  return copyObj;
}

module.exports = checkAndAddProperty;
