let ahyeah;
let waving;
let sitting;

function preload(){
  ahyeah = loadimage("image/ahyeah.png");
  waving = loadimage("image/waving.gif");
  sitting = loadimage("image/sitting.gif");
}
function setup() {
  // put setup code here to run once
  //create canvas 500 by 500 px
  createCanvas(windowWidth,windowHeight)
  background(171,208,205)
  //change
  imageMode(CENTER)
}


function draw() {
  background(171,208,205)
  image(ahyeah, windowWidth/2, windowHeight/2)

  // put drawing code here to run in a loop


}
