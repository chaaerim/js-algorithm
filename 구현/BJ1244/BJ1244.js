const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution([lightNumber, light, studentNumber, ...last]) {
  let newLight = light.split(' ').map(i => Number(i));

  for (let i = 0; i < Number(studentNumber); i++) {
    let idx = Number(last[i][2]);
    if (last[i][0] === '1') {
      let idx = Number(last[i][2]);
      for (let j = idx; j <= Number(lightNumber); j += idx) {
        if (newLight[j - 1] === 1) {
          newLight[j - 1] = 0;
        } else {
          newLight[j - 1] = 1;
        }
      }
    } else {
      let left = idx - 2;
      let right = idx;
      if (newLight[left] !== newLight[right]) {
        if (newLight[idx - 1] === 1) {
          newLight[idx - 1] = 0;
        } else {
          newLight[idx - 1] = 1;
        }
      } else {
        while (newLight[left] === newLight[right]) {
          if (left <= 0 || right >= Number(lightNumber) - 1) {
            break;
          }
          left--;
          right++;
          if (newLight[left] !== newLight[right]) {
            left++;
            right--;
            break;
          }
        }
        for (let k = left; k <= right; k++) {
          if (newLight[k] === 1) {
            newLight[k] = 0;
          } else {
            newLight[k] = 1;
          }
        }
      }
    }
  }
  for (let i = 0; i < newLight.length; i += 20) {
    console.log(newLight.slice(i, i + 20).join(' '));
  }
}
