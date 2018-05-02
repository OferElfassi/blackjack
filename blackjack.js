// var number = Math.floor((Math.random() * 14) + 1);


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var result = 0 ;
var counter = 0 ;
var answer = "";

while (result < 21 ){

    if (answer === "no") break;
    else {
        var number = Math.floor((Math.random() * 14) + 1);
        result = number;
       // counter++;
    }
    console.log("your result is " + result);
}







function chackNdraw() {
    document.getElementById("playera").
    divEchoArea.innerHTML = txtUserName.value;

}