function setup() {
  createCanvas(windowWidth, windowHeight);
  background(14, 12, 11); // paint the background once at the start
}

function draw() {
  background(14, 12, 11, 5); // repaint every frame to fade old lines
  stroke(255);
  strokeWeight(2);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}