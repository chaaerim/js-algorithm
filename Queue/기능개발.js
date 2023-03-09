function solution(progresses, speeds) {
  let answer = [];
  let queue = [];
  for (let i = 0; i < progresses.length; i++) {
    let days = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(days);
  }
  console.log(queue);
  while (queue.length !== 0) {
    const array = [];
    let n = queue.shift();
    array.push(n);
    while (n >= queue[0]) {
      array.push(queue.shift());
    }
    answer.push(array.length);
  }
  return answer;
}
