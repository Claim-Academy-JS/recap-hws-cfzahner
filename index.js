function tripler(num) {
  return num * 3;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

const tripled = tripler(5);

const mult = multiply(tripled, 12);

const div = divide(mult, 2);

const rem = remainder(div, 3);

console.log(rem);
