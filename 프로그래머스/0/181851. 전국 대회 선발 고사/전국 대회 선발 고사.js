function solution(rank, attendance) {
    var answer = [];
    attendance.map((x,i)=>{
        if(x===true) answer.push(rank[i]);
    });
    answer.sort((a,b)=>a-b);
    return  10000 * rank.indexOf(answer[0]) + 100 * rank.indexOf(answer[1]) + rank.indexOf(answer[2]);
}