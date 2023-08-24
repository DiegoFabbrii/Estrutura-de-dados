const Stack = require("./arrayStack");

function decimalToBinary(decimalValue) {
  const stack = new Stack();
  let rest;
  let number = decimalValue;
  let binaryString = "";

  while (number > 0) {
    rest = Math.floor(number % 2);
    stack.push(rest);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(1000));
