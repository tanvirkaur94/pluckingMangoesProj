
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, treeImage, ground;
var stone;
var sling;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload(){
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(1400,600);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(1100,300);
	tree.addImage(treeImage);
	tree.scale = 0.48;

	boy = createSprite(200,500);
	boy.addImage(boyImage);
	boy.scale = 0.15;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,10);
	stone = new Stone(120,415);

	sling = new Slingshot(stone.body,{x:120,y:415})
	
	mango1=new Mango(1100,100);
   mango2=new Mango(1170,130);
	mango3=new Mango(1010,140);
	mango4=new Mango(1000,70);
	mango5=new Mango(1100,70);
	mango6=new Mango(1000,230);
	mango7=new Mango(900,230);
	mango8=new Mango(1140,150);
	mango9=new Mango(1100,230);
	mango10=new Mango(1200,200);
	mango11=new Mango(1120,50);
	mango12=new Mango(900,160);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  drawSprites();

  sling.display();
  stone.display();
  ground.display();

  	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420}) 
		sling.attach(stone.body);
	}
}


function detectCollision(object1,object2){
	stoneBodyPosition = object1.body.position;
	mangoBodyPosition = object2.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance <= object1.r + object2.r){
		Matter.Body.setStatic(object2.body,false);
	}
}


