var a,b;






function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200, 200, 50, 50);
  a.shapeColor = "blue";
  b.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  a.x =mouseX;
  a.y =mouseY;
  console.log(a.y - b.y);

if (a.x - b.x < 41  &&  b.x - a.x < 41  &&  a.y - b.y < 46  &&  b.y - a.y < 46) {
  a.shapeColor = "red";
  b.shapeColor = "red"; 
}

else{
  a.shapeColor = "blue";
  b.shapeColor = "blue";  
}



  drawSprites();
}