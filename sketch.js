
var r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  
  r = map(mouseX, 0 ,1200, 0, 255);
  g = map(mouseX, 0 ,400, 0, 155);
  b = map(mouseX, 0 ,900, 0, 125);

  background(r,g,b);

  fill(255);
  ellipse(mouseX,mouseY,70,70);
}