/*
Aufgabe: 12
Name: Jonas Meujen
Matrikel: 260231
Datum: 29.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aquarium {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", futter);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let fishArray: Fisch[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        wasser();
        imageData = crc.getImageData(0, 0, 700, 600);
        for (let i: number = 0; i < 5; i++) {
            let fish: Fisch = new Fisch();
            fishArray.push(fish);
        }

        for (let i: number = 0; i < 5; i++) {
            let fish2: Fisch2 = new Fisch2();
            fishArray.push(fish2);
        }
        
        for (let i: number = 0; i < 20; i++) {
            let blase: Bubble = new Bubble();
            fishArray.push(blase);
        }
        update();
    }


    function futter(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        if (x < canvas.width && y < canvas.height) {
        let futter: Futter = new Futter(x, y);
        fishArray.push(futter);
        } 
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }

    function wasser(): void {
        crc.fillStyle = "#00bfff";
        crc.fillRect(0, 0, 700, 600);
        crc.fillStyle = "#00bfff";

        let boden: Path2D = new Path2D();
        boden.rect(0, 500, 700, 100);
        crc.fillStyle = "#451007";
        crc.fill(boden);
        crc.stroke(boden);

        let pflanze: Path2D = new Path2D();
        pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
        crc.fillStyle = "#5FB404";
        crc.fill(pflanze);
        crc.stroke(pflanze);


        let pflanze2: Path2D = new Path2D();
        pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
        crc.fillStyle = "#5FB404";
        crc.fill(pflanze2);
        crc.stroke(pflanze2);
        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * canvas.width;
        }
    }
}