function startGame(){

}
/*
var startGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 100;
        this.canvas.height = 100;

    }
}

var mainGameArea = {
    canvas : document.createElement("mainCanvas"),
    start : function(){
        this.mainCanvas.width = 100;
        this.mainCanvas.height = 100;


    }
}
*/

function rollDice(){

    return Math.floor(Math.random() * 6) + 1;

}

const result = rollDice();