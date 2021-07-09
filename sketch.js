

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(0);
  translate(width / 2, height / 2);
  stroke(225);
  strokeWeight(1);
  textSize(32);
  textFont("Zen Loop");

  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let millisecond = millis();

  console.log(`${hour}:${minute}:${second}:`);
  stroke("white");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);

  let millisAngle = map(millisecond, 0, 1000, 0, 360);
  let secondAngle = map(seconds, 0, 60, 0, 360);
  fill(255, 255, 255, 150);

  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);
  let hourAngle = map(hours % 12, 0, 12, 0, 360);

  stroke("#f3c4fb");
  arc(0, 0, 300, 300, 0, millisAngle, PIE);

  stroke("#f15bb5");
  arc(0, 0, 250, 250, 0, secondAngle, PIE);

  stroke("#a4133c");
  arc(0, 0, 200, 200, 0, minuteAngle, PIE);

  stroke("#deaaff");
  arc(0, 0, 150, 150, 0, hourAngle, PIE);

  push();
  rotate(hourAngle);
  stroke("purple");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(secondAngle);
  stroke("#C37D92");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#560bad");
  line(0, 0, 100, 0);
  pop();
}
