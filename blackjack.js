//const Player = require('./players');


let Players = (function () {

    this. results = 0;
    this. playerID ="";
    this.Again = false;

    function Players(name) {
        this.playerID = name;
    }

    Players.prototype.IswantToRoll= function () {
        return this.Again;
    };
    Players.prototype.rollAgain= function (state) {
        this.Again = state;
    };
    Players.prototype.roll= function () {
        this.results += Math.floor((Math.random() * 14) + 1);
    };

    Players.prototype.getResults= function () {
        return this.results;
    };
    Players.prototype.zeroResults= function () {
        this.results = 0;
    };
    Players.prototype.getID= function () {
        return this.playerID ;
    };

    return Players;
})();

//module.exports = Players;



let playerA = new Players("playera");
let playerB =  new Players("playerb");
let currentPlayer = {};




function start() {
    clearMarks();
    markUser(choosePlayer());
    document.getElementById("btnStart").disabled = true ;
    document.getElementById("btnDraw").disabled = false ;
    document.getElementById("btnStay").disabled = false ;
    playerA.zeroResults();
    playerB.zeroResults();

}

function draw() {
   if (currentPlayer.IswantToRoll()===false){
       switchPlayer()
   }

    currentPlayer.roll ();
    updateResults();
    if (currentPlayer.getResults() > 21 ){
        userLoose(currentPlayer);

    }
    else if (currentPlayer.getResults() === 21){
        userLoose(otherPlayer());
    }
    currentPlayer.rollAgain(false);
}

function stay() {
    currentPlayer.rollAgain(true);
}

function switchPlayer(player) {
    if (currentPlayer.getID() === playerA.getID()){
        markUser("b");
        currentPlayer = playerB;
    return;
    }
    markUser("a");
    currentPlayer = playerA
}
 function otherPlayer() {
     if (currentPlayer.getID() === playerA.getID()){
         return playerB;
     }
     return playerA;
 }


function userLoose(player){
    document.getElementById(player.getID()).setAttribute("bgcolor","#7f00d4");
    document.getElementById("btnStart").disabled = false ;
    document.getElementById("btnDraw").disabled = true ;
    document.getElementById("btnStay").disabled = true ;
}


function updateResults() {
    document.getElementById("results_a").innerHTML  = playerA.getResults().toString();
    document.getElementById("results_b").innerHTML = playerB.getResults().toString();
}



function markUser(user) {
    if (user === "a"){
        document.getElementById("playera").setAttribute("bgcolor","#7fffd4");
        document.getElementById("playerb").setAttribute("bgcolor","white");
        currentPlayer = playerA;
    }
    else if (user === "b"){
        document.getElementById("playerb").setAttribute("bgcolor","#7fffd4");
        document.getElementById("playera").setAttribute("bgcolor","white");
        currentPlayer = playerB;
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

function markWinner(player) {
    document.getElementById("playera").setAttribute("bgcolor","white");
}


