const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.rear === this.front;
  }
}
const direcArray = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const getLeft = dir => {
  const result = dir - 1 < 0 ? 3 : dir - 1;
  return result;
};

solution(input);

function solution([num, location, ...maps]) {
  const [c, r] = num.split(' ').map(Number);
  let [cLocation, rLocation, direction] = location.split(' ').map(Number);
  const numberMap = [];
  maps.map(i => {
    numberMap.push(i.split(' ').map(Number));
  });
  console.log(c, r, numberMap);

  let count = 1;
  let visited = Array.from(Array(Number(c)), () => new Array(Number(r)).fill(false));

  //   console.log(visited);

  const queue = new Queue();
  queue.enqueue([cLocation, rLocation]);
  visited[cLocation][rLocation] = true;
  while (!queue.isEmpty()) {
    let now = queue.dequeue();
    let blockFlag = true;
    let nextLocation;

    for (let i = 0; i < direcArray.length; i++) {
      nextLocation = getLeft(direction);
      let nextC = now[0] + direcArray[nextLocation][0];
      let nextR = now[1] + direcArray[nextLocation][1];

      if (
        nextC < 0 ||
        nextC >= c ||
        nextR < 0 ||
        nextR >= r ||
        visited[nextC][nextR] ||
        numberMap[nextC][nextR] === 1
      ) {
        // blockFlag++;
        direction = nextLocation;
        continue;
      }
      if (numberMap[nextC][nextR] === 0) {
        count++;
        blockFlag = false;
        queue.enqueue([nextC, nextR]);
        visited[nextC][nextR] = true;
      }
      console.log(blockFlag);
    }
    console.log(blockFlag);

    if (blockFlag === true) {
      let newC = now[0] + direcArray[getLeft(getLeft(direction))][0];
      let newR = now[1] + direcArray[getLeft(getLeft(direction))][1];
      if (numberMap[newC][newR] === 1) {
        console.log('ccc', count);
        return;
      } else {
        queue.enqueue([newC, newR]);
      }
    }
  }
  console.log('c', count);
}
