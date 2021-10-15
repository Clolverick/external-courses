function addWordByPosition(str, str2, position) {
  const tempStr = str.split(' ');

  tempStr.splice(position + 1, 0, str2);

  return tempStr.join(' ');
}

module.exports = addWordByPosition;
