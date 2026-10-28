//IMPORTANT!!
import { ArrowGameRunner } from './arrow_game_runner.js';
import { LetterTraceRunner } from './letter_trace_runner.js';
//import { class } from 'path/to/your/file.js'; <- copy and paste me

let currentScreen = "home";
let game_1_started = false;
let game_2_started = false;
let game_3_started = false;
let game_4_started = false;
let arrow_game_runner;
let letter_trace_runner;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  arrow_game_runner = new ArrowGameRunner();
  letter_trace_runner = new LetterTraceRunner();
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
  if (letter_trace_runner.screenIsComplete()) {
    letter_trace_runner.newLetter();
  } else if (mouseIsPressed) {
    letter_trace_runner.drawGame();
  } 
}

function drawScreen4() {
  if (game_4_started == false) {
    game_4_started = true;
    arrow_game_runner.start_game();
  }
  else {
    arrow_game_runner.draw_game();
  }
  
}

function keyPressed() {
  if (game_4_started == true) {
    arrow_game_runner.check_hit(keyCode);
  }
}

//IMPORTANT!! Leave everything below as it is
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;