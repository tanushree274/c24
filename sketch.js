const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(925,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig (810,320);
    bird = new Bird (100,100);
    log1 = new Log (810,260,300,PI/2);
    log2 = new Log (810,260,150,-PI/7);

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
    bird.display();
    log1.display();
    log2.display();


}