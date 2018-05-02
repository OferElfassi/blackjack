
class ListItem {
    constructor(name ) {
        this.playerName = name ;
        this.results =0 ;
    }

    getTask() {
        return this.task;
    }

    getPriority() {
        return this.priority;
    }
}

module.exports = ListItem;







let Players = (function () { // IIFE
    // private property
    var privateDS = ['privateIte'];
    var playerName =""

    //constructor
    function Players(name) {
        playerName = name;
    }

    // public method
    Players.prototype.roll= function () {
        privateFn();
        return privateDS;
    };

    //private method
    function privateFn() {
        console.log('sdsdf');
    }

    return MyClass;
})();