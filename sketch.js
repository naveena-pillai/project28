
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree, boyImg, boy, stone, elastic;
var m1,m2,m3,m4,m5,m6,m7;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,40);
	boy = createSprite(100,630,10,10);
	boy.addImage("boy",boyImg);
	stone = new Stone(70,610,50,50);
	boy.scale = 0.1;
	elastic = new Elastic(stone.body,{x:50,y:570});

	tree = new Tree(620,500,350,400);

	m1 = new Mango(550,450,40,40);
	m2 = new Mango(570,400,40,40);
	m3 = new Mango(610,350,40,40);
	m4 = new Mango(650,370,40,40);
	m5 = new Mango(690,420,40,40);
	m6 = new Mango(720,450,40,40);
	m7 = new Mango(610,430,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(207,197,197);
  
  tree.display();
  ground.display();
  stone.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  elastic.display();

  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
   elastic.fly();
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=Lmango.width+Lstone.width){
		Matter.Body.setStatic(Lmango.body,false);
	}

}

