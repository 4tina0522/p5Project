function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  background(random(147), random(200), random(204))
  //change
  rectMode(CENTER)

  print(random(50))
}


function draw() {
  // put drawing code here to run in a loop

  //print is only x, y coordinations
  point(mouseX, mouseY)
}
