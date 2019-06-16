namespace aquarium {

export class Fisch {
    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let fish1: Path2D = new Path2D();
        fish1.arc(this.x + 1, this.y - 400, 20, 0, 360);
        crc.fillStyle = "gold";
        crc.fill(fish1);
        crc.stroke(fish1);
    
        let flosse1: Path2D = new Path2D();
        flosse1.moveTo(this.x + 10, this.y - 400);
        flosse1.lineTo(this.x + 50, this.y - 370);
        flosse1.lineTo(this.x + 50, this.y - 430);
        crc.fillStyle = "gold";
        crc.fill(flosse1);
        crc.stroke(flosse1);
    }
    update(): void {
        this.move();
        this.draw();
    }
    
    move(): void {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            
            this.x = 600;
            this.y = canvas.height * Math.random();
        }
    }  
}
}