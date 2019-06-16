/* Aufgabe: 11
Name: Jonas Meujen
Matrikel: 260231
Datum: 12.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aquarium;
(function (aquarium) {
    class Bubble {
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y - 50, 10, 0, 360);
            aquarium.crc.strokeStyle = "#ffffff";
            aquarium.crc.stroke(blase);
            let blase2 = new Path2D();
            blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
            aquarium.crc.strokeStyle = "#ffffff";
            aquarium.crc.stroke(blase2);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > aquarium.canvas.width || this.x < 0 || this.y > aquarium.canvas.height || this.y < 0) {
                this.x = aquarium.canvas.width * Math.random();
                this.y = aquarium.canvas.height;
            }
        }
    }
    aquarium.Bubble = Bubble;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bubbles.js.map