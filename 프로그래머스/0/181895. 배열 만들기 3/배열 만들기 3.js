function solution(arr, intervals) {
    var answer = [];
    let [[a,b],[c,d]]=intervals;
    answer.push(...arr.slice(a,b+1));
    answer.push(...arr.slice(c,d+1));
    return answer;
}