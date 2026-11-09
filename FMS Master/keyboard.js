export class Keyboard {

  constructor() {
    this.inputColors = ["lightpink", "lightblue", "red", "yellow", "brown", "grey", "maroon", "blue", "purple", "orange"];

    this.outputColors = Array.from({length: 5}, () => random(this.inputColors));

    this.currentOutputIndex = 0;
  }

  drawKeyboard() {
    background("lightblue");

    //structure of the keyboard 
    fill("black");
    strokeWeight(3);
    fill("green");
    rect(50, 250, 1175, 410, 40);

    fill("black");
    strokeWeight(4);
    fill("lightgreen");
    rect(70, 50, 1125, 200, 40);

    //keys of the keyboard (10 keys)
    strokeWeight(3);
    fill(this.inputColors[0]);
    rect(130, 300, 110, 110, 20);

    fill(this.inputColors[1]);
    rect(355, 300, 110, 110, 20);

    fill(this.inputColors[2]);
    rect(580, 300, 110, 110, 20);

    fill(this.inputColors[3]);
    rect(805, 300, 110, 110, 20);

    fill(this.inputColors[4]);
    rect(1030, 300, 110, 110, 20);

    fill(this.inputColors[5]);
    rect(130, 450, 110, 110, 20);

    fill(this.inputColors[6]);
    rect(355, 450, 110, 110, 20);

    fill(this.inputColors[7]);
    rect(580, 450, 110, 110, 20);

    fill(this.inputColors[8]);
    rect(805, 450, 110, 110, 20);

    fill(this.inputColors[9]);
    rect(1030, 450, 110, 110, 20);

    //Extra keys of the keyboard (3 keys)
    fill("grey");
    rect(297.5, 590, 675, 60, 20);
    rect(130, 590, 130, 60, 20);
    rect(1010, 590, 130, 60, 20);

    //Output Keys
    strokeWeight(3);
    fill(this.outputColors[0]);
    rect(160, 80, 130, 130, 20);

    fill(this.outputColors[1]);
    rect(360, 80, 130, 130, 20);

    fill(this.outputColors[2]);
    rect(551, 80, 130, 130, 20);

    fill(this.outputColors[3]);
    rect(752, 80, 130, 130, 20);

    fill(this.outputColors[4]);
    rect(943, 80, 130, 130, 20);
  }
  handleKeyPress(pressedKey) {
      if (!/^[0-9]$/.test(pressedKey)) {
        return;
      }

      const inputIndex = pressedKey === "0" ? 9 : Number(pressedKey) - 1;

      if (this.currentOutputIndex < this.outputColors.length &&
        this.inputColors[inputIndex] === this.outputColors[this.currentOutputIndex]) { this.currentOutputIndex++;

      }
    }

  //Icons for the keys (1-10) and the extra keys (next, previous, menu)
  // key === '1' (key 1) emoji icon
  // key === '2' (key 2) emoji icon
  // key === '3' (key 3) emoji icon
  // key === '4' (key 4) emoji icon
  // key === '5' (key 5) emoji icon
  // key === '6' (key 6) emoji icon
  // key === '7' (key 7) emoji icon
  // key === '8' (key 8) emoji icon
  // key === '9' (key 9) emoji icon
  // key === '0' (key 10) emoji icon

  //Detecting key presses and changing the color of the keys (Using "if" statements with true/false conditions)
  // if (keyIsPressed) {
  // Use p5.js 'key' variable to detect key presses
  //if (key === '1') {
  //fill("lightgreen");
  //} else {
  //fill("lightgrey");
  //}
  //if (key === '2') {
  //fill ("red");

  //Random generated combinations of icons that will be displayed on the output keys

  //Add sound effects
}
