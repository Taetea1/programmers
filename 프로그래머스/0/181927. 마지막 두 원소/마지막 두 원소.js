function solution(num_list) {
    var answer = [];
    let len=num_list.length;
    
    for(let i=0;i<num_list.length;i++){
        answer.push(num_list[i]);
    }
    
    if(num_list[len-1]>num_list[len-2]){
        answer.push(num_list[len-1]-num_list[len-2]);
    }else{
        answer.push(num_list[len-1]*2);
    }
    
    return answer;
}