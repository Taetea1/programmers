function solution(arr, queries) {
    let result=[];
    queries.forEach(([s,e,k])=>{
        let temp=arr.filter((v,i)=>(i>=s&&i<=e&&arr[i]>k)).sort((a,b)=>a-b)[0];
        
        result.push(temp?temp:-1);
    });
    return result;
}