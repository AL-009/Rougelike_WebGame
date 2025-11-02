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

function variableRollDice(variable){
    return Math.floor(Math.random() * variable) + 1;
}

const result = rollDice();

// main.js (type="module")
import { renderMainMenu } from './ui/MainMenu.js';
import { renderGameplay } from './ui/Gameplay.js';
import { renderSettings } from './ui/Settings.js';

const routes = {
    '#/': renderMainMenu,
    '#/play': renderGameplay,
    '#/settings': renderSettings
};

function router() {
    const view = routes[location.hash] || routes['#/'];
    view(document.getElementById('app'));
}
addEventListener('hashchange', router);
router();


export const CHARACTERS = [
    { id: 'knight', name: 'Knight', base: { hp: 1, atk: 4, dodge: .05, armor: 4 } },
    { id: 'rogue', name: 'Rogue', base: { hp: 1, atk: 3, dodge: .25, armor: 2 } },
    { id: 'mage', name: 'Mage', base: { hp: 1, atk: 5, dodge: .15, armor: 0 } },
    { id: 'ranger', name: 'Ranger', base: { hp: 1, atk: 4, dodge: .20, armor: 1 } }
]