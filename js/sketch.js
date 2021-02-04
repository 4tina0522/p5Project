let img;
let shine;

function preload(){
  img = createImg("image/waving.gif");
  shine = loadFont("font/Shine.ttf")

}
function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER);
  print(random(300));
  image(img, 100, 100);
  background(171,208,205);
  textFont(Shine);
  textSize(width/3);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(171,208,205);
  smooth();
  noStroke();
  // put drawing code here to run in a loop

  //styles for the square
  stroke(51);
  strokeWeight(4);
  fill(218, 122, 185);
  square(300, 200, 300);

  //styles for the point
  fill(255,118,3);
  stroke(40, 200, 300);
  strokeWeight(10);
  //point is only x, y coordinate
  point(mouseX, mouseY);
  print(mouseX);

  //styles for the textFont
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text("Hello", 0, 0);

  img.position(300, 400)
}
