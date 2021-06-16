
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dusbinimg

function preload()
{
	dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box2 = new Box(750,620,20,100,"red");
 box3 = new Box(545,620,20,100,"red");
	box1 = new Box(650,660,200,20,"red");

	ground=new Box(400,680, 800,10,"yellow");


	Paper= new paper(150,650,16);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //image(dustbinimg,540,450,220,220)

 box1.display();
box2.display();
 box3.display();
 image(dustbinimg,525,450,250,230)
  ground.display();
  Paper.display();


  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:35,y:-45})
  }
}
