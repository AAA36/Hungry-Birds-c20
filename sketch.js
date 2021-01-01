var fixedRectangle , movingRectangle ;


function setup() {

  createCanvas(800,400);
 fixedRectangle = createSprite(400, 200, 50, 50);

   movingRectangle = createSprite(700,200,100,100);
}

function draw() {
  background('red');  
  drawSprites();

   movingRectangle.x = mouseX;
   movingRectangle.y = mouseY;

   if (movingRectangle.x - fixedRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2 &&
      fixedRectangle.x - movingRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2 &&
      movingRectangle.y - fixedRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2 &&
      fixedRectangle.y - movingRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2){
     movingRectangle.shapeColor = 'green';
     fixedRectangle.shapeColor = 'green'; 
   }
   else {
    movingRectangle.shapeColor = 'black';
    fixedRectangle.shapeColor = 'white'; 
   }
}