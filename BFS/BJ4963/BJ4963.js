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

const dr = [1, -1, 0, 0, 1, -1, 1, -1];
const dc = [0, 0, 1, -1, 1, -1, -1, 1];

//입력값 처리 -> 하쒸 배열로 만들고 처리해라 .. 문자열 조심....!!!!!
while (input.length > 0) {
  let [r, c] = input.shift().split(' ');
  const maps = [];

  for (let i = 0; i < c; i++) {
    maps.push(input.shift());
  }

  solution(Number(r), Number(c), maps);
}

function solution(r, c, maps) {
  if (r === 0 && c === 0) {
    return;
  }
  const numberMap = [];
  let count = 0;
  let visited = Array.from(Array(Number(c)), () => new Array(Number(r)).fill(false));

  maps.map(el => {
    el = el.replace(/\s/gi, '').split('');
    numberMap.push(el.map(i => Number(i)));
  });

  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      if (numberMap[i][j] === 1 && !visited[i][j]) {
        count++;
        // visited[i][j] = true;
        bfs(i, j, visited, numberMap, c, r);
      }
    }
  }

  console.log(count);
}

function bfs(nowC, nowR, visited, numberMap, c, r) {
  const queue = new Queue();
  //c, r
  queue.enqueue([nowC, nowR]);
  while (!queue.isEmpty()) {
    let now = queue.dequeue();
    visited[now[0]][now[1]] = true;
    for (let i = 0; i < dc.length; i++) {
      let nextC = now[0] + dc[i];
      let nextR = now[1] + dr[i];
      if (nextC < 0 || nextC >= c || nextR < 0 || nextR >= r || visited[nextC][nextR]) {
        continue;
      }
      if (numberMap[nextC][nextR] === 1) {
        queue.enqueue([nextC, nextR]);
        visited[nextC][nextR] = true;
      }
    }
  }
}
