/* Short-n-sweet explanation:
  Wait for keypress
  Find how far the arrow in the list is from the endzone
  Calculate the distance and display the appropriate message
  Show the end results, menu button, and retry button
  NOTE: All of these functions are effectively being called inside a while loop (once per frame)
*/

export class ArrowGameRunner {
  constructor(img) {
    this.arrow_img = img;
  }

  init() {

    this.speed = 3;
    this.start_zone = [10 * windowWidth / 16, 10 * windowHeight / 16];
    this.end_zone   = [10 * windowWidth / 16, windowHeight / 10];
    this.arrow_list = [
      new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
      new LeftArrow('red', this.start_zone[0], this.start_zone[1], this.arrow_img),
      new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
      new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
    ];

    this.retry_button = new CanvasButton(windowWidth / 2 - 200, 3 * windowHeight / 4, 200, 100, "Retry");
    this.menu_button  = new CanvasButton(windowWidth / 2, 3 * windowHeight / 4, 200, 100, "Menu");

    /* This commented block contains a more complete note list
      for the song "The Ants Go Marching", more accurate pitch
      mappings, and even beats
    let startY = 10 * windowHeight / 16;
    let laneL = 10 * windowWidth / 16;
    let laneU = 12 * windowWidth / 16;
    let laneD = 14 * windowWidth / 16;
    let laneR = 15 * windowWidth / 16;
    let beat = 120; // Pixel distance between quarter notes
    this.arrow_list = [
      // "The ants" (Low notes)
      new DownArrow('red', laneD, startY + beat * 0),
      new DownArrow('red', laneD, startY + beat * 1),
      
      // "go march-ing" (Rising to high notes)
      new LeftArrow('red', laneL, startY + beat * 2),
      new UpArrow('red', laneU, startY + beat * 3),
      new UpArrow('red', laneU, startY + beat * 4),

      // "one by one," (Descending notes)
      new RightArrow('red', laneR, startY + beat * 5),
      new LeftArrow('red', laneL, startY + beat * 6),
      new DownArrow('red', laneD, startY + beat * 7),

      // "hurrah," (Quick off-beat jumps)
      new LeftArrow('red', laneL, startY + beat * 8.5),
      new UpArrow('red', laneU, startY + beat * 9.5),

      // "hurrah,"
      new LeftArrow('red', laneL, startY + beat * 11),
      new UpArrow('red', laneU, startY + beat * 12),

      // "The ants" 
      new DownArrow('red', laneD, startY + beat * 14),
      new DownArrow('red', laneD, startY + beat * 15),

      // "go march-ing" 
      new LeftArrow('red', laneL, startY + beat * 16),
      new UpArrow('red', laneU, startY + beat * 17),
      new UpArrow('red', laneU, startY + beat * 18),

      // "two by two" 
      new RightArrow('red', laneR, startY + beat * 19),
      new LeftArrow('red', laneL, startY + beat * 20),
      new DownArrow('red', laneD, startY + beat * 21)
    ];
    */

    //Below instance variables are all state-trackers concerning messages, the note list, and statistics
    this.game_over  = false;
    this.arrow_indx = 0; //iterator of arrow_list to track each arrow
    this.msg_timer  = 0;
    this.current_msg = "";
    this.msg_color   = "";
    this.stats = [
      0, //0th index tracks perfect hits
      0, //1st index tracks good hits
      0, //2nd index tracks misses
      0  //3rd index tracks if the user has already missed the current note, for accurate statistics
    ];
  }

  start_game() {
    background(135, 206, 235);
    this.init();

  }

  display_hit_or_miss(msg) {
    this.current_msg = msg;
    switch (msg) {
      case "Miss!":
        this.msg_color = "black";
        break;
      case "Good!":
        this.msg_color = "green";
        break;
      case "Perfect!":
        this.msg_color = "blue";
        break;
    }
    this.msg_timer = 60;
  }

  play_game() {
    
    push();
    //1: background is the bottommost layer
    background(135, 206, 235);

    //2: endzone is the 2nd from bottom
    fill('gray');
    noStroke();
    rect(this.end_zone[0], this.end_zone[1], 1000, 816/16 + 25);

    //3: arrow is the 3rd from bottom
    let arrow = this.arrow_list[this.arrow_indx];
    arrow.show();
    arrow.y -= this.speed;

    //4: Draw the message as the topmost layer if the timer is active
    if (this.msg_timer > 0 && this.msg != "") {
      translate(windowWidth / 2, windowHeight / 2);
      
      fill(this.msg_color);
      textSize(32);
      text(this.current_msg, 0 - 200, 0, 200, 100);
      this.msg_timer--;
    }

    if (this.arrow_list[this.arrow_indx].dist_from_end() < 0) {
        this.stats[3]++;
        this.display_hit_or_miss("Miss!");
        console.log("MISS");
        //If the note is missed for the FIRST time, count it as a miss
        if (this.stats[3] == 1) {
          this.stats[2]++;
        }
        this.arrow_indx++;
        if (this.arrow_indx >= this.arrow_list.length) {
          this.game_over = true;
        }
    }

    pop();
  }

  //Helper for get_hit_type
  check_hit_correct(key_code) {
    switch(key_code) {
      case LEFT_ARROW:
        if (this.arrow_list[this.arrow_indx] instanceof LeftArrow) {
          // console.log("HIT LEFT");
          return true;
        }
        break;

      case RIGHT_ARROW:
        if (this.arrow_list[this.arrow_indx] instanceof RightArrow) {
          // console.log("HIT RIGHT");
          return true;
        }
        break;
        
      case UP_ARROW:
        if (this.arrow_list[this.arrow_indx] instanceof UpArrow) {
          // console.log("HIT UP");
          return true;
        }
        break;

      case DOWN_ARROW:
        if (this.arrow_list[this.arrow_indx] instanceof DownArrow) {
          // console.log("HIT DOWN");
          return true;
        }
        break;
    }

    return false;
  }

