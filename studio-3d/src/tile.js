

export class Tile {

    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    collide(player) {
        if ((player.x + player.size) < this.x || player.x > (this.x + this.sizeX)) {
            return;
        }

        if (player.y > (this.y + this.sizeY) || (player.y + player.size) < this.y) {
            return;
        }

        /*
        console.log("collision");
        console.log("player x", player.x);
        console.log("tile x", this.x);
        console.log("player y", player.y);
        console.log("tile y", this.y);
        */

        // was on top
        if (player.previousY >= (this.y + this.sizeY)) {
            player.y = this.y + this.sizeY;
            player.speedY = 0;
            player.jumping = false;
        }

        // was on the left
        if ((player.previousX + player.size) <= this.x) {
            player.x = this.x - player.size;
            player.speedX = 0;
        }

        // was on the right
        if (player.previousX >= (this.x + this.sizeX)) {
            player.x = this.x + this.sizeX;
            player.speedX = 0;
        }

        // was on the bottom
        if ((player.previousY + player.size) <= this.y) {
            player.y = this.y - this.sizeY;
            player.speedY = 0;
        }

    }

}