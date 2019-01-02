import { matrixMult, matrixSub, matrixAdd, matrixMultWithFactor, matrixCopy, matrixEqual } from './matrix';


export class Display3d {

    constructor(canvas, rotationX, rotationY, rotationZ, projX, projY, projZ) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.angles = [0.0, 0.0, 0.0];
        this.angles = [rotationX * 2.0 * Math.PI, rotationY * 2.0 * Math.PI, rotationZ * 2.0 * Math.PI];

        this.rotationCenter = [
            [this.canvas.width / 2.0],
            [0.0],
            [this.canvas.height]
        ];
        this.projectionCenter = [
            [projX * this.canvas.width],
            [projY * 500.0],
            [projZ * this.canvas.height]
        ]
    }

    rotatePoint(p, invert) {
        let point = p;

        if (invert) {
            let dy = point[1][0];
            point = matrixCopy(point);
            point[1][0] = 2.0 * this.projectionCenter[1][0];
            point = matrixSub(point, this.projectionCenter);
            let deScalingFactor = dy / this.projectionCenter[1][0];
            point = matrixMultWithFactor(deScalingFactor, point);
        } else {
            point = matrixSub(p, this.rotationCenter);
        }

        let m = invert ? -1.0 : 1.0;
        let rAngles = [m * this.angles[0], m * this.angles[1], m * this.angles[2]];
        
        let rx = [
            [1.0, 0.0, 0.0],
            [0.0, Math.cos(rAngles[0]), -Math.sin(rAngles[0])],
            [0.0, Math.sin(rAngles[0]), Math.cos(rAngles[0])]
        ];
        let ry = [
            [Math.cos(rAngles[1]), 0.0, -Math.sin(rAngles[1])],
            [0.0, 1.0, 0.0],
            [Math.sin(rAngles[1]), 0.0, Math.cos(rAngles[1])]
        ];
        let rz = [
            [Math.cos(rAngles[2]), -Math.sin(rAngles[2]), 0.0],
            [Math.sin(rAngles[2]), Math.cos(rAngles[2]), 0.0],
            [0.0, 0.0, 1.0]
        ];

        let res = point;

        if (invert) {
            res = matrixMult(rz, res);
            res = matrixMult(ry, res);
            res = matrixMult(rx, res);
            res = matrixAdd(res, this.rotationCenter);
        } else {
            res = matrixMult(rx, res);
            res = matrixMult(ry, res);
            res = matrixMult(rz, res);
            let dy = res[1][0];
            let scalingFactor = this.projectionCenter[1][0] / dy;
            res = matrixMultWithFactor(scalingFactor, res);
            res = matrixAdd(res, this.projectionCenter);
            res[1][0] = dy;
        }

        return res;
    }

    renderCamera() {
        let y = this.canvas.height - this.rotationCenter[2];
        this.context.beginPath();
        this.context.arc(this.rotationCenter[0], y, 8, 0, 2 * Math.PI);
        this.context.stroke();
    }

    renderCube(cube) {
        this.context.fillStyle = cube.color;

        let labels = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let allPoints = cube.allPoints();

        let areHidden = [];
        let allRotatedPoints = [];

        for (let i = 0; i < allPoints.length; i++) {
            let point = allPoints[i];
            let rotatedPoint = this.rotatePoint(point, false);
            let bumpedRotatedPoint = matrixCopy(rotatedPoint);
            bumpedRotatedPoint[1][0] -= 1.0;
            bumpedRotatedPoint = this.rotatePoint(bumpedRotatedPoint, true);
            let hidden = cube.isInCube(bumpedRotatedPoint);
            areHidden.push(hidden);
            let checkRotatedPoint = this.rotatePoint(rotatedPoint, true);
            if (!matrixEqual(point, checkRotatedPoint)) {
                console.log("Rotation is wrong");
            }
            allRotatedPoints.push(rotatedPoint);
            //this.context.beginPath();
            //let y = this.canvas.height - rotatedPoint[2];
            //this.context.arc(rotatedPoint[0], y, 8, 0, 2 * Math.PI);
            //this.context.stroke();
            //this.context.font = "15px Arial";
            //this.context.fillText(labels[i], rotatedPoint[0] - 4, y + 4);
        }

        this.segments = [
            [0, 1],// A B
            [0, 3],// A D
            [0, 4],// A E
            [1, 2],// B C
            [1, 5],// B F
            [2, 3],// C D
            [2, 6],// C G
            [3, 7],// D H
            [4, 5],// E F
            [4, 7],// E H
            [5, 6],// F G
            [6, 7] // G H
        ];

        for (let i = 0; i < this.segments.length; i++) {
            let couple = this.segments[i];
            let dash = areHidden[couple[0]] || areHidden[couple[1]];
            this.drawLine(allRotatedPoints[couple[0]], allRotatedPoints[couple[1]], dash);
        }

    }

    drawLine(p1, p2, dash) {
        if (dash) {
            this.context.setLineDash([5, 3]);
        } else {
            this.context.setLineDash([]);
        }
        this.context.beginPath();
        this.context.moveTo(p1[0][0], this.canvas.height - p1[2][0]);
        this.context.lineTo(p2[0][0], this.canvas.height - p2[2][0]);
        this.context.stroke();
    }

    render(cubes) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "#D3D3D3";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < cubes.length; i++){
            this.renderCube(cubes[i]);
        }
        //this.renderCamera();
    }

}