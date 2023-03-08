const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
//큐
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

const dx = [1, -1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, 1, -1, 1, -1, -1, 1];

//입력값 처리
while (input.length > 0) {
  let [x, s, y] = input.shift();
  let maps = [];
  if (x === 0 && y === 0) {
    return;
  } else {
    for (let i = 0; i < y; i++) {
      maps.push(input.shift());
    }
    solution(x, y, maps);
  }
}

function solution(x, y, maps) {
  let answer = 0;
  const numberMap = [];
  maps.map(el => {
    el = el.replace(/\s/gi, '').split('');
    numberMap.push(el.map(i => Number(i)));
  });

  if (numberMap.length === 0) {
    return;
  }

  const visited = Array.from(Array(Number(y)), () => new Array(Number(x)).fill(false));

  for (let i = 0; i < Number(y); i++) {
    for (let j = 0; j < Number(x); j++) {
      if (!visited[i][j] && numberMap[i][j]) {
        answer++;
        bfs(j, i, visited, numberMap, x, y);
      }
    }
  }

  console.log(answer);
}

function bfs(curX, curY, visited, numberMap, x, y) {
  const queue = new Queue();
  queue.enqueue([curX, curY]);

  while (!queue.isEmpty()) {
    let cur = queue.dequeue();

    for (let i = 0; i < dx.length; i++) {
      let nextX = cur[0] + dx[i];
      let nextY = cur[1] + dy[i];
      if (nextX < 0 || nextX >= Number(x) || nextY < 0 || nextY >= Number(y) || visited[nextY][nextX] === true) {
        continue;
      }
      if (numberMap[nextY][nextX] === 1) {
        queue.enqueue([nextX, nextY]);
        visited[nextY][nextX] = true;
      }
    }
  }
}
