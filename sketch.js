var dam,weight,speed;

var car1,car2,car3;
var wall,thickness;
var A,B,C;
var speed1,speed2,speed3;

function setup() {
  createCanvas(1600,400);
  //creating car sprite
  car1 = createSprite(100,380,10,10);
//creating car sprite
  car2 = createSprite(100,340,10,10);
 
  car3 = createSprite(100,300,10,10);
  //creating car sprite

  wall = createSprite(1200,200,thickness,height);
  wall.shapeColor=color(80,80,80);
//cars collide with wall
  car1.collide(wall);
  car2.collide(wall);
  car3.collide(wall);

  weight =  random(30,52);

  thickness = random(22,83);

// we are checking weight

 speed1=random(223,321);
 console.log(speed1);
 car1.velocityX= speed1;
  car1.shapeColor="white";

 speed2=random(280,321);
 console.log(speed2);
 car2.velocityX= speed2;
 //giving car 2 a colour
 car2.shapeColor="white";
 // giving random speed
 speed3=random(223,280);
 console.log(speed3);
 car3.velocityX= speed3;
 car3.shapeColor="white";
}

function draw() {
 background(0,0,0); 
 console.log("1234");
 A=damage(car1,speed1);
 B=damage(car2,speed2);
 C=damage(car3,speed3);

 changeColor(A,car1);
 changeColor(B,car2);
 changeColor(C,car3);

  drawSprites();
}
function damage(car1,speed1)
{
 // console.log("text");
  if(car1.collide(wall)){
    car1.velocityX=0;
    dam=(0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    
    return dam;
  }
}
//we are changing colour 
function changeColor(A,car1)
{
  if(A>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  else if(A<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}