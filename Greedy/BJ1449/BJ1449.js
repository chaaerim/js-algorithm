const fs = require('fs');
const [n, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");

solution(n, input)
function solution(n, input){
    const length=n.split(' ')[1]-1
    const arr=input.split(' ')
    let totalLength=0
    let count=1
    arr.sort((a, b)=>{
        return a-b
    })
    for(let i=0;i<arr.length-1;i++){
        totalLength+=arr[i+1]-arr[i]
        
        if(totalLength>length){
            totalLength=0
            count++
        }
    }
    console.log(count)
}