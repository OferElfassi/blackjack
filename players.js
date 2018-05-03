module.exports = Players;

let Players = (function () {

    var results = 0;
     var playerID ="";

    function Players(name) {
        playerID = name;
    }

    Players.prototype.roll= function () {
        results += Math.floor((Math.random() * 14) + 1);
    };

    Players.prototype.getResults= function () {
        return results;
    };
    Players.prototype.zeroResults= function () {
        results = 0;
    };
    Players.prototype.getID= function () {
        return playerID ;
    };

    return Players;
})();