var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg, fairySound;
var test;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	test = loadImage("images/fairy.png");
	fairySound = loadSound("sound/JoyMusic.mp3");	
}

function setup() {
	createCanvas(800, 800)

	//create fairy sprite and add animation for fairy
	fairy = createSprite(150,150);
	fairy.addAnimation(fairyImg);
	//fairy.addImage(test);


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true);
	fairy.velocityX = 0; 
	fairySound.play();
}

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.velocityX = 3;
	}
	
}
