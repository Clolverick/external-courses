function сalculator() {
  let result = 0;

  function add(summand = 0) {
    result += summand;
    return add;
  }

  function subtract(subtrahend = 0) {
    result -= subtrahend;
    return subtract;
  }

  function multiply(multiplicand = 0) {
    result *= multiplicand;
    return multiply;
  }

  function divide(divisor = 0) {
    result /= divisor;
    return divide;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

module.export = сalculator();
