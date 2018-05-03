const players = require('players');
var playerA = new players("playera");
var playerB = new players("playerb");
var currentPlayer = {};

function start() {
    currentPlayer =  markUser(choosePlayer());
    document.getElementById("btnStart").disabled = true ;
    playerA.zeroResults();
    playerB.zeroResults();
    clearMarks();
}

function draw() {
    currentPlayer.roll ();
    updateResults();
    if (player.getResults() === 21 ){
        userLoose(player)
    }
    switchPlayer();
}

function switchPlayer(player) {
    if (player.getID() === playerA.getID()){
        markUser("b");
        currentPlayer = playerB;
    return;
    }
    markUser("a");
}


function userLoose(player){
    document.getElementById(player.getID()).setAttribute("bgcolor","#7f00d4");
    document.getElementById("btnStart").disabled = false ;
}

function updateResults() {
    document.getElementById("results_a").innerHTML  = playerA.getResults().toString();
    document.getElementById("results_b").innerHTML = playerB.getResults().toString();
}



function markUser(user) {
    if (user === "a"){
        document.getElementById("playera").setAttribute("bgcolor","#7fffd4");
        document.getElementById("playerb").setAttribute("bgcolor","white");
        return playerA;
    }
    else if (user === "b"){
        document.getElementById("playerb").setAttribute("bgcolor","#7fffd4");
        document.getElementById("playera").setAttribute("bgcolor","white");
        return playerB;
    }
}

function clearMarks() {
    document.getElementById("playerb").setAttribute("bgcolor","white");
    document.getElementById("playera").setAttribute("bgcolor","white");
    document.getElementById("results_a").innerText = "0";
    document.getElementById("results_b").innerText = "0";
}

function choosePlayer() {
    return Math.floor((Math.random() * 2) + 1) === 1 ? "a" : "b"
}