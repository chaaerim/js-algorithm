const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// M 왕 큼.. -> 이분탐색으로 안풀면 시간 초과 날 것..
solution(input);

function solution([n, ...list]) {
  const [num, treeLeng] = n.split(' ').map(Number);
  const treeList = list[0].split(' ').map(Number);

  let left = 1;
  let right = Math.max(...treeList);
  let answer = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // 톱이 나무크기 보다 크면 안잘림..!!!
    let totalLeng = treeList.reduce((acc, cur) => {
      if (cur - mid > 0) {
        return acc + (cur - mid);
      } else {
        return acc;
      }
    }, 0);
    if (totalLeng >= treeLeng) {
      if (answer < mid) {
        answer = mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
}
