/* Aufgabe: 11
Name: Jonas Meujen 
Matrikel: 260231
Datum: 12.06.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium {

    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let fischArray: Fisch[] = [];
    let bubbleArray: Bubble[] = [];
    let fisch2Array: Fisch2[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        wasser();
        imageData = crc.getImageData(0, 0, 700, 600);

//Fisch1
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = - 5;
            let dy: number = 0;
            let fish: Fisch = new Fisch();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fischArray.push(fish);
            fish.draw();

        }
//Fisch2
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = -3;
            let dy: number = 0;
            let fisch2: Fisch2 = new Fisch2();
            fisch2.x = x;
            fisch2.y = y;
            fisch2.dx = dx;
            fisch2.dy = dy;
            fisch2Array.push(fisch2);
            fisch2.draw();

        }
//Blubberblasen
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = 0;
            let dy: number = -3;
            let blase: Bubble;
            blase = new Bubble();
            blase.x = x;
            blase.y = y;
            blase.dx = dx;
            blase.dy = dy;
            bubbleArray.push(blase);
            blase.draw();
        }
        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }
        for (let i: number = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i: number = 0; i < fisch2Array.length; i++) {
            fisch2Array[i].update();
        }
    }

    function wasser(): void {

        crc.fillStyle = "#00bfff";
        crc.fillRect(0, 0, 700, 600);
        crc.fillStyle = "00bfff";

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
        }}