const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(600,380,1200,15)
	//ball = new Pig(810,350)
    base = new Dustbin(950,370,100,10)
    leftWall = new Dustbin(900,335,10,80)
    rightWall = new Dustbin(1000,335,10,80)
}


function draw(){
    background("green");
    Engine.update(engine);
    ground.display();
    base.display();
    leftWall.display();
    rightWall.display();
    


}
