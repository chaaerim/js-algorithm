// 시간 초과 
function solution(X, Y) {
    var answer = '';
    const newArray=[]
    const numArray=['0','1','2','3','4','5','6','7','8','9']
    let newX=X
    let newY=Y
    for (i of numArray){
        while(newX.indexOf(i)!==-1 && newY.indexOf(i)!==-1){
        if(newX.indexOf(i)!==-1 && newY.indexOf(i)!==-1){
            newX=newX.replace(i,'')
            newY=newY.replace(i,'')
            newArray.push(i)
             }
        }
    }
 
    newArray.sort().reverse()
    answer=newArray.join('')

    if(answer.replace(/0/gi,'').length===0){
        answer='0'
    }
  
    if(newArray.length==0){
        answer='-1'
    }
    return answer;
}

// 정답 코드
function solution(X, Y) {
    let answer = '';
    const number = Array.from(Array(10).fill(0))
    const twinNumber = []

    for(let i = 0; i < X.length; i++) {
        number[X[i]] += 1
    }

    for(let j = 0; j < Y.length; j++) {
        if(number[Y[j]] > 0) {
            twinNumber.push(Y[j])
            number[Y[j]] -= 1
        }
    }

    answer = twinNumber.length > 0 ? twinNumber.sort((a, b) => b - a).join("") : '-1'
    if(answer === '') answer = "-1"
    else if(Number(answer) === 0) answer = "0"

    return answer;
}
