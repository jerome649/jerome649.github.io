export class Cube {

    constructor(x, y, z, sizeX, sizeY, sizeZ, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.sizeX = sizeX; 
        this.sizeY = sizeY;
        this.sizeZ = sizeZ;
        this.color = color;
    }

    isInCube(point) {
        let px = point[0][0];

        if (px < this.x || px > (this.x + this.sizeX)) {
            return false;
        }

        let py = point[1][0];

        if (py < this.y || px > (this.y + this.sizeY)) {
            return false;
        }

        let pz = point[2][0];

        if (pz < this.z || pz > (this.z + this.sizeZ)) {
            return false;
        }

        return true;
    }

    onTopRightFrontCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x + this.sizeX - sizeX, this.y, this.z + this.sizeZ, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    onTopLeftFrontCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x, this.y, this.z + this.sizeZ, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    onRightFrontTopCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x + this.sizeX, this.y, this.z + this.sizeZ - sizeZ, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    onRightFrontBottomCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x + this.sizeX, this.y, this.z, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    onTopRightEndCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x + this.sizeX - sizeX, this.y + this.sizeY - sizeY, this.z + this.sizeZ, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    onTopLeftEndCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x, this.y + this.sizeY - sizeY, this.z + this.sizeZ, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    inFrontBottomLeftCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x, this.y - sizeY, this.z, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    inFrontBottomRightCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x + this.sizeX - sizeX, this.y - sizeY, this.z, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    behindBottomLeftCorner(sizeX, sizeY, sizeZ) {
        let cube = new Cube(this.x, this.y + this.sizeY, this.z, sizeX, sizeY, sizeZ, this.color);
        return cube;
    }

    pushY(offsetY) {
        this.y += offsetY;
        return this;
    }

    pushX(offsetX) {
        this.x += offsetX;
        return this;
    }

    pointA() {
        return [
            [this.x], 
            [this.y], 
            [this.z]
        ];
    }

    pointB() {
        return [
            [this.x + this.sizeX], 
            [this.y], 
            [this.z]
        ];
    }

    pointC() {
        return [
            [this.x + this.sizeX], 
            [this.y + this.sizeY], 
            [this.z]
        ];
    }

    pointD() {
        return [
            [this.x], 
            [this.y + this.sizeY], 
            [this.z]
        ];
    }

    pointE() {
        return [
            [this.x], 
            [this.y], 
            [this.z + this.sizeZ]
        ];
    }

    pointF() {
        return [
            [this.x + this.sizeX], 
            [this.y], 
            [this.z + this.sizeZ]
        ];
    }

    pointG() {
        return [
            [this.x + this.sizeX], 
            [this.y + this.sizeY], 
            [this.z + this.sizeZ]
        ];
    }

    pointH() {
        return [
            [this.x], 
            [this.y + this.sizeY], 
            [this.z + this.sizeZ]
        ];
    }

    allPoints() {
        return [
            this.pointA(),
            this.pointB(),
            this.pointC(),
            this.pointD(),
            this.pointE(),
            this.pointF(),
            this.pointG(),
            this.pointH()
        ]
    }


}