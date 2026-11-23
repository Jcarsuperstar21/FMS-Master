/* Short-n-sweet explanation:
  Wait for keypress
  Find how far the arrow in the list is from the endzone
  Calculate the distance and display the appropriate message
  Show the end results, menu button, and retry button
  NOTE: All of these functions are effectively being called inside a while loop (once per frame)
*/
export class ArrowGameRunner {
  constructor(imgs) {
    this.arrow_img     = imgs[0];
    this.player_static = imgs[1];
    this.player_up     = imgs[2];
    this.player_down   = imgs[3];
    this.player_left   = imgs[4]; //left is just a rotation of the right img
    this.player_right  = imgs[5];
    this.player_fail   = imgs[6];
  }

  init() {
    this.speed = 3;
    this.start_zone = [10 * windowWidth / 16, 10 * windowHeight / 16];
    this.end_zone   = [10 * windowWidth / 16, windowHeight / 10];

    this.start_button = new CanvasButton(windowWidth / 2 - 50, 9 * windowHeight / 16, 100, 50, "Start");
    this.retry_button = new CanvasButton(windowWidth / 2 - 200, 3 * windowHeight / 4, 200, 100, "Retry");
    this.menu_button  = new CanvasButton(windowWidth / 2, 3 * windowHeight / 4, 200, 100, "Menu");
    
    //Below instance variables are all state-trackers concerning messages, the note list, and statistics
    this.on_start_menu = false;
    this.game_over     = false;
    this.game_playing  = false;
    this.arrow_indx = 0; //iterator of arrow_list to track each group of arrows
    this.msg_timer  = 0;
    this.player_anim_state  = "";
    this.current_msg        = "";
    this.msg_color          = "";
    this.stats = [
      0, //0th index tracks perfect hits
      0, //1st index tracks good hits
      0, //2nd index tracks misses
      0  //3rd index tracks how many wrong-key misses have been applied to the current group
    ];

    // Arrows grouped into arrays to support simultaneous notes
    this.arrow_list = [
      // 1. Single (Total: 1)
      [new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 2. Double (Total: 3)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 3. Single (Total: 4)
      [new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 4. Triple (Total: 7)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 5. Single (Total: 8)
      [new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 6. Single (Total: 9)
      [new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 7. Double (Total: 11)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 8. Triple (Total: 14)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 9. Single (Total: 15)
      [new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 10. Single (Total: 16)
      [new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 11. Double (Total: 18)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 12. Double (Total: 20)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 13. Triple (Total: 23)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 14. Single (Total: 24)
      [new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 15. Single (Total: 25)
      [new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 16. Double (Total: 27)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 17. Single (Total: 28)
      [new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 18. Triple (Total: 31)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 19. Single (Total: 32)
      [new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 20. Double (Total: 34)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 21. Double (Total: 36)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 22. Triple (Total: 39)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 23. Single (Total: 40)
      [new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 24. Single (Total: 41)
      [new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)],
      
      // 25. Double (Total: 43)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 26. Double (Total: 45)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 27. Triple (Total: 48)
      [
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new DownArrow('red', 14 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new RightArrow('red', 15 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ],
      
      // 28. Double (Total: 50)
      [
        new LeftArrow('red', 10 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img),
        new UpArrow('red', 12 * windowWidth / 16, 10 * windowHeight / 16, this.arrow_img)
      ]
    ];

    // Calculate total arrows for accurate statistics at the end of the game
    this.total_arrows = 0;
    for (let group of this.arrow_list) {
      this.total_arrows += group.length;
    }
  }

  draw_start_menu() {
    this.init();
    this.on_start_menu = true;

    background(135, 206, 235);
    
    push();
    textAlign(CENTER, CENTER);
    fill("black");
    
    textSize(32);
    text("Instructions:\nArrows will rise to the end-zone at the top of the screen.\nPress the matching key when they get to the zone!", windowWidth / 2, windowHeight / 2 - 50);
    this.start_button.show();
    pop();
  }

  draw_player(state) {
    push();
    translate(windowWidth / 4, windowHeight / 3);

    switch (state) {
      case 'static':
        image(this.player_static, 0, 0);
        break;
      case 'fail': 
        let copy = this.player_fail.get();
        copy.resize(copy.width / 2, copy.height / 2);
        image(copy, 0, 0);
        break;
      case 'u':
        image(this.player_up, 0, 0);
        break;
      case 'd':
        image(this.player_down, 0, 0);
        break;
      case 'l':
        scale(-1,1); 
        image(this.player_right, -this.player_right.width, 0);
        break;
      case 'r':
        image(this.player_right, 0, 0);
        break;
    }

    pop();
  }

  set_msg(msg) {
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
    this.game_playing = true;

    push();
    //1: background is the bottommost layer
    background(255, 255, 255);

    //2: endzone is the 2nd from bottom
    fill('gray');
    noStroke();
    rect(this.end_zone[0], this.end_zone[1], 1000, 816/16 + 25);

    //3: arrow is the 3rd from bottom. Support multiple arrows by looping through the active group
    let current_group = this.arrow_list[this.arrow_indx];
    let unhit_arrows = current_group.filter(a => !a.hit);
    for (let arrow of unhit_arrows) {
      arrow.show();
      arrow.y -= this.speed;
    }

    //4: player is 4th
    this.draw_player(this.player_anim_state);

    //5: Draw the message as the topmost layer if the timer is active
    if (this.msg_timer > 0 && this.current_msg != "") {
      translate(1.2 * windowWidth / 3, 1.35 * windowHeight / 2);
      
      fill(this.msg_color);
      textSize(32);
      text(this.current_msg, 0 - 200, 0, 200, 100);
      this.msg_timer--;
    }

    // Checking if the active note group went past the end zone
    if (unhit_arrows.length > 0 && unhit_arrows[0].dist_from_end() < 0) {
        // Calculate misses, avoiding double penalization if wrong keys were already pressed for this group
        let remaining_to_miss = unhit_arrows.length - this.stats[3];
        if (remaining_to_miss > 0) {
            this.stats[2] += remaining_to_miss;
        }

        this.set_msg("Miss!");
        this.player_anim_state = 'fail';
        
        this.stats[3] = 0;
        this.arrow_indx++;
        if (this.arrow_indx >= this.arrow_list.length) {
          this.game_over = true;
        }
    }

    pop();
  }

  //Helper for get_hit_type: Checks the active group for the specific key type
  get_hit_target(key_code) {
    let current_group = this.arrow_list[this.arrow_indx];
    for (let arrow of current_group) {
      if (arrow.hit) continue; // Skip notes that are already hit in this group
      
      if (key_code === LEFT_ARROW && arrow instanceof LeftArrow) return arrow;
      if (key_code === RIGHT_ARROW && arrow instanceof RightArrow) return arrow;
      if (key_code === UP_ARROW && arrow instanceof UpArrow) return arrow;
      if (key_code === DOWN_ARROW && arrow instanceof DownArrow) return arrow;
    }
    return null;
  }

  assign_anim(key_code) {
    switch(key_code) {
      case LEFT_ARROW:
        this.player_anim_state = 'l';
        break;
      case RIGHT_ARROW:
        this.player_anim_state = 'r';
        break;
      case UP_ARROW:
        this.player_anim_state = 'u';
        break;
      case DOWN_ARROW:
        this.player_anim_state = 'd';
        break;
    }
  }

  get_hit_type(key_code) {
    let current_group = this.arrow_list[this.arrow_indx];
    let target_arrow = this.get_hit_target(key_code);
    let unhit_count = current_group.filter(a => !a.hit).length;

    if (target_arrow) {
      this.assign_anim(key_code);
      let dist = target_arrow.dist_from_end();
      
      if (dist <= 25) {
        this.set_msg("Perfect!");
        this.stats[0]++;
        target_arrow.hit = true;
      }
      else if (dist <= 50) {
        this.set_msg("Good!");
        this.stats[1]++;
        target_arrow.hit = true;
      }
      else {
        this.stats[3]++;
        this.set_msg("Miss!");
        this.player_anim_state = 'fail';
        // Only count up to the max number of unhit arrows to avoid extreme spamming penalties
        if (this.stats[3] <= unhit_count) {
          this.stats[2]++;
        }
      }
      
      // If all notes in the active group are hit, advance to the next group
      if (current_group.every(a => a.hit)) {
        this.stats[3] = 0;
        this.arrow_indx++;
        if (this.arrow_indx >= this.arrow_list.length) {
          this.game_over = true;
        }
      }
    }
    else {
        this.stats[3]++;
        this.set_msg("Miss!");
        this.player_anim_state = 'fail';
        if (this.stats[3] <= unhit_count) {
          this.stats[2]++;
        }
    }
  }

  end_game() {
    let total = this.total_arrows;
    let perfect_rate = this.stats[0] / total;
    let good_rate    = this.stats[1] / total;
    let miss_rate    = this.stats[2] / total;
    let hit_rate     = perfect_rate + good_rate;

    let msg_perfect = `Perfects: ${this.stats[0]} out of ${total} = ${(perfect_rate * 100).toFixed(2)}%`;
    let msg_good    = `Goods: ${this.stats[1]} out of ${total} = ${(good_rate * 100).toFixed(2)}%`;
    let msg_miss    = `Misses: ${this.stats[2]} out of ${total} = ${(miss_rate * 100).toFixed(2)}%`;
    let msg_hit     = `Hits: ${this.stats[0] + this.stats[1]} out of ${total} = ${(hit_rate * 100).toFixed(2)}%`;

    push();
    translate(windowWidth / 2, windowHeight / 2);
    background(135, 206, 235);
    textAlign(CENTER, CENTER);
    fill("black");
    textSize(64);
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

//CanvasButton is used to display the menu and retry buttons. 
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
    fill(this.bgColor);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 10); 

    fill(this.textColor);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    text(this.label, this.x + (this.w / 2), this.y + (this.h / 2));
    pop();
  }

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
    this.img = img;
    this.hit = false; // Added to support tracking independent hits per note group
  }

  dist_from_end() {
    return this.y - this.end_zone;
  }
}

class LeftArrow extends Arrow {
  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);
    image(this.img, this.x, this.y);
  }
}

class RightArrow extends Arrow {
  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);
    push();
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    rotate(PI);
    imageMode(CENTER);
    image(this.img, 0, 0);
    pop();
  }
}

class UpArrow extends Arrow {
  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);
    push();
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    rotate(PI / 2);
    imageMode(CENTER);
    image(this.img, 0, 0);
    pop();
  }
}

class DownArrow extends Arrow {
  show() {
    this.img.resize(this.img_w / 16, this.img_h / 16);
    push();
    translate(this.x + this.img_w / 32, this.y + this.img_h / 32);
    rotate(-PI / 2);
    imageMode(CENTER);
    image(this.img, 0, 0);
    pop();
  }
}