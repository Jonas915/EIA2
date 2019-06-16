/* Aufgabe: 11
Name: Jonas Meujen 
Matrikel: 260231
Datum: 12.06.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium {

export class Bubble {
    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let blase: Path2D = new Path2D();
        blase.arc(this.x, this.y - 50, 10, 0, 360);
        crc.strokeStyle = "#ffffff";
        crc.stroke(blase);

        let blase2: Path2D = new Path2D();
        blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
        crc.strokeStyle = "#ffffff";
        crc.stroke(blase2);
    }
    update(): void {
        this.move();
        this.draw();

    }
    move(): void {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
           
            this.x = canvas.width * Math.random();
            this.y = canvas.height ;
    }
}
}
}
