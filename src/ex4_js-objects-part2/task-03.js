function deleteFirstAndLastSpace(str) {
  if (str[1] !== ' ') {
    return str.trim();
  }
  return str.substring(1, str.length - 1);
}

module.exports = deleteFirstAndLastSpace;
