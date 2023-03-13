// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let array = [];
  for await (const line of rl) {
    const numArray = line.split(' ').map(Number);
    let sum = numArray.reduce((prev, cur) => {
      return prev + cur;
    });
    array.push(sum);
  }
  console.log(Math.max(...array));

  process.exit();
})();
