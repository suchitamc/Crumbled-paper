const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine,render;
var paper, ground, dustbin;


function setup() {
	createCanvas(1600, 700);
  
  engine = Engine.create();
  world = engine.world;

  paper = new Paper(200,450,70);
  ground = new Ground(width/2,670,width,20);
  dustbin = new Dustbin(1200,640);
  Engine.run(engine);
}


function draw() {
 
  background(230);
 
  Engine.update(engine);
  ground.display();
  dustbin.display();
  paper.display();
 

}

function keyPressed() {
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-155});
  
}
}