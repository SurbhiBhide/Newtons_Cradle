const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(1500, 600);

    engine = Engine.create();
    world = engine.world;

  bob1 = new Bob(300,400);
  bob2 = new Bob(350,400);
  bob3 = new Bob(400,400);
  bob4 = new Bob(450,400);
  bob5 = new Bob(500,400);

  roof = new Roof(400,100,400,30);
  rope1 = new Rope(bob1.body, roof.body,-120, 0);
  rope2 = new Rope(bob2.body, roof.body,-60,0);
  rope3 = new Rope(bob3.body, roof.body,0, 0);
  rope4 = new Rope(bob4.body, roof.body,60, 0);
  rope5 = new Rope(bob5.body, roof.body,120, 0);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(rgb(184,255,233));

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  stroke("white");
  fill(247,135,165);
  textSize(30);
  text("Press Left Arrow Key To Move First Bob",900,100);
  text("Press Right Arrow Key To Move Last Bob",900,200);
  textSize(50);
  text("ENJOY!!!",1050,350);

  drawSprites();
 }
 function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:70,y:-50});
      }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-50});
  }    
}
