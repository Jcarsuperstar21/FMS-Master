//Find next arrow in list
//How far away is it from "end"
//Have listener wait for keypress
//Do the math

export class ArrowGameRunner {
  constructor() {
    ;
  }

  start_game() {
    // this.listener = new ButtonListener();
    this.arrow_list = [
      new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16),
      new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16),
    ];
    this.arrow_indx = 0; //index to track the arrows in arrow_list
    background(135, 206, 235);

  }

  /*This method is called inside a loop */
  draw_game() {
    let arrow = this.arrow_list[this.arrow_indx];
    arrow.show();
    arrow.y--;

    if (arrow.dist_from_end() <= 0) {
      this.arrow_indx++;
    }
  }

  check_hit(key_code) {
    if (key_code == LEFT_ARROW && this.arrow_list[this.arrow_indx] instanceof LeftArrow) {
      console.log("HIT");
    }
    // else if (key_code == RIGHT_ARROW && this.arrow_list[this.arrow_indx] instanceof LeftArrow) {
      
    // }
    // else if (key_code == UP_ARROW && this.arrow_list[this.arrow_indx] instanceof LeftArrow) {
      
    // }
    // else if (key_code == DOWN_ARROW && this.arrow_list[this.arrow_indx] instanceof LeftArrow) {
      
    // }
  }
}

class Arrow {

  constructor(color, x_pos, y_pos) {
    this.color = color;
    this.x = x_pos;
    this.y = y_pos;
    this.end_zone = windowHeight / 10;

    this.img_w = 1083;
    this.img_h = 816;
    this.img = loadImage('/assets/arrow_left.png'); //pngwing.com
  }

  dist_from_end() {
    return this.y - this.end_zone;
  }
}

class LeftArrow extends Arrow {

  show() {
    background(135, 206, 235);
    this.img.resize(this.img_w / 16, this.img_h / 16);
    image(this.img, this.x, this.y);
  }

}
// class RightArrow extends Arrow {

//   show() {
//     background(135, 206, 235);
//     this.img.resize(this.img_w / 16, this.img_h / 16);
//     image(this.img, this.x, this.y);
//   }

// }
// class UpArrow extends Arrow {

//   show() {
//     background(135, 206, 235);
//     this.img.resize(this.img_w / 16, this.img_h / 16);
//     image(this.img, this.x, this.y);
//   }

// }
// class DownArrow extends Arrow {

//   show() {
//     background(135, 206, 235);
//     this.img.resize(this.img_w / 16, this.img_h / 16);
//     image(this.img, this.x, this.y);
//   }

// }