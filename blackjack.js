//const Player = require('./players');



Player = (function () {


    function Players(ID) {
        this. results = 0;
        this. playerID = ID;
        this.Again =  false;
    }




    Players.prototype.IswantToRoll = function () {
        return this.Again;
    };
    Players.prototype.rollAgain = function (state) {
        this.Again = state;
    };
    Players.prototype.roll = function () {
        this.results += Math.floor((Math.random() * 14) + 1);
    };

    Players.prototype.getResults = function () {
        return this.results;
    };
    Players.prototype.zeroResults = function () {
        this.results = 0;
    };
    Players.prototype.getID = function () {
        return this.playerID;
    };

    return Players;
})();

//module.exports = Players;



let playerA = new Player("playera");
let playerB =  new Player("playerb");
let currentPlayer = {};


function init() {
    disableBtn(true,true,false,true);

}


function start() {
    currentPlayer = choosePlayer();
    restart();
}


function restart() {
    clearMarks();
    playerA.zeroResults();
    playerB.zeroResults();
    disableBtn(false,false,true,true);
    markUser(currentPlayer,"green");
}

function choosePlayer() {
    return Math.floor((Math.random() * 2) + 1) === 1 ? playerA : playerB;
}

function draw() {
    currentPlayer.roll ();
    updateResults();
    disableBtn(true,false,true,false);// draw , stay , start ,next turn
    checkResults();

}

function checkResults() {
    if (currentPlayer.getResults() > 21 ){
        userLoose(currentPlayer);
        return;
    }
    else if (currentPlayer.getResults() === 21){
        userLoose(otherPlayer());
        return;
    }
}


function stay() {
    disableBtn(false,true,true,true);
}

function nextTurn() {
    switchPlayer();
    disableBtn(false,true,true,true);
}

function switchPlayer() {
    let other = otherPlayer();
    markUser(other,"green");
    markUser(currentPlayer,"white")
    currentPlayer = other ;
}

 function otherPlayer() {
     return currentPlayer.getID() === playerA.getID() ? playerB : playerA;
 }

function userLoose(player){
    markUser(player,"red");
    disableBtn (true,true,false,true); // draw , stay , start ,next turn
}








function updateResults() {
    document.getElementById("results_a").innerHTML  = playerA.getResults().toString();
    document.getElementById("results_b").innerHTML = playerB.getResults().toString();
}

function markUser(user ,color) {
    document.getElementById(user.getID()).setAttribute("bgcolor",color);
}

function clearMarks() {
    markUser(playerA,"white");
    markUser(playerB,"white");
    document.getElementById("results_a").innerText = "0";
    document.getElementById("results_b").innerText = "0";
}

function disableBtn (btnDraw,btnStay,btnStart,btnNextTurn){
    document.getElementById("btnStart").disabled = btnStart ;
    document.getElementById("btnDraw").disabled = btnDraw ;
    document.getElementById("btnStay").disabled = btnStay ;
    document.getElementById("btnNextTurn").disabled = btnNextTurn ;

}
