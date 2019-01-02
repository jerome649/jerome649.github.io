import { Game } from './game'
import { Player } from './player'
import { Display } from './display';
import { testMatrix } from './3d/matrix';

testMatrix();

let height = (window.innerHeight - 32);
let width = window.innerWidth - 32;

var c = document.getElementById("gameArea");
c.height = height;
c.width = width;

let display = new Display(c);

let player = new Player(50);
let game = new Game(width, height, player);

let leftDown = false;
let rightDown = false;
let upDown = false;

function keyDownUp(event) {
    var down = (event.type == "keydown") ? true : false;

    switch(event.keyCode) {
      case 37: leftDown = down; break;
      case 38: upDown = down; break;
      case 39: rightDown = down;
    }

}

function draw() {
    game.update(leftDown, rightDown, upDown);

    if (upDown) {
        upDown = false;
    }

    display.render(game);
    
    setTimeout(draw, 40);
}

window.addEventListener("keydown", keyDownUp);
window.addEventListener("keyup",   keyDownUp);

draw();