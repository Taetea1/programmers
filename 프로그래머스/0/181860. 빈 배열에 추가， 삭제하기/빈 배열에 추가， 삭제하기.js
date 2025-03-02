function solution(arr, flag) {
    var answer = [];
    flag.map((x,index)=>{
        if(x===true){
            for(let i=0;i<arr[index]*2;i++){
                answer.push(arr[index])
            }
        }else{
            for(let i=0;i<arr[index];i++){
                answer.pop();
            }
        }
    })
    return answer;
}