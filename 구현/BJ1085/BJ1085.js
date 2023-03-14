const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  const [nowR, nowC, r, c] = input[0].split(' ').map(Number);
  const answerArray = [];
  //row 최솟값
  if (nowR > r / 2) {
    answerArray.push(r - nowR);
  } else {
    answerArray.push(nowR);
  }

  //col 최솟값
  if (nowC > c / 2) {
    answerArray.push(c - nowC);
  } else {
    answerArray.push(nowC);
  }
  console.log(Math.min(...answerArray));
}
