function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const check = [0];

  for (let i = 1; i < numbers.length; i++) {
    while (check.length && numbers[check[check.length - 1]] < numbers[i]) {
      answer[check.pop()] = numbers[i];
    }
    check.push(i);
  }
  return answer;
}
