function solution(numbers, target) {
  var answer = 0;

  dfs(0, 0);
  function dfs(x, value) {
    if (x < numbers.length) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
