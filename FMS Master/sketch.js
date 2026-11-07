//IMPORTANT!!
import { ArrowGameRunner } from './arrow_game_runner.js';
//import { class } from 'path/to/your/file.js'; <- copy and paste me

let currentScreen = "home";
let game_1_started = false;
let game_2_started = false;
let game_3_started = false;
let game_4_started = false;
let arrow_game_runner;
let game_4_arrow_img;

function preload() {
  game_4_arrow_img = loadImage('/arrow_game_assets/arrow_left.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  arrow_game_runner = new ArrowGameRunner(game_4_arrow_img);
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
  
  //----------------Text for Arrow Game (#4)----------------
  textAlign(CENTER, CENTER);
  fill('black');
  textSize(32);
  text("Arrow Game", width / 4, height / 1.5, width / 2, height / 8);
  //--------------------------------------------------------

  textAlign(CENTER, CENTER);
  fill('black');
  textSize(64);
  text("Demo", width / 4, height / 6 - 100, width / 2, height / 8);
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
  //----------------Logic for Arrow Game (#4)----------------
  if (game_4_started == true && !arrow_game_runner.game_is_over()) {
    arrow_game_runner.get_hit_type(keyCode);
  }
  //---------------------------------------------------------


}

function mouseClicked() {
  //----------------Logic for Arrow Game (#4)----------------
  if (game_4_started && arrow_game_runner.game_is_over()) {
    if (arrow_game_runner.retry_button.mouse_is_hovering()) {
      arrow_game_runner.start_game();
    }
    if (arrow_game_runner.menu_button.mouse_is_hovering()) {
      currentScreen = "home";
      game_4_started = false;
    }
  }
  //---------------------------------------------------------


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
