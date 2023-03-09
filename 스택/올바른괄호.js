function solution(s) {
  let answer;

  const stack = [];
  if (s[0] === ')') {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
