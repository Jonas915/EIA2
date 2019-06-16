/* Aufgabe: 11
Name: Jonas Meujen
Matrikel: 260231
Datum: 12.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    class Fisch2 {
        draw() {
            let fish2 = new Path2D();
            fish2.arc(this.x - 30, this.y + 30, 30, 0.75 * Math.PI, 1.5 * Math.PI);
            aquarium.crc.fillStyle = "purple";
            aquarium.crc.fill(fish2);
            aquarium.crc.stroke(fish2);
            let flosse2 = new Path2D();
            flosse2.moveTo(this.x - 45, this.y + 20);
            flosse2.lineTo(this.x - 30, this.y + 60);
            flosse2.lineTo(this.x - 10, this.y + 10);
            aquarium.crc.fillStyle = "purple";
            aquarium.crc.fill(flosse2);
            aquarium.crc.stroke(flosse2);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > aquarium.canvas.width || this.x < 0 || this.y > aquarium.canvas.height || this.y < 0) {
                this.x = aquarium.canvas.width;
                this.y = Math.random() * aquarium.canvas.height;
            }
        }
    }
    aquarium.Fisch2 = Fisch2;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=fisch2.js.map