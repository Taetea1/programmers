function solution(str_list) {
    var answer = [];
    
    let index=str_list.findIndex((x)=>x==="l"||x==="r");
    if(index!==-1){
        if(str_list[index]==="l"){
            answer=str_list.slice(0,index);
        } else{
             answer=str_list.slice(index+1);
        }
    }
    
    return answer;
}