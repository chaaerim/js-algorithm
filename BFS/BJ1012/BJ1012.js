const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue{
    constructor(){
        this.queue=[]
        this.front=0
        this.rear=0
    }
    enqueue(value){
        this.queue[this.rear++]=value;
    }
    dequeue(){
        const value=this.queue[this.front];
        delete this.queue[this.front];
        this.front+=1
        return value
    }
    isEmpty(){
        return this.rear===this.front
    }
}

solution(input)
function solution(input){
    // 데이터 세팅 
    const testNum=Number(input.shift())
    let [c, r, n]=input.shift().split(' ')
    c=Number(c), r=Number(r), n=Number(n)

    let map=Array.from(Array(r), ()=>Array(c).fill(0))
    let visited=Array.from(Array(r), ()=>Array(c).fill(false))
    let count=0
    const inputArr=[]
    input.forEach((el)=>{
       inputArr.push(el.split(' '))
    })
    
    for(let i=0; i<inputArr.length; i++){
        let col=Number(inputArr[i][0])
        let row=Number(inputArr[i][1])
        map[row][col]=1
    }
    const queue=new Queue()
    queue.enqueue([0, 0])
    visited[0][0]=true
    //위 아래로 움직이기 
    const DR=[1, 0, -1, 0]
    //오른쪽 아래로 움직이기 
    const DC=[0, 1, 0, -1]
    while(!queue.isEmpty()){
        let now=queue.dequeue()
        for(let i=0; i<DR.length;i++){
            let nextR=now[0]+DR[i]
            let nextC=now[1]+DC[i]
            let nextnextR=nextR+DR[i]
            let nextnextC=nextC+DC[i]
            if(nextR<0 || nextC<0 || nextR>=r|| nextC>=c || visited[nextR][nextC]==true){
                continue;
            }
            if(map[nextR][nextC]===1){
                console.log(nextR, nextC)
                console.log(nextnextR, nextnextC)
                if(nextnextR<0 || nextnextR<0 || nextnextR>=r|| nextnextC>=c || visited[nextnextR][nextnextC]==true){
                    continue;
                }else if(map[nextnextR][nextnextC]===0){
                    count++
                }
            }

            queue.enqueue([nextR, nextC])
            visited[nextR][nextC]=true 
            }
           
        }



    console.log(input, testNum, c, r, n, map, count)
}