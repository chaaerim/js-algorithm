function solution(nums) {
    let answer=0
    const select=nums.length/2
    const table=new Set()
    for (i of nums){
        table.add(i)
    }
    if(table.size>=select){
        answer=select
    }else{
        answer=table.size
    }
    return answer;
}