
var monkey , monkey2
var banana ,bananaImage, obstacle, obstacleImage

var score,ground

function preload(){
  
  
  monkey2 =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("m",monkey2)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  obstacleGroup=createGroup();


  

 
score=0
  
}


function draw() {
  
  background("pink")
    if(ground.x<0){
    ground.x=ground.width/2;
  }
   text("Survival time : "+ score, 300,50);
  if(keyDown("space")) {
        monkey.velocityY = -4;
  }
  
  score = score + Math.round(frameCount/60);
 
 monkey.velocityY = monkey.velocityY + 0.1
 monkey.collide(ground)
 
 food();
  obs();
  if(obstacleGroup.isTouching(monkey)){
    obstacle.velocityX=0
    
  }
 
  drawSprites();
  
}

function food (){
  if(frameCount % 100 === 0){
   
    banana= createSprite(400,200,10,10)
    banana.addImage("b",bananaImage)
    banana.scale=0.1
    banana.lifetime=200
    banana.velocityX=-5
    
  }
 
}

function obs(){ if
  (frameCount % 100 === 0){
    obstacle=createSprite(300,320,20,20)
    obstacle.addImage("i",obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-3
    obstacle.lifetime=300
    obstacleGroup.add(obstacle)
  }

  
  
}








