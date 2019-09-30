module.exports = function multiply(first, second) {
  const firstNum = first.split('').reverse().map(e => Number(e));
  const secondNum = second.split('').reverse().map(e => Number(e));
  const stack = [];
  firstNum.map((num1, i1) => {
    let rest = 0;
    secondNum.map((num2, i2) => {
      if (stack[i1 + i2]) rest += stack[i1 + i2];
      let result = num1 * num2 + rest;
      if (result > 9) {
        let string = result.toString().split('');
        rest = Number(string[0]);
        result = Number(string[1]);
      } else rest = 0;
      stack[i1 + i2] = result;
    });
    if (rest) stack.push(rest);
  });

  return stack.reverse().join('');
}
