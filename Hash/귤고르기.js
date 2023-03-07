function solution(k, tangerine) {
  var answer = 0;
  let n = k;
  let flag = false;
  const table = new Map();
  for (const i of tangerine) {
    if (table.has(i)) {
      let n = table.get(i);
      table.set(i, n + 1);
    } else {
      table.set(i, 1);
    }
  }

  //map sort
  const mapToArray = [...table];
  const sortedMap = new Map(mapToArray.sort((a, b) => b[1] - a[1]));

  for (const i of sortedMap) {
    let key = i[0];
    let val = i[1];
    if (val >= k) {
      return answer + 1;
    } else if (n > 0) {
      n = n - val;
      answer++;
    }
  }
  return answer;
}
