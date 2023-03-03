const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([n, ...last]) {
  let count = 0;
  const numberArray = last.map(i => Number(i));
  for (let i = 0; i < n; i++) {
    if (numberArray[i] === 0) {
      numberArray.splice(i - 1, 2);
      i -= 2;
    }
  }
  if (numberArray.length === 0) {
    console.log(count);
  } else {
    count = numberArray.reduce((ac, curr) => ac + curr);
    console.log(count);
  }
}
