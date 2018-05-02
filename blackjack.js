

var result = 0 ;
var counter = 0 ;
var answer = "";

var aResults = 0;
var bResults = 0;




function start() {

}


function draw(player) {
    //document.getElementById("playera").setAttribute("bgcolor","#7000d4");

    aResults += Math.floor((Math.random() * 14) + 1)
}


function updateResults() {
    document.getElementById("results_a").innerText = aResults.toString();
    document.getElementById("results_b").innerText = bResults.toString();
}


function chackNdraw() {
    document.getElementById("playera").
    divEchoArea.innerHTML = txtUserName.value;

}
function markUser(user) {
    if (user === "a"){
        document.getElementById("playera").setAttribute("bgcolor","#7fffd4")
        document.getElementById("playerb").setAttribute("bgcolor","white")
    }
    else if (user === "b"){
        document.getElementById("playerb").setAttribute("bgcolor","#7fffd4")
        document.getElementById("playera").setAttribute("bgcolor","white")
    }
}

