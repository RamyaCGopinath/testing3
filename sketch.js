var ball;
function setup() {
  createCanvas(600,500);
  ball = createSprite(300,250,20,20);
}

function draw() 
{
  background(30);

  if(keyDown("up")){
    ball.y = ball.y - 2;
  }
  if(keyDown("down")){
    ball.y = ball.y + 2;
  }
  if(keyDown("left")){
    ball.x = ball.x - 2;
  }
  if(keyDown("right")){
    ball.x = ball.x + 2;
  }

  drawSprites();
}




