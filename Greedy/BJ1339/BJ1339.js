// 해시를 이용한 그리디

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input)
function solution (input){
    const length=input.shift()
    const table =new Map()
   
    // 자리수 계산해서 map에 넣기 
    for (let i=0;i<length;i++){
        for (let j=0 ;j<input[i].length;j++){
            let alpha=input[i][j]
            let alphaNum=10**(input[i].length-j-1)
            if(table.has(alpha)){
                table.set(alpha, table.get(alpha)+alphaNum)
            }
            else{table.set(alpha, alphaNum)
            }
        }
    }
    // map 정렬하기 
    const mapToArray=[...table]
    mapToArray.sort((a, b)=>{
        return b[1]-a[1]
    })
    const sortedMap=new Map(mapToArray)
    let num=9
    sortedMap.forEach((val, key)=>sortedMap.set(key, num--))

    // 합 구하기
    let sum=0
    for (let i=0;i<length;i++){
        for (let j=0 ;j<input[i].length;j++){
            let alpha=input[i][j]
            sum+=10**(input[i].length-j-1)*sortedMap.get(alpha)
        }
    }

    console.log(sum)
}