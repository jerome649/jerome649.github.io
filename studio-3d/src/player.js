export class Player {

    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.size = size;
        this.jumping = true;
    }

    update(leftDown, rightDown, upDown) {
        this.previousX = this.x;
        this.previousY = this.y;

        if (leftDown) {
            this.speedX = -30;
        }

        if (rightDown) {
            this.speedX = 30;
        }

        if (!leftDown && !rightDown) {
            this.speedX = this.speedX * 0.0;
        }

        if (upDown && !this.jumping) {
            this.jumping = true;
            this.speedY = 20;
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }

}