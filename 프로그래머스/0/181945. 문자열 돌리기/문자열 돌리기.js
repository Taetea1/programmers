const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const rotation=()=>{
    for(let i=0;i<str.length;i++){
        const char=str[i];
        console.log(char);
    }
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    rotation(str); 
});