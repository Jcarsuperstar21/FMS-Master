class MatchUpGameRunner {
  constructor() {
    createCanvas(1920, 1080);
    this.shapes = [
  { type: "circle", color: [0, 190, 180], startX: 150, startY: 150 },
  { type: "rect", color: [250, 80, 150], startX: 600, startY: 150 },
  { type: "triangle", color: [200, 10, 90], startX: 150, startY: 550 },
  { type: "star", color: [150, 70, 200], startX: 600, startY: 550 },
  { type: "diamond", color: [250, 50, 150], startX: 150, startY: 950 },
  { type: "hexagon", color: [100, 200, 250], startX: 600, startY: 950 }
];

// Random target positions
let targetPositions = [
  { x: 1200, y: 90 },
  { x: 1700, y: 250 },
  { x: 1300, y: 450 },
  { x: 1500, y: 650 },
  { x: 1400, y: 850 },
  { x: 1600, y: 950 }
];

// Shuffle target positions
for (let i = targetPositions.length - 1; i > 0; i--) {
  let j = floor(random(i + 1));
  [targetPositions[i], targetPositions[j]] =
    [targetPositions[j], targetPositions[i]];
}

// Assign randomized targets
for (let i = 0; i < this.shapes.length; i++) {
  this.shapes[i].targetX = targetPositions[i].x;
  this.shapes[i].targetY = targetPositions[i].y;

  this.shapes[i].x = this.shapes[i].startX;
  this.shapes[i].y = this.shapes[i].startY;
  this.shapes[i].matched = false;
}

this.selected = -1;
this.offsetX = 0;
this.offsetY = 0;

    for (let shape of this.shapes) {
      shape.x = shape.startX;
      shape.y = shape.startY;
      shape.matched = false;
    }

    this.selected = -1;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  drawShape(type, color, x, y) {
    push();
    translate(x, y);
    stroke(0);
    strokeWeight(5);
    fill(color);

    if (type === "circle") {
      circle(0, 0, 200);
    }

    if (type === "rect") {
      rect(-100, -100, 200, 200);
    }

    if (type === "triangle") {
      triangle(-100, 100, 100, 100, 0, -100);
    }

    if (type === "star") {
      beginShape();
      for (let i = 0; i < 10; i++) {
        let a = -HALF_PI + i * PI / 5;
        let r = i % 2 === 0 ? 100 : 45;
        vertex(cos(a) * r, sin(a) * r);
      }
      endShape(CLOSE);
    }

    if (type === "diamond") {
      quad(0, -100, 100, 0, 0, 100, -100, 0);
    }

    if (type === "hexagon") {
      beginShape();
      for (let i = 0; i < 6; i++) {
        let a = i * TWO_PI / 6;
        vertex(cos(a) * 100, sin(a) * 100);
      }
      endShape(CLOSE);
    }

    pop();
  }

  draw() {
    background(245);
    strokeWeight(10);

    // Divider
    line(960, 0, 960, 1920);

    // Target shapes
    for (let shape of this.shapes) {
      this.drawShape(
        shape.type,
        220,
        shape.targetX,
        shape.targetY
      );
    }

    // Draggable shapes
    for (let shape of this.shapes) {
      this.drawShape(
        shape.type,
        shape.color,
        shape.x,
        shape.y
      );
    }
  }

  mousePressed() {
    for (let i = this.shapes.length - 1; i >= 0; i--) {
      let shape = this.shapes[i];

      if (shape.matched) continue;

      if (
        mouseX >= shape.x - 60 &&
        mouseX <= shape.x + 60 &&
        mouseY >= shape.y - 60 &&
        mouseY <= shape.y + 60
      ) {
        this.selected = i;
        this.offsetX = mouseX - shape.x;
        this.offsetY = mouseY - shape.y;
        break;
      }
    }
  }

  mouseDragged() {
    if (this.selected !== -1) {
      let shape = this.shapes[this.selected];

      shape.x = mouseX - this.offsetX;
      shape.y = mouseY - this.offsetY;
    }
  }

  mouseReleased() {
    if (this.selected !== -1) {
      let shape = this.shapes[this.selected];

      if (
        dist(
          shape.x,
          shape.y,
          shape.targetX,
          shape.targetY
        ) < 60
      ) {
        shape.x = shape.targetX;
        shape.y = shape.targetY;
        shape.matched = true;
      } else {
        shape.x = shape.startX;
        shape.y = shape.startY;
      }
    }

    this.selected = -1;
  }
}
// import {MatchUpGameRunner} from 'matchupgame.js'
let currentScreen = "home";
let game;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  game = new MatchUpGameRunner();
}



function draw() {
  if (currentScreen === "home") {
    drawHomeScreen();
    if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 6 && mouseY < height / 6 + height / 8) {
      currentScreen = "screen1";
    } else if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 3 && mouseY < height / 3 + height / 8) {
      currentScreen = "screen2";
    } else if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 && mouseY < height / 2 + height / 8) {
      currentScreen = "screen3";  
    } else if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 1.5 && mouseY < height / 1.5 + height / 8) {
      currentScreen = "screen4";
    }
  } else if (currentScreen === "screen1") {
    drawScreen1();
  } else if (currentScreen === "screen2") {
    game.draw();
  } else if (currentScreen === "screen3") {
    drawScreen3();
  } else if (currentScreen === "screen4") {
    drawScreen4();
  }
}
function mousePressed() {
  if (currentScreen === "home") {
    if (
      mouseX > width / 4 &&
      mouseX < width * 3 / 4 &&
      mouseY > height / 6 &&
      mouseY < height / 6 + height / 8
    ) {
      currentScreen = "screen1";
    } else if (
      mouseX > width / 4 &&
      mouseX < width * 3 / 4 &&
      mouseY > height / 3 &&
      mouseY < height / 3 + height / 8
    ) {
      currentScreen = "screen2";
    } else if (
      mouseX > width / 4 &&
      mouseX < width * 3 / 4 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + height / 8
    ) {
      currentScreen = "screen3";
    } else if (
      mouseX > width / 4 &&
      mouseX < width * 3 / 4 &&
      mouseY > height / 1.5 &&
      mouseY < height / 1.5 + height / 8
    ) {
      currentScreen = "screen4";
    }
  } else if (currentScreen === "screen2") {
    game.mousePressed();
  }
}

function mouseDragged() {
  if (currentScreen === "screen2") {
    game.mouseDragged();
  }
}

function mouseReleased() {
  if (currentScreen === "screen2") {
    game.mouseReleased();
  }
}

function drawHomeScreen() {
  background(80, 80, 150);
  fill(255);
  rect(width / 4, height / 6, width / 2, height / 8);
  rect(width / 4, height / 3, width / 2, height / 8);
  rect(width / 4, height / 2, width / 2, height / 8);
  rect(width / 4, height / 1.5, width / 2, height / 8);
}



function drawScreen1() {
  background(200, 100, 100);
}

function drawScreen2() {
  background(100, 100, 200);
}

function drawScreen3() {
  background(100, 200, 100);
}

function drawScreen4() {
  background(200, 200, 100);
}


// Original p5.js functions



// function setup() {
  // createCanvas(1080, 1920);
  // game = new MatchupGameRunner();
// }

// function draw() {
  // game.draw();
// }

// function mousePressed() {
  // // game.mousePressed();
// }

// function mouseDragged() {
  // game.mouseDragged();
// // // // // }

// // // // function mouseReleased() {
  // // // game.mouseReleased();
// // }
