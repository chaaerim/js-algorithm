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

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

const [n, ...last] = input;
const inputArr = [];
last.forEach(el => {
  inputArr.push(el.split(' '));
});

for (let i = 0; i < n; i++) {
  const [c, r, num] = inputArr.shift();
  let maps = Array.from(Array(Number(c)), () => new Array(Number(r)).fill(0));
  for (let j = 0; j < Number(num); j++) {
    const [y, x] = inputArr.shift();
    maps[Number(y)][Number(x)] = 1;
  }
  solution(Number(c), Number(r), maps);
}

function solution(c, r, maps) {
  let count = 0;
  let visited = Array.from(Array(Number(c)), () => new Array(Number(r)).fill(false));

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (!visited[i][j] && maps[i][j] === 1) {
        count++;
        bfs(i, j, maps, visited, c, r);
      }
    }
  }
  console.log(count);
}

function bfs(nowc, nowr, maps, visited, c, r) {
  const queue = new Queue();
  queue.enqueue([nowc, nowr]);
  while (!queue.isEmpty()) {
    let now = queue.dequeue();
    visited[now[0]][now[1]] = true;

    for (let i = 0; i < dr.length; i++) {
      let nextr = now[1] + dr[i];
      let nextc = now[0] + dc[i];
      if (nextr < 0 || nextr >= r || nextc < 0 || nextc >= c || visited[nextc][nextr] === true) {
        continue;
      }
      if (maps[nextc][nextr] === 1) {
        queue.enqueue([nextc, nextr]);
        visited[nextc][nextr] = true;
      }
    }
  }
}
