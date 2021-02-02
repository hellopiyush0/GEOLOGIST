
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {

	createCanvas(810, 620);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(405, height, 810, 20)
	hammer = new Ham(0, 0);
	stone = new Stone(400, 500);
	rubber = new Rubber(550, 500);

	iron = new Iron(200, 520);

	sand1 = new Sand(100, 500);
	sand2 = new Sand(156, 590);
	sand3 = new Sand(156, 590);
	sand4 = new Sand(136, 590);
	sand5 = new Sand(406, 400);
	sand6 = new Sand(406, 400);
	sand7 = new Sand(400, 400);
	sand8 = new Sand(550, 400);
	sand9 = new Sand(560, 400);
	sand10 = new Sand(200, 400);

}


function draw() {

    rectMode(CENTER);
	background("white");
	
	Engine.update(engine);

	ground.display();
	hammer.display();
	stone.display();
	rubber.display();

	iron.display();

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();
 
}



