
// variables
var cycle, cycleimg;
var lane, laneimg;
var gameState = 0;
var t;
var car, carimg;
var bin, binimg;
var peel, peelimg;
var bike, bikeimg;
var truck, truckimg;
var police, policeimg;


function preload() {
  laneimg = loadImage("track copy.jpg");
  cycleimg = loadImage("cycle.png");
  carimg = loadImage("car.png");
  binimg = loadImage("bin.png");
  peelimg = loadImage("peel.png");
  bikeimg = loadImage("bike.png");
  truckimg = loadImage("truck.png");
  policeimg = loadImage("police.png");
}



function setup() {
  createCanvas(displayWidth - 50, displayHeight - 100);

  cycle = createSprite(displayWidth / 2, displayHeight - 200, 200, 200);
  cycle.addImage(cycleimg);
  
  car = createSprite(displayWidth /2-200, displayHeight-1000, 200,200);
  car.addImage(carimg);
  car.scale=0.3;

  bin = createSprite(displayWidth /2-620, displayHeight-500, 200,200);
  bin.addImage(binimg);
  bin.scale=0.3;

  peel = createSprite(displayWidth /2+500, displayHeight-1500, 200,200);
  peel.addImage(peelimg);
  peel.scale=0.3;

  bike = createSprite(displayWidth /2 +200, displayHeight-2000, 200,200);
  bike.addImage(bikeimg);
  bike.scale=0.2;

  truck = createSprite(displayWidth /2 - 500, displayHeight-3000, 200,200);
  truck.addImage(truckimg);
 
  police = createSprite(displayWidth /2-600, displayHeight-4000, 200,200);
  police.addImage(policeimg);
  police.scale=0.3;

}



function draw() {
  background("white");


  image(laneimg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

  if (keyIsDown(UP_ARROW)) {
    cycle.y -= 10;
  }

  if (keyIsDown(LEFT_ARROW)) {
    cycle.x -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    cycle.x += 10;
  }

  camera.position.x = displayWidth / 2;
  camera.position.y = cycle.position.y;
  drawSprites();
  start();
  play();
  end();

  if(gameState===2){
    cycle.x=0;
    cycle.y=0;
    camera.position.x =  camera.position.x;
    camera.position.y = camera.position.y;
    stroke(30);
    fill("red");
    textSize(50);
    text("GAME HAS ENDED", displayWidth / 2 , displayHeight / 2);
}
}

function start() {
  if (gameState === 0) {

    image(laneimg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

    stroke(200);
    fill("red");
    textSize(50);
    text("PRESS SPACE TO BEGIN THE GAME", displayWidth / 2 - 480, displayHeight / 2);
  }
}

function play() {
  if (keyCode === 32) {
    gameState = 1;

    if (gameState === 1) {

      image(laneimg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      console.log("hey");
      cycle.display();
      car.display();
      bin.display();
      peel.display();
      bike.display();  
      truck.display();
      police.display();

      stroke(30);
      fill("red");
      textSize(50);
      text("PRESS UP ARROW TO START CYCLING", displayWidth / 2 - 480, displayHeight / 2);



    }

  }
}

function end(){
  if(cycle.isTouching(car)||cycle.isTouching(bin)|| cycle.isTouching(peel)|| cycle.isTouching(bike)|| cycle.isTouching(truck)|| cycle.isTouching(police)||cycle.y===6000 ){
    gameState = 2;
    
      
    }
}


