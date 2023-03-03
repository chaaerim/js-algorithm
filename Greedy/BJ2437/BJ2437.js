const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([n, ...last]) {
  let newArray = last[0]
    .split(' ')
    .map(i => Number(i))
    .sort((a, b) => b - a);
  let count = 1;
  let flag = true;
  while (flag) {
    let answer = count;
    for (let i = 0; i < newArray.length; i++) {
      if (answer >= newArray[i] && answer > 0) {
        answer -= newArray[i];
      }
      if (answer === 0) {
        count++;
        break;
      }
    }
    if (answer !== 0) {
      flag = false;
    }
  }
  console.log(count);
}
