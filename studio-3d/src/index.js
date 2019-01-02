import { Cube } from './3d/cube'
import { Display3d } from './3d/display3d';

/*
document.getElementById("rotationX").onchange = draw;
document.getElementById("rotationY").onchange = draw;
document.getElementById("rotationZ").onchange = draw;

document.getElementById("projX").onchange = draw;
document.getElementById("projY").onchange = draw;
document.getElementById("projZ").onchange = draw;
*/

//let height = (window.innerHeight - 32);
//let width = window.innerWidth - 32;

let height = 666;
let width = 1397;

//let height = 222;
//let width = 400;

var c = document.getElementById("gameArea");
c.height = height;
c.width = width;

let couch = new Cube(width / 2.0 + 440, 1010.0, 0.0, 100.0, 400.0, 10.0, "#FF0000");
let armRest1 = couch.inFrontBottomLeftCorner(100.0, 10.0, 100.0);
let armRest2 = couch.behindBottomLeftCorner(100.0, 10.0, 100.0);
let couchBack = couch.onRightFrontBottomCorner(10.0, 400.0, 100.0);
let seat1 = couch.onTopRightFrontCorner(120.0, 190.0, 50.0);
let seatBack1 = seat1.onTopRightFrontCorner(40.0, 190.0, 70.0);
let seat2 = couch.onTopRightEndCorner(120.0, 190.0, 50.0);
let seatBack2 = seat2.onTopRightFrontCorner(40.0, 190.0, 70.0);

let fullCouch = [couch, armRest1, armRest2, couchBack, seat1, seatBack1, seatBack2, seat2];

let bed = new Cube(width / 2.0 + 50, 1450.0, 0.0, 500.0, 500.0, 50.0, "#FF0000");
let pillow1 = bed.onTopRightFrontCorner(80.0, 175.0, 25.0).pushY(50.0);
let pillow2 = bed.onTopRightEndCorner(80.0, 175.0, 25.0).pushY(-50.0);

let fullBed = [bed, pillow1, pillow2];

let deskPart1 = new Cube(width / 2.0 - 550, 1450.0, 0.0, 80.0, 300.0, 120.0, "#FF0000");
let deskPart2 = deskPart1.onTopLeftFrontCorner(40.0, 300.0, 30.0);
let deskPart3 = deskPart1.onRightFrontTopCorner(60.0, 300.0, 10.0);

let fullDesk = [deskPart1, deskPart2, deskPart3];

let shelfFoot1 = deskPart1.inFrontBottomLeftCorner(10.0, 10.0, 10.0).pushY(-50.0);

let shelfFoot2 = deskPart1.inFrontBottomRightCorner(10.0, 10.0, 10.0).pushY(-50.0);
let shelfFoot3 = shelfFoot1.inFrontBottomLeftCorner(10.0, 10.0, 10.0).pushY(-150.0);
let shelfFoot4 = shelfFoot2.inFrontBottomLeftCorner(10.0, 10.0, 10.0).pushY(-150.0);

let shelfFoot = shelfFoot3;

let plank = shelfFoot3.onTopLeftFrontCorner(80.0, 170.0, 10.0);
let fullShelf = [shelfFoot1, shelfFoot2, shelfFoot3, shelfFoot4, plank];

for (let si = 0; si < 3; si++) {
    shelfFoot1 = plank.onTopLeftFrontCorner(10.0, 10.0, 40.0);
    shelfFoot2 = plank.onTopRightFrontCorner(10.0, 10.0, 40.0);
    shelfFoot3 = plank.onTopRightEndCorner(10.0, 10.0, 40.0);
    shelfFoot4 = plank.onTopLeftEndCorner(10.0, 10.0, 40.0);
    plank = shelfFoot1.onTopLeftFrontCorner(80.0, 170.0, 10.0);

    fullShelf = fullShelf.concat([shelfFoot1, shelfFoot2, shelfFoot3, shelfFoot4, plank]);
}

let table = shelfFoot.inFrontBottomLeftCorner(50.0, 300.0, 70.0).pushY(-50.0).pushX(20.0);
let tv = table.onTopLeftFrontCorner(10.0, 250.0, 110.0).pushX(25.0).pushY(25.0);

let studio = fullCouch.concat(fullBed).concat(fullDesk).concat(fullShelf).concat([table, tv]);



function draw() {
    let rotationX = document.getElementById("rotationX").value;
    let rotationY = document.getElementById("rotationY").value;
    let rotationZ = document.getElementById("rotationZ").value;

    let projX = document.getElementById("projX").value;
    let projY = document.getElementById("projY").value;
    let projZ = document.getElementById("projZ").value;

    let display3d = new Display3d(c, rotationX, rotationY, rotationZ, projX, projY, projZ);
    display3d.render(studio);
    setTimeout(draw, 40);
}

draw();
