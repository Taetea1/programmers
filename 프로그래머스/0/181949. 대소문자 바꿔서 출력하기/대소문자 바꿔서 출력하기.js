const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
const change=(str)=>{
    let result="";
    for(let i=0;i<str.length;i++){
        let char=str[i];
        
        if(char===char.toUpperCase()){
            result += str[i].toLowerCase();
        } else if(char===char.toLowerCase()){
            result += str[i].toUpperCase();
        }
    }
    console.log(result);
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    change(str);
});