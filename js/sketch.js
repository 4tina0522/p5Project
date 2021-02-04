function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  background(171,208,205)
}


function draw() {
  background(171,208,205)
  smooth();
  noStroke();
  // put drawing code here to run in a loop

  //styles for the rect
  stroke(200, 255, 80);
  strokeWeight(50);
  fill(255, 208, 205);
  rect(400, 500, 300, 400);

}
