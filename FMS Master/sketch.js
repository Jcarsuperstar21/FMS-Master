//IMPORTANT!!
import { ArrowGameRunner } from './arrow_game_runner.js';
import { LetterTraceRunner } from './letter_trace_runner.js';
import { Keyboard } from './keyboard.js';

let currentScreen = "home";
let game_1_started = false;
let game_2_started = false;
let game_3_started = false;
let game_4_started = false;

//Pranay's stuff
let arrow_game_runner;
let game_4_arrow_img;

//Jack's stuff
let letter_trace_runner;
let bufferFrameCount = 0;

//Gael's stuff
let keyboard_game_runner;

//Aliya's stuff
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

function preload() {
  keyboard_game_runner = new Keyboard();
  letter_trace_runner = new LetterTraceRunner();
  game_4_arrow_img = loadImage('/arrow_game_assets/arrow_left.png');
  arrow_game_runner = new ArrowGameRunner(game_4_arrow_img);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  if (currentScreen === "home") {
    drawHomeScreen();
    if (bufferFrameCount > 0) {
      bufferFrameCount--;
    } else if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 6 && mouseY < height / 6 + height / 8) {
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
    drawScreen2();
  } else if (currentScreen === "screen3") {
    drawScreen3();
  } else if (currentScreen === "screen4") {
    drawScreen4();
  }
}

function drawHomeScreen() {
  background(80, 80, 150);
  fill(255);
  rect(width / 4, height / 6, width / 2, height / 8);   //Game #1 button
  rect(width / 4, height / 3, width / 2, height / 8);   //Game #2 button
  rect(width / 4, height / 2, width / 2, height / 8);   //Game #3 button
  rect(width / 4, height / 1.5, width / 2, height / 8); //Game #4 button
  
  //Text for the Main Menu title
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(64);
  text("Demo", width / 4, height / 6 - 100, width / 2, height / 8);
  
  //Text for Gael's Game (#1)
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(32);
  text("Keyboard Typing", width / 4, height / 6, width / 2, height / 8);
  
  //Text for Aliya's Game (#2)
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(32);
  text("Shape Match Up", width / 4, height / 3, width / 2, height / 8);

  //Text for Jack's Game (#3)
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(32);
  text("Letter Tracing", width / 4, height / 2, width / 2, height / 8);

  //Text for Pranay's Game (#4)
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(32);
  text("Rhythm Arrow Game", width / 4, height / 1.5, width / 2, height / 8);

}

//Gael's section
function drawScreen1() {
  background(200, 100, 100);
  keyboard_game_runner.drawKeyboard();
}

//Aliya's section
function drawScreen2() {
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

//Jack's section
function drawScreen3() {
  if (letter_trace_runner.gameIsComplete()) {
    letter_trace_runner.drawCompleteScreen();
    if (mouseIsPressed && mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 && mouseY < height / 2 + height / 8) {
      letter_trace_runner.resetGame();
      currentScreen = "home";
      bufferFrameCount = 10;
    }
  } else if (letter_trace_runner.screenIsComplete()) {
    letter_trace_runner.transition();
  } else if (mouseIsPressed) {
    letter_trace_runner.drawGame();
  } 
}

//Pranay's section
function drawScreen4() {
  if (game_4_started == false) {
    game_4_started = true;
    arrow_game_runner.start_game();
  }
  else if (!arrow_game_runner.game_is_over()) {
    arrow_game_runner.play_game();
  }
  else if (arrow_game_runner.game_is_over()) {
    arrow_game_runner.end_game();
  }
  
}

function keyPressed() {
  //Logic for Pranay's Game (#4)
  if (game_4_started == true && !arrow_game_runner.game_is_over()) {
    arrow_game_runner.get_hit_type(keyCode);
  }
  //Logic for Jack's Game (#3)
  else if (currentScreen === "screen3") {
    letter_trace_runner.debugSkip(keyCode);
  }
  //Logic for Gael's game (#1)
  else if (currentScreen === "screen1") {
    letter_trace_runner.handleKeyPress(keyCode);
  }


}

function mouseClicked() {
  //Logic for Pranay's Game (#4)
  if (game_4_started && arrow_game_runner.game_is_over()) {
    if (arrow_game_runner.retry_button.mouse_is_hovering()) {
      arrow_game_runner.start_game();
    }
    if (arrow_game_runner.menu_button.mouse_is_hovering()) {
      currentScreen = "home";
      game_4_started = false;
    }
  }
}

function mousePressed() {
  //Logic for Aliya's game (#2)
  if (currentScreen === "screen2") {
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
}

function mouseDragged() {
  //Logic for Aliya's game (#2)
  if (currentScreen === "screen2") {    
    if (selected === "circle") {
      circleX = mouseX - offsetX;
      circleY = mouseY - offsetY;
    } else if (selected === "rect") {
      rectX = mouseX - offsetX;
      rectY = mouseY - offsetY;
    }
  }
}

function mouseReleased() {
  //Logic for Aliya's game (#2)
  if (currentScreen === "screen2") {
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
}

/*IMPORTANT!!
  Leave everything below as it is. We've set up our modules in a way
  that this file acts as a runner, so p5js needs to 'see' these functions.
  The other alternative was to write our modules in instance mode, which
  we decided against in favor of easier-to-write modules.
*/
window.preload = preload;
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
window.mouseClicked = mouseClicked;
window.mousePressed = mousePressed;
window.mouseDragged = mouseDragged;
window.mouseReleased = mouseReleased;