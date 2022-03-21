
var trex ,trex_running;

var ground ;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,150,30,30);
 trex.scale=0.5;
 trex.addAnimation("running",trex_running)
 ground = createSprite(300,185,600,20)
}

function draw(){
  background("black")

  if(keyDown("space")){
    trex.velocityY = -10; 
  }
 
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);
  drawSprites();

}
