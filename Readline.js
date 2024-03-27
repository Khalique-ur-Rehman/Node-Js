const readline = require("readline");

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("What is your name",function(answer){
    console.log('oh ,so your name is ${answer}');
    r1.close();
})