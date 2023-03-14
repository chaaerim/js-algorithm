const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([n, ...list]) {
  // 중복제거
  const table = new Set(list);
  const tableArray = Array.from(table);
  tableArray.sort((a, b) => {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return a[i] < b[i] ? -1 : 1;
        }
      }
    } else {
      return a.length - b.length;
    }
  });
  tableArray.map(i => console.log(i));
}
