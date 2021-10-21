function analogSlice(array, begin, end) {
  let beginClone;
  let endClone;
  const arrClone = [];

  if ((isNaN(begin)) || (array.length < -begin)) {
    beginClone = 0;
  } else if (begin >= 0) {
    beginClone = begin;
  } else {
    beginClone = begin + array.length;
  }

  if ((isNaN(end)) || (array.length < -end) || (end >= array.length)) {
    endClone = array.length;
  } else if ((end >= 0) && (end <= array.length)) {
    endClone = end;
  } else {
    endClone = end + array.length;
  }

  console.log(end, endClone);

  for (let i = beginClone; i < endClone; i += 1) {
    arrClone.push(array[i]);
  }

  return arrClone;
}

module.exports = analogSlice;
