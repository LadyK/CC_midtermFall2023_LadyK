function setup() {
  createCanvas(800, 800);
  background(255, 127, 30);
}

function draw() {
  // put drawing code here
  background(0);
  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);

  fill(255);
  stroke(0, 255, 0);
  strokeWeight(3);
  rect(width/2, height/2, 40, 60);


  fill(127);
  stroke(255);
  strokeWeight(5);
  ellipse(width/2 + 200, height/2, 50, 50);
}
