function makeLowerCamelCase(str) {
  if (!str) {
    return str;
  }

  let resultStr = str[0].toLowerCase();

  for (let i = 1; i < str.length; i += 1) {
    if (str[i - 1] === ' ' || i === 0) {
      resultStr += str[i].toUpperCase();
    } else {
      resultStr += str[i].toLowerCase();
    }
  }

  resultStr = resultStr.replace(/\s/g, '');

  return resultStr;
}

module.exports = makeLowerCamelCase;
