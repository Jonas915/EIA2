/* Aufgabe: 11
Name: Jonas Meujen 
Matrikel: 260231
Datum: 12.06.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aquarium2 {
export class Fisch2 {
    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let fish2: Path2D = new Path2D();
        fish2.arc(this.x - 30, this.y + 30, 30, 0.75 * Math.PI, 1.5 * Math.PI);
        crc.fillStyle = "purple";
        crc.fill(fish2);
        crc.stroke(fish2);

        let flosse2: Path2D = new Path2D();
        flosse2.moveTo(this.x - 45, this.y + 20);
        flosse2.lineTo(this.x - 30, this.y + 60);
        flosse2.lineTo(this.x - 10, this.y + 10);
        crc.fillStyle = "purple";
        crc.fill(flosse2);
        crc.stroke(flosse2);

    }
    update(): void {
        this.move();
        this.draw();

    }
    move(): void {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            
            this.x = canvas.width;
            this.y = Math.random() * canvas.height ;
    }
}
}
}
