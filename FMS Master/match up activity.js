let circleMatched = false;
let rectMatched = false;

let circleStartX = 100;
let circleStartY = 100;

let rectStartX = 200;
let rectStartY = 50;

let circleX = 100;
let circleY = 100;

let rectX = 200;
let rectY = 50;

let selected = " ";
let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(1080, 1920);
}

function draw() {
  background(245);
  strokeWeight(10);
// target
  fill(220);
  circle(1000, 100,100);
// target
  fill(220);
  rect(950, 200, 100);

  line(540, 0, 540, 1920);
  // draggable
  fill(0, 190, 180);
  circle (circleX, circleY, 100);
  // draggbale
  fill(200, 0, 20);
  rect(rectX, rectY, 100);

}

function mousePressed () {
  if (!circleMatched && dist(mouseX, mouseY, circleX, circleY) < 50) {
    selected = "circle";
    offsetX = mouseX - circleX;
    offsetY = mouseY - circleY;
  } 
  else if (
    !rectMatched &&
    mouseX >= rectX && mouseX <= rectX + 100 &&
    mouseY >= rectY && mouseY <= rectY + 100
  ) {
    selected = "rect";
    offsetX = mouseX - rectX;
    offsetY = mouseY - rectY;
  }
}
function mouseDragged() {
  if (selected === "circle") {
    circleX = mouseX - offsetX;
    circleY = mouseY - offsetY;
  } else if (selected === "rect") {
    rectX = mouseX - offsetX;
    rectY = mouseY - offsetY;
  }
}
function mouseReleased () {
  
  if (selected === "circle") {
    if (dist(circleX, circleY, 1000, 100) < 60) {
      circleX = 1000;
      circleY = 100;
      circleMatched = true;
    } else {
      circleX = circleStartX;
      circleY = circleStartY;
    }
  } 
  else if (selected === "rect") {
    if (dist(rectX, rectY, 950, 200) < 60) {
      rectX = 950;
      rectY = 200;
      rectMatched = true;
    } else {
      rectX = rectStartX;
      rectY = rectStartY;
    }
  }

  selected = "";
}
