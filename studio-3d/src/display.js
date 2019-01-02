
export class Display {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    renderPlayer(player) {
        this.context.fillStyle = "#FF0000";
        let y = this.canvas.height - player.y;
        this.context.fillRect(player.x, y - player.size, player.size, player.size);
    }

    renderTiles(tiles) {
        for (var tile of tiles) {
            this.context.fillStyle = "#0000FF";
            let y = this.canvas.height - tile.y;
            this.context.fillRect(tile.x, y - tile.sizeY, tile.sizeX, tile.sizeY);
        }
    }

    render(game) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "#D3D3D3";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.renderPlayer(game.player);
        this.renderTiles(game.tiles);
    }

}