let img;

function preload(){
  img = loadImage("image/waving.gif");

}
function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER);
  print(random(300));
  image(img, 50, 50);
}

function draw() {
  background(171,208,205)
  smooth();
  noStroke();
  // put drawing code here to run in a loop

  //styles for the square
  stroke(51);
  strokeWeight(4);
  fill(218, 122, 185);
  square(30, 20, 100);

  // style for the rect
  stroke(100, 255, 80);
  strokeWeight(10);
  fill(255, 208, 205);
  rect(800, 300, 200, 300);

  //styles for the point
  fill(255,118,3);
  stroke(40, 200, 300);
  strokeWeight(10);
  //point is only x, y coordinate
  point(mouseX, mouseY);
  print(mouseX);
}
