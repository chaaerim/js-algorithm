function solution(priorities, location) {
  const arr = [];
  const answer = [];
  priorities.map((val, idx) => {
    arr.push([idx, val]);
  });
  let flag = true;
  while (flag) {
    let n = arr.shift();
    // console.log(n)
    let isBig = true;

    for (let i = 0; i < arr.length; i++) {
      if (n[1] < arr[i][1]) {
        isBig = false;
      }
    }
    if (!isBig) {
      arr.push(n);
    } else {
      answer.push(n);
    }

    if (arr.length === 0) {
      flag = false;
    }
  }
  const index = answer.findIndex(i => i[0] === location);
  // console.log(answer, index+1)
  return index + 1;
}
