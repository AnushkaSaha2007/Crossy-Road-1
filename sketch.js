var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //Grasses where player can rest
 for( var i=0; i<6; i++){
   var bottomGrass1 = createSprite( 683, height-50-(i*400),width, grassHeight);
   if(i%2===0)//adding grass
   {
     var road=  createSprite( 683, height-150-(i*400)-width, grassHeight,300);
     road.shapeColor("black")
   }
   bottomGrass1.shapeColor("grey")
 }

 //To create a rows of car
 for (var i=0;i<40; i++){
   cars= new car(2);
   carGroup1.add(cars.spt);
 }
 //To create a rows of log
 for (var i=0;i<40; i++){
  logs= new logs(2);
  logGroup1.add(logs.spt);
}
 //making the logs reappear
 for(i=1; i<logGroup1.length; i++){
   if(logGroup1[i].x<0)
   {
    logGroup1[i].x=width;
   }
 }
}

function draw() {
  background("skyblue");
 
 

  drawSprites();
}

