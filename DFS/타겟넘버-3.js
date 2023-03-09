function solution(numbers, target) {
  var answer = 0;
  dfs(0, 0);

  function dfs(x, val) {
    // console.log(n+i, n-i)
    if (x < numbers.length) {
      dfs(x + 1, val + numbers[x]);
      dfs(x + 1, val - numbers[x]);
    } else {
      if (val === target) {
        answer++;
      }
    }
    return;
  }

  return answer;
}
