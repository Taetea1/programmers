function solution(myStr) {
    var answer = myStr.split(/[abc]/g).filter(x=>x);
    return answer.length===0?["EMPTY"]:answer;
}