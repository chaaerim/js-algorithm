function solution(arr) {
  let answer = [];
  const stack = [];
  stack.push(arr[0]);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  for (let i = 1; i < arr.length; i++) {
    if (stack[stack.length - 1] === arr[i]) {
      continue;
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}
