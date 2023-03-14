function solution(n, m, section) {
  var answer = 0;
  let lastIndex = 0;
  section.forEach(el => {
    if (el > lastIndex) {
      answer++;
      lastIndex = el + m - 1;
    }
  });

  return answer;
}
