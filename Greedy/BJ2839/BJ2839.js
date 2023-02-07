const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(filePath).toString().trim().split("\n");

solution(n)
function solution(n){
    const num=n.join('')
    let answer=0
    let fiveCount=parseInt(num/5)
    let threeCount=0
    while((fiveCount*5+threeCount*3)!==Number(num)){
    if((num-fiveCount*5)%3===0){
        threeCount=(num-fiveCount*5)/3
    }else if((num-fiveCount*5)%3!==0){
        fiveCount--
        threeCount++
    }
    if(fiveCount<0){
        answer=-1    
        console.log(answer)
        return;
    }
}
    answer=fiveCount+threeCount
    console.log(answer)
}