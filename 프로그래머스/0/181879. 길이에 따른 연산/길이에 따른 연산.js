function solution(num_list) {
    var answer = 0;
    num_list.length>=11?answer= num_list.reduce((a,c)=>a+c):answer= num_list.reduce((a,c)=>a*c);
    return answer;
}