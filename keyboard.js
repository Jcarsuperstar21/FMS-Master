export class Keyboard {

  constructor() {
    this.inputColors = ["lightpink", "navy", "turquoise", "yellow", "darkbrown", "magenta", "maroon", "blue", "purple", "orange"];

    this.resetPattern();
  }

  resetPattern() {
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
    textSize(32);
    text("0", 1085, 505);

    fill(this.inputColors[1]);
    rect(355, 300, 110, 110, 20);
    textSize(32);
    text("1", 185, 355);

    fill(this.inputColors[2]);
    rect(580, 300, 110, 110, 20);
    textSize(32);
    text("2", 410, 355);

    fill(this.inputColors[3]);
    rect(805, 300, 110, 110, 20);
    textSize(32);
    text("3", 635, 355);

    fill(this.inputColors[4]);
    rect(1030, 300, 110, 110, 20);
    textSize(32);
    text("4", 860, 355);

    fill(this.inputColors[5]);
    rect(130, 450, 110, 110, 20);
    textSize(32);
    text("5", 1085, 355);

    fill(this.inputColors[6]);
    rect(355, 450, 110, 110, 20);
    textSize(32);
    text("6", 185, 505);

    fill(this.inputColors[7]);
    rect(580, 450, 110, 110, 20);
    textSize(32);
    text("7", 410, 505);

    fill(this.inputColors[8]);
    rect(805, 450, 110, 110, 20);
    textSize(32);
    text("8", 635, 505);

    fill(this.inputColors[9]);
    rect(1030, 450, 110, 110, 20);
    textSize(32);
    text("9", 860, 505);

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

    fill("black");
    textSize(32);
    text("Match the Colors, Press the Keys in Order!", 635, 25);

  }
  handleKeyPress(pressedKey) {
    console.log(`Key pressed: ${pressedKey}`);
      if (!/^[0-9]$/.test(pressedKey)) {
        return;
      }

      const inputIndex = pressedKey === "0" ? 9 : Number(pressedKey) - 1;

      if (this.inputColors[inputIndex] !== this.outputColors[this.currentOutputIndex]) {
        return;
      }
      console.log('correct');
      this.currentOutputIndex++;
      if (this.currentOutputIndex === this.outputColors.length) {
        this.resetPattern();

        // Add completion animation or sound effect here
        }
      }
    }

  //Detecting key presses and implementing functionality(Using if statements with true/false conditions)

  //Add sound effects (maybe) and/or completion animations when the user presses the correct key in the correct order/completes the pattern.