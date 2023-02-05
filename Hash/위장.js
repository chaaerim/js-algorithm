//조합 코드
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두 다 push
    });
  
    return results; // 결과가 담긴 results를 return
  };
  
  //test case 1 runtime error
  function solution(clothes) {
      var answer = 0;
      let newClothes=[]
      clothes.map((el)=>{
          let array=[]
         array.push(el[1], el[0])
         newClothes.push(array)
      })
      let count={}
      let num={}
      for (i of newClothes){
          num[i[0]]=1
  
      }
      for(i of newClothes){
        count[i[0]]=num[i[0]]++;    
       }
      const objList=Object.keys(count)
      let objListArray=[];
      for (let i=1;i<=objList.length;i++){
          objListArray.push(...getCombinations(objList, i))
      }
      let totalCount=0
      for (i of objListArray){
          let total=1
          for (j of i){
              total*=count[j]
          }
          totalCount+=total
      }
      return totalCount;
  }

  // 정답
  function solution(clothes) {
    let totalCount=0
    let newClothes=[]
    clothes.map((el)=>{
        let array=[]
       array.push(el[1], el[0])
       newClothes.push(array)
    })
    let count={}
    let num={}
    for (i of newClothes){
        num[i[0]]=1

    }
    for(i of newClothes){
      count[i[0]]=num[i[0]]++;    
     }
    const objList=Object.keys(count)
    let total=1
    for (i of objList){
        total*=(count[i]+1)
    }
    totalCount=total-1
    return totalCount;
}