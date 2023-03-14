const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let answerArray = [];

solution(input);

function countWhite(c, r, maps) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (maps[c + i][r + j] !== whiteBoard[i][j]) {
        count++;
      }
    }
  }
  return count;
}

function countBlack(c, r, maps) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (maps[c + i][r + j] !== blackBoard[i][j]) {
        count++;
      }
    }
  }
  return count;
}
function solution([n, ...maps]) {
  const [c, r] = n.split(' ').map(Number);
  console.log(maps);
  for (let i = 0; i <= c - 8; i++) {
    for (let j = 0; j <= r - 8; j++) {
      answerArray.push(countWhite(i, j, maps));
      answerArray.push(countBlack(i, j, maps));
    }
  }
  console.log(Math.min(...answerArray));
}
