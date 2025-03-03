function solution(quiz) {
    var answer = [];
    quiz.map((x)=>{
        let temp = x.split(" ");

        if(temp[1]==="-"){
            Number(temp[0])-Number(temp[2])===Number(temp[4])?answer.push("O"):answer.push("X");
        } else if(temp[1]==="+"){
            Number(temp[0])+Number(temp[2])===Number(temp[4])?answer.push("O"):answer.push("X");
        }
    })
    return answer;
}