function solution(picture, k) {
    var answer = [];
    picture.map((x)=>{
        const temp=[...x].map((y)=>y.repeat(k)).join("");
        for(let i=0;i<k;i++){
            answer.push(temp);   
        }
    })
    return answer;
}