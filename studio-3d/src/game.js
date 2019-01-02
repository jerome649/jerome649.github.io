import { Tile } from './tile'

export class Game {

    constructor(width, height, player) {
        this.width = width;
        this.height = height;
        this.player = player;

        this.player.y = 0;
        this.player.x = 0;

        this.gravity = 1;

        this.tiles = [
            new Tile(1 * this.width / 6, 1 * this.height / 6, 300, 50),
            new Tile(2 * this.width / 4, 2 * this.height / 6, 300, 50),
        ]

    }

    update(leftDown, rightDown, upDown) {
        this.player.update(leftDown, rightDown, upDown);

        for (var tile of this.tiles) {
            tile.collide(this.player);
        }

        if (this.player.x < 0) {
            this.player.x = 0;
            this.player.speedX = 0;
        }

        if (this.player.y < 0) {
            this.player.y = 0;
            this.player.speedY = 0;
            this.player.jumping = false;
        }

        if (this.player.x > (this.width - this.player.size)) {
            this.player.x = this.width - this.player.size;
            this.player.speedX = 0;
        }

        if (this.player.y > (this.height - this.player.size)) {
            this.player.y = this.height - this.player.size;
            this.player.speedY = 0;
        }

        this.player.speedY -= this.gravity;
    }
    
}