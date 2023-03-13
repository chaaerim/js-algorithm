// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let array = [];
  for await (const line of rl) {
    array.push(line);
  }

  solution(array);
  function solution([n, ...last]) {
    const [size, num] = n.split(' ');
    const numberArray = last.map(i => i.split(' ').map(Number));

    let maps = Array.from(Array(Number(size)), () => new Array(Number(size)).fill(0));
    //   console.log(maps, size, num);
    //   console.log(numberArray);

    let k = 0;
    for (let i = 1; i <= size; i++) {
      let j = 0;
      while (i == numberArray[k][0]) {
        maps[j][i - 1] = numberArray[k][1];
        j++;
        k++;
        if (k >= num) {
          break;
        }
      }
    }
    maps.reverse().map(i => console.log(i.join(' ') + ' '));
  }
  rl.close();

  process.exit();
})();
