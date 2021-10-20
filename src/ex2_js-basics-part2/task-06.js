function checkPrimeNumber(argNumber) {
  if (argNumber >= 0 && argNumber < 1000) {
    if (argNumber === 0 || argNumber === 1) {
      return "Не причисляется ни к простым, ни к составным числам";
    }

    for (let i = 2; i < argNumber / 2; i++) {
      if (argNumber % i) {
        return `Число ${argNumber} - составное число`;
      }
    }

    return `Число ${argNumber} - простое число`;
  }

  return "Данные неверны";
}

module.exports = checkPrimeNumber;
