
var r = 0;
var g = 255;
var b = 50;

function setup(){
  createCanvas(1200,400);
}


function draw(){
  
  
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX, 40,800, 0,255)
  
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX, 24,1120, 0,255)
  
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX, 50,900, 0,255)

  ellipse(mouseX, 200, 10, 10);
  // Pass the values to the background() function you have learnt previously.
  background(r, g, b);
drawSprites();
}