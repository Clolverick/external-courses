/* eslint-disable */
function deepClone(obj) {
  if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj) { return obj; }

  let copyObj = obj.constructor();

  if (obj instanceof Date) copyObj = new obj.constructor();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj.isActiveClone = null;
      copyObj[key] = deepClone(obj[key]);
      delete obj.isActiveClone;
    }
  }

  return copyObj;
}

module.exports = deepClone;
