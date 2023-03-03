const fs = require('fs');
const [n, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");

solution(input)
function solution(input){
    const arr=input.split(' ')
    console.log(arr)
    arr.sort((a, b)=>{
    return a-b})
    let sum=0
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<=i;j++){
            sum+=Number(arr[j])
        }
    }
    console.log(sum)
}

// 더 간단히 풀기
// n은 개수 
//앞에서 부터 순서대로 더해지므로 제일 앞에 있는 수는 개수 만큼, 그 이후에 있는 것들은 인덱스를 뺀만큼 더해짐. 

const answer = input
  .split(" ")
  .sort((a, b) => a - b)
  .reduce((acc, cur, i) => 
  acc + cur * (n - i), 0);

console.log('!!!', answer);