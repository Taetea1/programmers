function solution(str_list, ex) {
    var answer = '';
    str_list.map((x)=>{
        if(!x.includes(ex)) answer+=x
    });
    return answer;
}