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

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

function solution(maps) {
  var answer = 0;
  const x = maps[0].length;
  const y = maps.length;
  const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
  const queue = new Queue();
  //y, x, distance
  queue.enqueue([0, 0, 0]);
  while (!queue.isEmpty()) {
    let now = queue.dequeue();
    for (let i = 0; i < dx.length; i++) {
      let nextY = now[0] + dy[i];
      let nextX = now[1] + dx[i];
      let dis = now[2] + 1;
      if (
        nextY >= y ||
        nextY < 0 ||
        nextX >= x ||
        nextX < 0 ||
        maps[nextY][nextX] == 0 ||
        visited[nextY][nextX] == true
      ) {
        continue;
      }
      if (nextY === y - 1 && nextX === x - 1) {
        answer = dis + 1;
        return answer;
      }
      queue.enqueue([nextY, nextX, dis]);
      visited[nextY][nextX] = true;
    }
  }

  if (answer === 0) {
    answer = -1;
  }

  return answer;
}
