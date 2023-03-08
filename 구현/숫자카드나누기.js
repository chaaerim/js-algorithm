function solution(arrayA, arrayB) {
  var answer = 0;
  const aDivisors = [];
  const bDivisors = [];
  const aNum = arrayA[0];
  const bNum = arrayB[0];
  let answerArr = [];

  for (let i = 1; i <= Math.sqrt(aNum); i++) {
    if (aNum % i === 0) {
      aDivisors.push(i);
      if (aNum / i != i) aDivisors.push(aNum / i);
    }
  }
  for (let i = 1; i <= Math.sqrt(bNum); i++) {
    if (bNum % i === 0) {
      bDivisors.push(i);
      if (bNum / i != i) bDivisors.push(bNum / i);
    }
  }

  let j = 0;
  while (j < aDivisors.length) {
    let aFlag = true;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] % aDivisors[j] !== 0 || arrayB[i] % aDivisors[j] === 0) {
        aFlag = false;
      }
    }
    if (aFlag === true) {
      answerArr.push(aDivisors[j]);
    }
    j++;
  }

  let k = 0;
  while (k < bDivisors.length) {
    let flag = true;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayB[i] % bDivisors[k] !== 0 || arrayA[i] % bDivisors[k] === 0) {
        flag = false;
      }
    }
    if (flag === true) {
      answerArr.push(bDivisors[k]);
    }
    k++;
  }

  //답구하기
  if (answerArr.length === 0) {
    answer = 0;
  } else {
    answer = Math.max(...answerArr);
  }

  return answer;
}
