var bg,bgI;
var runner,runnerI, runnerR , runnerJ;

function preload(){
bgI = loadImage("pics/forest.jpg");
//runnerR = loadAnimation("pics/Run1.png","pics/Run2.png","pics/Run3.png","pics/Run4.png","pics/Run5.png","pics/Run6.png","pics/Run7.png","pics/Run8.png",)
runnerI = loadImage("pics/Idle1.png")
//runnerJ = loadAnimation("pics/Jump1.png","pics/Jump2.png","pics/Jump3.png","pics/Jump4.png","pics/Jump5.png","pics/Jump6.png","pics/Jump7.png","pics/Jump8.png","pics/Jump9.png","pics/Jump10.png","pics/Jump11.png","pics/Jump12.png",)
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40, 20, 20);
  bg.addImage(bgI);
  bg.scale = 1.5;

  runner = createSprite(displayWidth - 1150, displayHeight - 300,50,50);
  runner.addImage("runnerI");
  runner.scale = 0.3;
  runner.setCollider("rectangle",0,0,300,300);
  player.debug = true;
}

function draw() {
  background(0);
  
  if(keyWentDown("space")){
    runner.addAnimation("runnerR");
  }
  drawSprites();
}