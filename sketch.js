var fr;
var mr;

function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 200, 30, 30);
  mr = createSprite(600, 400, 50, 50);
  fr.shapeColor = "green";
  mr.shapeColor = "green";
}

function draw() {
  background(0);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  console.log(fr.x-mr.x);
  if(fr.x-mr.x<fr.width+mr.width/2 && mr.x-fr.x<fr.width+mr.width/2 && fr.y-mr.y<fr.height+mr.height/2 && mr.y-fr.y<fr.height+mr.height/2){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
  }
  else{
  fr.shapeColor = "green";
  mr.shapeColor = "green";
  }
  drawSprites();
}