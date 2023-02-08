const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//큐
class Queue{
    constructor(){
        this.queue=[];
        this.front=0
        this.rear=0
    }
    enqueue(value){
        this.queue[this.rear++]=value;
    }
    dequeue(){
        const value=this.queue[this.front];
        delete this.queue[this.front]
        this.front+=1
        return value
    }
    isEmpty(){
        return this.rear===this.front
    }
}

solution(input)
function solution(input){
    // 데이터 구조 바꾸기
    let answer=0
    const rc=input.shift()
    const rcArray=rc.split(' ')
    let [r, c]=rcArray
    r=Number(r)
    c=Number(c)
    const lines=[]
    input.forEach((e)=>
        lines.push([...e])
    )
    
    const visited=Array.from(Array(Number(r)),()=>new Array(Number(c)).fill(false))
    //위 아래로 움직이기 
    const DR=[1, 0, -1, 0]

    //오른쪽 아래로 움직이기 
    const DC=[0, 1, 0, -1]

    visited[0][0]=true
    const queue=new Queue()
    queue.enqueue([0, 0, 0])

    while(!queue.isEmpty()){
        let src=queue.dequeue()
        for (let i =0; i<DR.length; i++){
            let nextR=src[0]+DR[i]
            let nextC=src[1]+DC[i]
            let nextDist=src[2]+1
            
            if (nextR < 0 || nextR >= r || nextC < 0 || nextC >= c || visited[nextR][nextC]===true || lines[nextR][nextC] =='0' ){
                continue;
            }
            
            if (nextR ===r-1 && nextC===c-1) {   
                // 최종 목적지를 발견한 경우
                    answer=nextDist+1
                  // 거리를 출력하고,
                    console.log(answer)
                    return
                }
            queue.enqueue([nextR, nextC, nextDist])
            visited[nextR][nextC]=true
        }
    }
    }