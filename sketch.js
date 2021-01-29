const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(200,200)
    log1= new Log(100,300,100,PI/2);


    box3 = new Box(700,240,70,70);
    box4 = new Box(920,320,70,70);
   
    pig2 = new Pig(810,20)
    log2= new Log(810,180,100,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
   
    pig2.display();
    log2.display();


}