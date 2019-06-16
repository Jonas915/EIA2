/* Aufgabe: 11
Name: Jonas Meujen
Matrikel: 260231
Datum: 12.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let fischArray = [];
    let bubbleArray = [];
    let fisch2Array = [];
    let fps = 30;
    let imageData;
    function init() {
        aquarium.canvas = document.getElementsByTagName("canvas")[0];
        aquarium.crc = aquarium.canvas.getContext("2d");
        wasser();
        imageData = aquarium.crc.getImageData(0, 0, 700, 600);
        //Fisch1
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = -5;
            let dy = 0;
            let fish = new aquarium.Fisch();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fischArray.push(fish);
            fish.draw();
        }
        //Fisch2
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = -3;
            let dy = 0;
            let fisch2 = new aquarium.Fisch2();
            fisch2.x = x;
            fisch2.y = y;
            fisch2.dx = dx;
            fisch2.dy = dy;
            fisch2Array.push(fisch2);
            fisch2.draw();
        }
        //Blubberblasen
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = 0;
            let dy = -3;
            let blase;
            blase = new aquarium.Bubble();
            blase.x = x;
            blase.y = y;
            blase.dx = dx;
            blase.dy = dy;
            bubbleArray.push(blase);
            blase.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < fisch2Array.length; i++) {
            fisch2Array[i].update();
        }
    }
    function wasser() {
        aquarium.crc.fillStyle = "#00bfff";
        aquarium.crc.fillRect(0, 0, 700, 600);
        aquarium.crc.fillStyle = "00bfff";
        let boden = new Path2D();
        boden.rect(0, 500, 700, 100);
        aquarium.crc.fillStyle = "#451007";
        aquarium.crc.fill(boden);
        aquarium.crc.stroke(boden);
        let pflanze = new Path2D();
        pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
        aquarium.crc.fillStyle = "#5FB404";
        aquarium.crc.fill(pflanze);
        aquarium.crc.stroke(pflanze);
        let pflanze2 = new Path2D();
        pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
        aquarium.crc.fillStyle = "#5FB404";
        aquarium.crc.fill(pflanze2);
        aquarium.crc.stroke(pflanze2);
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * aquarium.canvas.width;
        }
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=main.js.map