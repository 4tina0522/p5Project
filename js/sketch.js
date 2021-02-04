let img;

function preload(){
  img = createImg("image/waving.gif");

}
function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  background(171,208,205);
  print(random(300));
  image(img, 100, 100);
  textsize(32);
  text('Hello', 10, 30);
  fill(0, 102, 153);
}

function draw() {
  textsize(32);
  text('Hello', 10, 30);
  fill(0, 102, 153);
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

  img.position(300, 300)
}
