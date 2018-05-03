
let Players = (function () {

    this. results = 0;
    this. playerID ="";

    function Players(name) {
        this.playerID = name;
    }

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

module.exports = Players;