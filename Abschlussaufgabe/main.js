var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Bilder laden

var fisch = new Image();
var bg = new Image();
var fg = new Image();
var angelhaken = new Image();
var pipeSouth = new Image();
var sand = new Path2D

fisch.src = "images/Fisch.png";
bg.src = "images/Bg.png";
angelhaken.src = "images/Angelhaken.png";
pipeSouth.src = "images/Pillar.png";

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var alive = true;

var score = 0;

// Ton wenn gepunktet oder kollidiert wird

var scor = new Audio();
var lose = new Audio();

scor.src = "sounds/score.mp3";
lose.src = "sounds/lose.wav";

// Bei Drücken einer Taste hochfliegen

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;

}

// Koordinaten der Säulen und Angelhaken

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    for(var i = 0; i < pipe.length; i++){
        constant = angelhaken.height+gap;
        ctx.drawImage(angelhaken,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant); 
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*angelhaken.height)-angelhaken.height
            }); 
        }

        // Bei Kollision Sound abspielen, Feld einblenden, Seite neu laden
        
        if( bX + fisch.width >= pipe[i].x && bX <= pipe[i].x + angelhaken.width && (bY <= pipe[i].y + angelhaken.height || bY+fisch.height >= pipe[i].y+constant) || bY + fisch.height >=  cvs.height - fg.height){
            alive=false;
            lose.play();
        }
        
        if(pipe[i].x == 5){
            score++;
            document.getElementById("matrikel").value=score;
            scor.play();
        }   
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(fisch,bX,bY);
    bY += gravity;  
    ctx.fillStyle = "#fff";
    ctx.font = "40px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    if( alive == true)
        requestAnimationFrame(draw); 
}

draw();

function reload (){   
      location.reload();   
}