const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution([n, ...last]) {
  const [k, need] = n.split(' ').map(Number);
  const numLists = last.map(Number);
  const maxNumber = Math.max(...numLists);

  let ans = binarySearch(maxNumber, numLists, need);

  console.log(ans);
}

// 최솟값 넣으면 값을 완전히 못구하는 경우가 있기 때문에 최댓값을 넣어서 이진탐색을 해주어야함..!!!!
function binarySearch(maxNumber, numLists, need) {
  let left = 1;
  let right = maxNumber;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = numLists.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
    // console.log(sum, mid, left, right, maxNumber, numLists);
    if (sum >= need) {
      left = mid + 1;
    } else if (sum < need) {
      right = mid - 1;
    }
  }
  return right;
}
