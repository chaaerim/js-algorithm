const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([n, ...numbers]) {
  const stack = [];
  let result = '';
  let count = 0;
  let k = 1;
  while (count < Number(n)) {
    if (stack[stack.length - 1] == Number(numbers[count])) {
      stack.pop();
      result += '-';
      count++;
      continue;
    }
    stack.push(k);
    result += '+';
    k++;
    if (k > Number(n) + 1) {
      console.log('NO');
      return;
    }
  }

  console.log(result.split('').join('\n'));
}
