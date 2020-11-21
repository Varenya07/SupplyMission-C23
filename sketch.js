var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var DropZone1,DropZone2,DropZone3;
var engine,world

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	DropZone1 = new DropZone(270,595,20,100);
	DropZone2 = new DropZone(378,635,200,20);
	DropZone3 = new DropZone(487,595,20,100);

	packageSprite=createSprite(400,200, 10,10);
  	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	  
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 packageBody = Bodies.circle(width/2 , 200 , 5,{restitution:0.0, isStatic:true});
	World.add(world, packageBody);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;	

  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y

  DropZone1.display();
  DropZone2.display();
  DropZone3.display();

  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



