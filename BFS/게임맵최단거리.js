class Queue{
    constructor(){
        this.queue=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(value){
        this.queue[this.rear++]=value;
    }
    dequeue(){
        const value=this.queue[this.front];
        delete this.queue[this.front];
        this.front+=1;
        return value;
    }
    isEmpty(){
        return this.rear===this.front
    }
}
//위 아래로 움직이기 
const DR=[1, 0, -1, 0]

//오른쪽 아래로 움직이기 
const DC=[0, 1, 0, -1]

function solution(maps) {
    let answer = 0;
    //방문 체크
    const visited=Array.from(Array(maps.length), ()=>Array(maps[0].length).fill(false))
    
    visited[0][0]=true
    const queue=new Queue()
    queue.enqueue([0,0,0]);

    while(!queue.isEmpty()){
        let src=queue.dequeue()
        for (let i =0; i<DR.length; i++){
            let nextR=src[0]+DR[i]
            let nextC=src[1]+DC[i]
            let nextDist=src[2]+1
            
            if (nextR < 0 || nextR >= maps.length || nextC < 0 || nextC >= maps[0].length || visited[nextR][nextC]===true || maps[nextR][nextC] ==0 ){
                continue;
            }
            
            if (nextR ===maps.length-1 && nextC===maps[0].length-1) {   
                // 최종 목적지를 발견한 경우
                    answer=nextDist   // 거리를 출력하고,
                    return answer+1; // 그대로 종료하면 됨.
                }
            queue.enqueue([nextR, nextC, nextDist])
            visited[nextR][nextC]=true
        }
    }

 
    
    if (visited[maps.length-1][maps[0].length-1]===false){
        answer=-1
    }
  
    return answer;
}