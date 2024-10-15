let shapeSize // declaring a variable
let color1 
let color2 
// let growthAmount 
function setup() {
  createCanvas(600, 600);
  // random number from [10, 30)
  shapeSize = random(10,30) // assign the value on the right, to the variable on the left  
  color1 = color(random(255),random(255),random(255))
  color2 = color(random(255),random(255),random(255))
  growthAmount = 1
}

function draw() {
  background(100);
  myShape(mouseX,mouseY,shapeSize) 
  shapeSize = shapeSize + 1
  // growthAmount = growthAmount + 1 
}

function myShape(x,y,s) {
  let thirdOfS = s/1.5
  noStroke()
  fill(color1)
  square(x,y,s)
  fill(color2)
  circle(x,y,thirdOfS)
  circle(x+s,y,thirdOfS)
  circle(x,y+s,thirdOfS)
  circle(x+s,y+s,thirdOfS)
  color1 = color(red(color1),green(color1),blue(color1)+1)
}