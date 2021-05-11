const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball;
function setup() {
  createCanvas(1200,620);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,600,1200,20);

  box1=new Box(900,100,70,70);
  box2=new Box(900,100,70,70);
  box3=new Box(900,100,70,70);
  box4=new Box(900,100,70,70);
  box5=new Box(900,100,70,70);
  box6=new Box(900,100,70,70);
ball=new Ball(400,600,80,80)
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
ball.display();

}


