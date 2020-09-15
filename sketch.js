var dog, dog_img1, dog_img2;
var food;

function preload() {
  dog_img1 = loadImage("images/dogImg.png");
  dog_img2 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(650,400,20,20);
  dog.addImage(dog_img1);
  dog.scale = 0.3;
  food = createSprite(50,400,20,20);
  food.shapeColor = "red";
  
}


function draw() {  
  dog.x = mouseX;
  dog.y = mouseY;
  background("white");

  if(food.isTouching(dog)){
    dog.addImage(dog_img2);
    food.destroy
  }


  drawSprites();
}



