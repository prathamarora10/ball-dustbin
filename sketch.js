
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,dustbin,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1100,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,550,1000,20)
    ball = new Ball(50,540)
    dustbin = new Dustbin(800,400,225,250)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  Engine.update(engine)
  ground.display();
  ball.display();
  dustbin.display();

  drawSprites();
 keypressed();
}

function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-40})
  }
}

