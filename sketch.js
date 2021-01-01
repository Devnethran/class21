var fixed,moving;
 function setup() { 
   createCanvas(800,400);
   fixed1=createSprite(150, 200, 50, 50); 
   fixed1.shapeColor="blue";
   fixed2=createSprite(250, 200, 50, 50); 
   fixed2.shapeColor="blue";
   fixed3=createSprite(350, 200, 50, 50); 
   fixed3.shapeColor="blue";
   fixed4=createSprite(450, 200, 50, 50); 
   fixed4.shapeColor="blue";
    moving=createSprite(100,100,80,30);
     moving.shapeColor="blue"
     }

function draw() {
         background(0);
       moving.x=mouseX; 
       moving.y=mouseY; 
    
       isTouching(moving,fixed2);
        drawSprites();
 }
 