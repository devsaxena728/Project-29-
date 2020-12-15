const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box
var slingshot
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;

    ground =new Ground(600,height,1200,20);
   block16 = new Block(220,480,30,40)
   block15 = new Block(250,480,30,40)
   block14 = new Block(280,480,30,40)
   block13 = new Block(310,480,30,40)
   block12 = new Block(340,480,30,40)
   block11 = new Block(370,480,30,40)
   block10 = new Block(400,480,30,40)
   //level3
   block9 = new Block(250,440,30,40)
   block8 = new Block(280,440,30,40)
   block7 = new Block(310,440,30,40)
   block6 = new Block(340,440,30,40)
   block5 = new Block(370,440,30,40)
  //level2
  block4 = new Block(280,400,30,40)
  block3 = new Block(310,400,30,40)
  block2 = new Block(340,400,30,40)
  //top
  block1 = new Block(310,360,30,40)
  ball = new Ball(50,480,20)
  
  slingshot = new SlingShot(ball.body,{x:100,y:380})
  Engine.run(engine)
}

function draw() {
  background("yellow");  
ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
ball.display();
slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}