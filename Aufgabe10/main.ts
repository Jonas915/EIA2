/* Aufgabe: 10
Name: Jonas Meujen 
Matrikel: 260231
Datum: 03.06.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

document.addEventListener("DOMContentLoaded", init);

let canvas: HTMLCanvasElement;
let crc: CanvasRenderingContext2D;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");

    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        wasser(x, y);

    }
    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        blase(x, y);
    }
    for (let i: number = 0; i < 4; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        fish2(x, y);
    }
    for (let i: number = 0; i < 7; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        fish1(x, y);
    }
    for (let i: number = 0; i < 15; i++) {
        let x: number = 15 * canvas.height;
        steine(x);
    }
}
function steine(_x: number): void {
    let steine: Path2D = new Path2D();
    steine.arc(_x + 30, 584, 15, 0, 360);
    crc.fillStyle = "grey";
    crc.fill(steine);
    crc.stroke(steine);
}


function wasser(_x: number, _y: number): void {
    let wasser: Path2D = new Path2D();
    wasser.rect(0, 0, 700, 700);
    crc.fillStyle = "lightblue";
    crc.fill(wasser);
    crc.stroke(wasser);

    let boden: Path2D = new Path2D();
    boden.rect(0, 500, 700, 100);
    crc.fillStyle = "#451007";
    crc.fill(boden);
    crc.stroke(boden);

    let pflanze: Path2D = new Path2D();
    pflanze.bezierCurveTo(500, 300, 400, 250, 400, 700);
    crc.fillStyle = "green";
    crc.fill(pflanze);
    crc.stroke(pflanze);

    let pflanze2: Path2D = new Path2D();
    pflanze2.bezierCurveTo(100, 300, 100, 150, 200, 700);
    crc.fillStyle = "darkgreen";
    crc.fill(pflanze2);
    crc.stroke(pflanze2);
}

function blase(_x: number, _y: number): void {
    let blase: Path2D = new Path2D();
    blase.arc(_x, _y - 50, 10, 0, 360);
    crc.fillStyle = "white";
    crc.fill(blase);
    crc.stroke(blase);

    let blase2: Path2D = new Path2D();
    blase2.arc(_x + 70, _y - 70, 20, 0, 360);
    crc.fillStyle = "white";
    crc.fill(blase2);
    crc.stroke(blase2);
}

function fish1(_x: number, _y: number): void {
    let fish1: Path2D = new Path2D();
    fish1.arc(_x + 200, _y - 200, 30, 0, 360);
    crc.fillStyle = "gold";
    crc.fill(fish1);
    crc.stroke(fish1);

    let flosse1: Path2D = new Path2D();
    flosse1.moveTo(_x + 210, _y - 200);
    flosse1.lineTo(_x + 250, _y - 170);
    flosse1.lineTo(_x + 250, _y - 230);
    crc.fillStyle = "gold";
    crc.fill(flosse1);
    crc.stroke(flosse1);
}

function fish2(_x: number, _y: number): void {
    let fish2: Path2D = new Path2D();
    fish2.arc(_x - 30, _y + 30, 40, 0.75 * Math.PI, 1.5 * Math.PI);
    crc.fillStyle = "purple";
    crc.fill(fish2);
    crc.stroke(fish2);

    let flosse2: Path2D = new Path2D();
    flosse2.moveTo(_x - 45, _y + 20);
    flosse2.lineTo(_x - 30, _y + 60);
    flosse2.lineTo(_x - 10, _y + 10);
    crc.fillStyle = "purple";
    crc.fill(flosse2);
    crc.stroke(flosse2);

    let auge2: Path2D = new Path2D();
    auge2.arc(_x - 50, _y + 10, 5, 0, 360);
    crc.fillStyle = "black";
    crc.fill(auge2);
    crc.stroke(auge2);

}
