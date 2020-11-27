const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
var myEngine,myWorld;
var box, box1,box2
var ground
function setup() {
  createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world
    box=new Box(200,300,60,60);
    box1=new Box(230,100,50,50);
    box2=new Box(215,250,20,20);
    ground=new Ground(200,390,450,10)
}

function draw() {
  background(0); 
  Engine.update(myEngine) 
box.display();
box1.display();
box2.display();
ground.display();
}