const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// solution(input);

// function solution([n, ...last]) {
//   for (i of last) {
//     countWord(i);
//   }
// }

// function countWord(word) {
//   let newMap = new Map();
//   let n = 0;
//   for (let i = 0; i < word.length; i++) {
//     newMap.set(word[i], i);
//   }
//   if (newMap.size == word.length) {
//     count += 1;
//   } else {
//     for (let i = word.length - 1; i >= 0; i--) {
//       let a = newMap.get(word[i]);
//       if (a !== i) {
//         if (a - 1 == i) {
//           newMap.set(word[i], a - 1);
//         } else {
//           n++;
//         }
//       }
//     }
//     if (n === 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
solution(input);
function solution([n, ...last]) {
  let count = Number(n);
  if (n === 1) {
    console.log(count);
    return;
  }
  last.forEach(el => {
    let checkArray = '';
    checkArray += el[0];
    for (let i = 1; i < el.length; i++) {
      if (checkArray.includes(el[i]) && el[i] !== el[i - 1]) {
        count--;
        break;
      } else {
        checkArray += el[i];
      }
    }
  });

  console.log(count);
}
