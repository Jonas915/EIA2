/*
Aufgabe: 12
Name: Jonas Meujen
Matrikel: 260231
Datum: 29.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aquarium;
(function (aquarium) {
    class Fisch {
        constructor() {
            this.x = Math.random() * aquarium.canvas.width;
            this.y = Math.random() * aquarium.canvas.height;
            this.dx = Math.random() * -3;
            this.dy = Math.random() * 0;
        }
        draw() {
            let fish1 = new Path2D();
            fish1.arc(this.x + 1, this.y - 400, 20, 0, 360);
            aquarium.crc.fillStyle = "gold";
            aquarium.crc.fill(fish1);
            aquarium.crc.stroke(fish1);
            let flosse1 = new Path2D();
            flosse1.moveTo(this.x + 10, this.y - 400);
            flosse1.lineTo(this.x + 50, this.y - 370);
            flosse1.lineTo(this.x + 50, this.y - 430);
            aquarium.crc.fillStyle = "gold";
            aquarium.crc.fill(flosse1);
            aquarium.crc.stroke(flosse1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > aquarium.canvas.width || this.x < 0 || this.y > aquarium.canvas.height || this.y < 0) {
                this.x = 600;
                this.y = aquarium.canvas.height * Math.random();
            }
        }
    }
    aquarium.Fisch = Fisch;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=animationfish.js.map