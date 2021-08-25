var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  food1 = loadImage("leaf.png");
  food2 = loadImage("orangeLeaf.png");
  food3 = loadImage("redImage.png");
  food4 = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating boy running
rabbit = createSprite(200,390,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
spawnFood();
drawSprites();
}





function spawnFood(){
  if (frameCount % 60 === 0){
    var food = createSprite(380,1,10,10);
    food.x = Math.round(random(20,380));
    food.scale = 0.1;
    food.velocityY = +10;
 
 
    
     //generate random obstacles
    var rand = Math.round(random(1,4));
    switch (rand){
   case 1 : food.addImage(food1);
          break;
   case 2 : food.addImage(food2);
          break;
   case 3 : food.addImage(food3);
          break;
   case 4 : food.addImage(food4); 
         break;
   default: break;
 }

    //assign scale and lifetime to the obstacle           
    food.lifetime =200;
 }
 }