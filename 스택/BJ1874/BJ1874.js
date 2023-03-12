const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([n, ...numbers]) {
  const stack = [];
  const nums = [];
  let result = '';
  const numberArray = [];
  for (let i = 1; i <= Number(n); i++) {
    numberArray.push(i);
    nums.push(Number(numbers[i - 1]));
  }

  let count = 0;
  let k = 0;
  while (count < Number(n)) {
    if (stack[stack.length - 1] == nums[count]) {
      stack.pop();
      result += '-';
      count++;
      continue;
    }
    stack.push(numberArray[k]);
    result += '+';
    k++;
    if (k > Number(n)) {
      console.log('NO');
      return;
    }
  }

  for (const i of result) {
    console.log(i);
  }
}
