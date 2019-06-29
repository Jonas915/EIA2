/*
Aufgabe: 12
Name: Jonas Meujen
Matrikel: 260231
Datum: 29.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aquarium {

    export class Futter extends Fisch {
        constructor(x: number , y: number) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 10;
        }

        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y - 1, 5, 0, 360);
            crc.fillStyle = "#451007";
            crc.fill(futter);
            crc.stroke(futter);
        }

        move(): void {
            this.y += this.dy;
            if (this.y >= canvas.height) {
                this.dy = 0;
            }   
    }
}
}