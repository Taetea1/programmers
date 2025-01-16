function solution(my_string) {
    var answer = [];
    for(let i=0;i<my_string.length;i++){
        answer.push(my_string.substring(i,my_string.length+1));
    }
    answer.sort();
    return answer;
}