  /*This function will be called inside keyPressed(),
      meaning it will only execute when keyPressed executes.
      Note that there are TWO miss checks because:
      1. The player can miss on the correct key IF the key
        is pressed outside the endzone.
      2. The player can miss if they press one of the other
        3 keys.
   */
  get_hit_type(key_code) {
    if (this.check_hit_correct(key_code) == true) {
      if (this.arrow_list[this.arrow_indx].dist_from_end() <= 25) {
        this.display_hit_or_miss("Perfect!");
        console.log("PERFECT");
        this.stats[0]++;
        this.arrow_indx++;
        if (this.arrow_indx >= this.arrow_list.length) {
          this.game_over = true;
        }
      }
      else if (this.arrow_list[this.arrow_indx].dist_from_end() <= 50) {
        this.display_hit_or_miss("Good!");
        console.log("GOOD");
        this.stats[1]++;
        this.arrow_indx++;
        if (this.arrow_indx >= this.arrow_list.length) {
          this.game_over = true;
        }
      }
      else {
          this.stats[3]++;
          this.display_hit_or_miss("Miss!");
          console.log("MISS");
          //If the note is missed for the FIRST time, count it as a miss 
          if (this.stats[3] == 1) {
            this.stats[2]++;
          }
      }
    }
    else {
        this.stats[3]++;
        this.display_hit_or_miss("Miss!");
        console.log("MISS");
        //If the note is missed for the FIRST time, count it as a miss
        if (this.stats[3] == 1) {
          this.stats[2]++;
        }
    }

  }

  end_game() {
    //Calculating the stats for display
    let perfect_rate = this.stats[0] / this.arrow_list.length;
    let good_rate    = this.stats[1] / this.arrow_list.length;
    let miss_rate    = this.stats[2] / this.arrow_list.length;
    let hit_rate     = perfect_rate + good_rate;

    let msg_perfect = `Perfects: ${this.stats[0]} out of ${this.arrow_list.length} = ${perfect_rate * 100}%`;
    let msg_good    = `Goods: ${this.stats[1]} out of ${this.arrow_list.length} = ${good_rate * 100}%`;
    let msg_miss    = `Misses: ${this.stats[2]} out of ${this.arrow_list.length} = ${miss_rate * 100}%`;
    let msg_hit     = `Hits: ${this.stats[0] + this.stats[1]} out of ${this.arrow_list.length} = ${hit_rate * 100}%`;

    push();
    translate(windowWidth / 2, windowHeight / 2);

    //1: background is the bottommost layer
    background(135, 206, 235);

    textAlign(CENTER, CENTER);
    
    fill("black");
    textSize(64);
    // Removed bounding boxes and adjusted Y-coordinates to prevent overlap
    text("Good job! Results:", 0, -200);

    textSize(32);
    text(msg_perfect, 0, -100);
    text(msg_good, 0, -50);
    text(msg_miss, 0, 0);
    text(msg_hit, 0, 50);

    pop();

    this.retry_button.show();
    this.menu_button.show();
  }

  game_is_over() {
    return this.game_over;
  }

}

//CanvasButton is used to display the menu and retry buttons
class CanvasButton {
  constructor(x, y, w, h, label, bgColor = 255, textColor = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.bgColor = bgColor;
    this.textColor = textColor;
  }

  show() {
    push();
    
    // Draw the button rectangle
    fill(this.bgColor);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 10); // The 10 adds rounded corners

    // Draw the centered text
    fill(this.textColor);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    
    // Position text exactly in the middle of the defined rectangle
    text(this.label, this.x + (this.w / 2), this.y + (this.h / 2));
    
    pop();
  }

  /*Returns true if the mouse is currently hovering over the button.
    Note that any calls to translate() will break this logic.
  */
  mouse_is_hovering() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    );
  }
}

class Arrow {

  constructor(color, x_pos, y_pos, img) {
    this.color = color;
    this.x = x_pos;
    this.y = y_pos;
    this.end_zone = windowHeight / 10;

    this.img_w = 1083;
    this.img_h = 816;
    this.img = img
  }

  dist_from_end() {
    return this.y - this.end_zone;
  }

}

//----------------------Duplicate children (more or less) of Arrow below this point----------------------

class LeftArrow extends Arrow {

  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);

    // push();
    // translate();

    image(this.img, this.x, this.y);
  }

}
class RightArrow extends Arrow {

  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);

    //Saving the caller's transformations and styles so this can modify locally
    push();

    //Moving the origin of rotation to the center of the image
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    //Rotating by 180 degrees, so now the arrow points right
    rotate(PI);

    imageMode(CENTER);
    image(this.img, 0, 0);

    //Restoring the caller's transformations and styles
    pop();
  }

}
class UpArrow extends Arrow {

  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);

    //Saving the caller's transformations and styles so this can modify locally
    push();

    //Moving the origin of rotation to the center of the image
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    //Rotating by 90 degrees, so now the arrow points up
    rotate(PI / 2);

    imageMode(CENTER);
    image(this.img, 0, 0);

    //Restoring the caller's transformations and styles
    pop();
  }

}
class DownArrow extends Arrow {

  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);

    //Saving the caller's transformations and styles so this can modify locally
    push();

    //Moving the origin of rotation to the center of the image
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    //Rotating by -90 degrees, so now the arrow points down
    rotate(-PI / 2);

    imageMode(CENTER);
    image(this.img, 0, 0);

    //Restoring the caller's transformations and styles
    pop();
  }

}