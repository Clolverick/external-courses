function checkAndAddProperty(key, obj) {
  if (!(obj.hasOwnProperty(key))) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = 'new';
  }

  return obj;
}

module.exports = checkAndAddProperty;
