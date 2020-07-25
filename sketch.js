var bullet,speed,weight;
var wall,thickness;

function setup() {
  speed = random(223,32);
  weight = random(30,52);
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  thickness = random(22,83);
}

function hasCollided(Lbullet,Lwall)
{
  console.log("Lbullet.x: "+Lbullet.x);
  console.log("Lbullet.width: "+Lbullet.width);
  bulletRightEdge=Lbullet.x + Lbullet.width;
  console.log("bulletRightEdge: "+bulletRightEdge);
  wallLeftEdge=Lwall.x;
  console.log("wallLeftEdge: "+ wallLeftEdge);
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true  
  }
  return false;
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }  
  drawSprites();
}
