function setCapitalLetterEveryWords(str) {
  if (!str) {
    return str;
  }

  let resultStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] === ' ' || i === 0) {
      resultStr += str[i].toUpperCase();
    } else {
      resultStr += str[i];
    }
  }

  return resultStr;
}

module.exports = setCapitalLetterEveryWords;
