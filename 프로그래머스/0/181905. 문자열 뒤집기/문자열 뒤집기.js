function solution(my_string, s, e) {
    var answer=[...my_string];
    let slicepart = my_string.substring(s,e+1).split("").reverse().join('');
    answer.splice(s,e-s+1,slicepart);

    return answer.join('');
}