/* eslint-disable */
function deepClone(obj) {
  const clone = { ...obj };

  Object.keys(clone).forEach(
    (key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]),
  );

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone;
}

// Если честно, то код из гугла. самостоятельно выполнить это задание не получилось
// Но я к нему еще вернусь

// const a = { a1: 11, obj12: { a21: 21, obj22: { a31: 31, a32: 32 } } };
// const b = deepClone(a);
// console.log('a !== b: ' + (a !== b));
// console.log('a.obj12 !== b.obj12: ' + (a.obj12 !== b.obj12));
// console.log(a);
// console.log(b);

module.exports = deepClone;
