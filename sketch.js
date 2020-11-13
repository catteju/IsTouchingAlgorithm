var f, m;

function setup() {
  createCanvas(800,400);
  f = createSprite(200, 200, 80, 50);
  m = createSprite(200, 400, 50, 30);
  f.shapeColor = "green";
  m.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  m.x = World.mouseX;
  m.y = World.mouseY;
if(m.x-f.x<=f.width/2 + m.width/2 && f.x-m.x<=m.width/2 + f.width/2 && m.y-f.y<=f.height/2+m.height/2 && f.y-m.y<=f.height/2 + m.height/2){
  f.shapeColor = "red";
  m.shapeColor = "red";
}
else {
  f.shapeColor = "green";
  m.shapeColor = "green";
}
  drawSprites();
}