/*
Aufgabe: 12
Name: Jonas Meujen
Matrikel: 260231
Datum: 29.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", futter);
    let fishArray = [];
    let fps = 30;
    let imageData;
    function init() {
        aquarium.canvas = document.getElementsByTagName("canvas")[0];
        aquarium.crc = aquarium.canvas.getContext("2d");
        wasser();
        imageData = aquarium.crc.getImageData(0, 0, 700, 600);
        for (let i = 0; i < 5; i++) {
            let fish = new aquarium.Fisch();
            fishArray.push(fish);
        }
        for (let i = 0; i < 5; i++) {
            let fish2 = new aquarium.Fisch2();
            fishArray.push(fish2);
        }
        for (let i = 0; i < 20; i++) {
            let blase = new aquarium.Bubble();
            fishArray.push(blase);
        }
        update();
    }
    function futter(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        if (x < aquarium.canvas.width && y < aquarium.canvas.height) {
            let futter = new aquarium.Futter(x, y);
            fishArray.push(futter);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }
    function wasser() {
        aquarium.crc.fillStyle = "#00bfff";
        aquarium.crc.fillRect(0, 0, 700, 600);
        aquarium.crc.fillStyle = "#00bfff";
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