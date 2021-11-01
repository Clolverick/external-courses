function searchPropsInPrototypeObject(keyObj, obj) {
  return Object.getPrototypeOf(obj)[keyObj];
}

module.exports = searchPropsInPrototypeObject;
