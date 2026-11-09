export class LetterTraceRunner {

    screenComplete = true;
    currentLetter = 'A';
    inTransition = true;
    transitionFrameCount = 60;
    gameComplete = false;  
    
    constructor() {
        this.loadImages();
        this.hitBox1 = new letterhb();
        this.hitBox2 = new letterhb();
        this.hitBox3 = new letterhb();
        this.hitBox4 = new letterhb();
        this.hitBox5 = new letterhb();
    }

    loadImages () {
        this.imgA = loadImage('letter_Assets/A.png');
        this.imgB = loadImage('letter_Assets/B.png');
        this.imgC = loadImage('letter_Assets/C.png');
        this.imgD = loadImage('letter_Assets/D.png');
        this.imgE = loadImage('letter_Assets/E.png');
        this.imgF = loadImage('letter_Assets/F.png');
        this.imgG = loadImage('letter_Assets/G.png');
        this.imgH = loadImage('letter_Assets/H.png');
        this.imgI = loadImage('letter_Assets/I.png');
        this.imgJ = loadImage('letter_Assets/J.png');
        this.imgK = loadImage('letter_Assets/K.png');
        this.imgL = loadImage('letter_Assets/L.png');
        this.imgM = loadImage('letter_Assets/M.png');
        this.imgN = loadImage('letter_Assets/N.png');
        this.imgO = loadImage('letter_Assets/O.png');
        this.imgP = loadImage('letter_Assets/P.png');
        this.imgQ = loadImage('letter_Assets/Q.png');
        this.imgR = loadImage('letter_Assets/R.png');
        this.imgS = loadImage('letter_Assets/S.png');
        this.imgT = loadImage('letter_Assets/T.png');
        this.imgU = loadImage('letter_Assets/U.png');
        this.imgV = loadImage('letter_Assets/V.png');
        this.imgW = loadImage('letter_Assets/W.png');
        this.imgX = loadImage('letter_Assets/X.png');
        this.imgY = loadImage('letter_Assets/Y.png');
        this.imgZ = loadImage('letter_Assets/Z.png');
        this.transitionAudio = createAudio('letter_Assets/Yay.mp3');
    }

    drawCompleteScreen() {  
        background(100, 200, 100);
        textSize(32);
        fill(0);
        textAlign(CENTER, CENTER);
        text("Congratulations! You have completed the letter tracing game!", width/2, height/4);
        fill(255);
        rect(width / 4, height / 2, width / 2, height / 8);
    }


    gameIsComplete() {
        return this.gameComplete;
    }

    resetGame() {
        this.currentLetter = 'A';
        this.inTransition = true;
        this.transitionFrameCount = 60;
        this.gameComplete = false;
    }

    transition() {
        if (this.transitionFrameCount == 0) {
            this.transitionAudio.play();
        }
        if (this.transitionFrameCount < 60) {
        this.transitionFrameCount++;
        } else if (this.transitionFrameCount == 60) {
            this.transitionFrameCount = 0;
            this.inTransition = false;
            this.newLetter();
          }
    }

    newLetter() {
        background(100, 200, 100);
        imageMode(CENTER);
        tint(255, 128);
        switch (this.currentLetter) {
            case 'A':
                image(this.imgA, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(755, 670);
                this.hitBox2.updatePosition(930, 300);
                this.hitBox3.updatePosition(1111, 670);
                this.hitBox4.updatePosition(995, 565);
                this.hitBox5.updatePosition(850, 565);
                break;
            case 'B':
                image(this.imgB, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(790, 290);
                this.hitBox2.updatePosition(877, 283);
                this.hitBox3.updatePosition(790, 470);
                this.hitBox4.updatePosition(885, 650);
                this.hitBox5.updatePosition(790, 650);
                break;
            case 'C':
                image(this.imgC, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(1090, 380);
                this.hitBox2.updatePosition(770, 390);
                this.hitBox3.updatePosition(805, 360);
                this.hitBox4.updatePosition(1090, 595);
                break;
            case 'D':
                image(this.imgD, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(790, 305);
                this.hitBox2.updatePosition(790, 675);
                this.hitBox3.updatePosition(1100, 490);
                this.hitBox4.updatePosition(850, 670);
                this.hitBox5.updatePosition(855, 300);
                break;
            case 'E':
                image(this.imgE, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(795, 300);
                this.hitBox2.updatePosition(1040, 300);
                this.hitBox3.updatePosition(1040, 480);
                this.hitBox4.updatePosition(795, 666);
                this.hitBox5.updatePosition(1040, 666);
                break;
            case 'F':
                image(this.imgF, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(815, 290);
                this.hitBox2.updatePosition(1060, 285);
                this.hitBox3.updatePosition(815, 470);
                this.hitBox4.updatePosition(1000, 470);
                this.hitBox5.updatePosition(815, 655);
                break;
            case 'G':
                image(this.imgG, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(1100, 380);
                this.hitBox2.updatePosition(758, 490);
                this.hitBox3.updatePosition(1031, 655);
                this.hitBox4.updatePosition(1100, 488);
                this.hitBox5.updatePosition(980, 485);
                break;
            case 'H':
                image(this.imgH, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(785, 300);
                this.hitBox2.updatePosition(785, 666);
                this.hitBox3.updatePosition(937, 480);
                this.hitBox4.updatePosition(1088, 300);
                this.hitBox5.updatePosition(1088, 666);
                break;
            case 'I':
                image(this.imgI, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(934, 305);
                this.hitBox2.updatePosition(934, 472);
                this.hitBox3.updatePosition(934, 675);
                break;
            case 'J':
                image(this.imgJ, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(1034, 288);
                this.hitBox2.updatePosition(1022, 605);
                this.hitBox3.updatePosition(897, 662);
                this.hitBox4.updatePosition(815, 592);
                break;
            case 'K':
                image(this.imgK, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(796, 300);
                this.hitBox2.updatePosition(797, 670);
                this.hitBox3.updatePosition(1066, 300);
                this.hitBox4.updatePosition(964, 543);
                this.hitBox5.updatePosition(1072, 669);
                break;
            case 'L':
                image(this.imgL, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(814, 302);
                this.hitBox2.updatePosition(815, 670);
                this.hitBox3.updatePosition(1066, 670);
                break;
            case 'M':
                image(this.imgM, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(762, 670);
                this.hitBox2.updatePosition(762, 300);
                this.hitBox3.updatePosition(936, 561);
                this.hitBox4.updatePosition(1105, 300);
                this.hitBox5.updatePosition(1105, 669);
                break;
            case 'N':
                image(this.imgN, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(776, 670);
                this.hitBox2.updatePosition(776, 300);
                this.hitBox3.updatePosition(936, 487);
                this.hitBox4.updatePosition(1093, 666);
                this.hitBox5.updatePosition(1092, 300);
                break;
            case 'O':
                image(this.imgO, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(740, 480);
                this.hitBox2.updatePosition(794, 355);
                this.hitBox3.updatePosition(782, 613);
                this.hitBox4.updatePosition(1112, 398);
                this.hitBox5.updatePosition(1114, 545);
                break;
            case 'P':
                image(this.imgP, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(811, 674);
                this.hitBox2.updatePosition(810, 295);
                this.hitBox3.updatePosition(935, 293);
                this.hitBox4.updatePosition(882, 545);
                break;
            case 'Q':
                image(this.imgQ, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(985, 658);
                this.hitBox2.updatePosition(844, 305);
                this.hitBox3.updatePosition(1112, 553);
                this.hitBox4.updatePosition(975, 540);
                this.hitBox5.updatePosition(1114, 662);
                break;
            case 'R':
                image(this.imgR, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(812, 662);
                this.hitBox2.updatePosition(810, 296);
                this.hitBox3.updatePosition(1076, 411);
                this.hitBox4.updatePosition(885, 538);
                this.hitBox5.updatePosition(1076, 675);
                break;
            case 'S':
                image(this.imgS, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(1052, 330);
                this.hitBox2.updatePosition(815, 386);
                this.hitBox3.updatePosition(945, 478);
                this.hitBox4.updatePosition(1052, 626);
                this.hitBox5.updatePosition(819, 638);
                break;
            case 'T':
                image(this.imgT, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(805, 297);
                this.hitBox2.updatePosition(1067, 297);
                this.hitBox3.updatePosition(934, 678);
                this.hitBox4.updatePosition(933, 355);
                break;
            case 'U':
                image(this.imgU, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(786, 294);
                this.hitBox2.updatePosition(819, 621);
                this.hitBox3.updatePosition(938, 674);
                this.hitBox4.updatePosition(1057, 621);
                this.hitBox5.updatePosition(1085, 296);
                break;
            case 'V':
                image(this.imgV, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(755, 292);
                this.hitBox2.updatePosition(939, 676);
                this.hitBox3.updatePosition(1124, 290);
                break;
            case 'W':
                image(this.imgW, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(681, 300);
                this.hitBox2.updatePosition(804, 677);
                this.hitBox3.updatePosition(938, 300);
                this.hitBox4.updatePosition(1059, 679);
                this.hitBox5.updatePosition(1197, 296);
                break;
            case 'X':
                image(this.imgX, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(785, 293);
                this.hitBox2.updatePosition(1082, 300);
                this.hitBox3.updatePosition(785, 671);
                this.hitBox4.updatePosition(1082, 675);
                this.hitBox5.updatePosition(933, 486);
                break;
            case 'Y':
                image(this.imgY, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(937, 670);
                this.hitBox2.updatePosition(786, 291);
                this.hitBox3.updatePosition(1088, 291);
                this.hitBox4.updatePosition(937, 468);
                break;
            case 'Z':
                image(this.imgZ, width/2, height/2);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(793, 300);
                this.hitBox2.updatePosition(1076, 300);
                this.hitBox3.updatePosition(790, 666);
                this.hitBox4.updatePosition(1079, 666);
                break;
        }
        noTint();
        this.screenComplete = false;
    }

    debugSkip(x) {
        if (x == 32) {
        console.log("Skipping to next letter");
        this.switchLetter();
        this.screenComplete = true;
        }
    }

    drawGame() {
        fill(0);
        circle(mouseX, mouseY, 8);
        console.log("mouseX: " + mouseX + ", mouseY: " + mouseY);
        this.hitBox1.traceCheck(mouseX, mouseY);
        this.hitBox2.traceCheck(mouseX, mouseY);
        this.hitBox3.traceCheck(mouseX, mouseY);
        this.hitBox4.traceCheck(mouseX, mouseY);
        this.hitBox5.traceCheck(mouseX, mouseY);
        if (this.hitBox1.isHit() && this.hitBox2.isHit() && this.hitBox3.isHit() && this.hitBox4.isHit() && this.hitBox5.isHit()) {
            this.switchLetter();
            this.inTransition = true;
            this.screenComplete = true;
        }
    }

    switchLetter() {
        switch (this.currentLetter) {
                case 'A':
                    this.currentLetter = 'B';
                    break;
                case 'B':
                    this.currentLetter = 'C';
                    break;
                case 'C':
                    this.currentLetter = 'D';
                    break;
                case 'D':
                    this.currentLetter = 'E';
                    break;
                case 'E':
                    this.currentLetter = 'F';
                    break;
                case 'F':
                    this.currentLetter = 'G';
                    break;
                case 'G':
                    this.currentLetter = 'H';
                    break;
                case 'H':
                    this.currentLetter = 'I';
                    break;  
                case 'I':
                    this.currentLetter = 'J';
                    break;
                case 'J':
                    this.currentLetter = 'K';
                    break;
                case 'K':
                    this.currentLetter = 'L';
                    break;
                case 'L':
                    this.currentLetter = 'M';
                    break;
                case 'M':
                    this.currentLetter = 'N';
                    break;
                case 'N':
                    this.currentLetter = 'O';
                    break;
                case 'O':
                    this.currentLetter = 'P';
                    break;
                case 'P':
                    this.currentLetter = 'Q';
                    break;
                case 'Q':
                    this.currentLetter = 'R';
                    break;
                case 'R':
                    this.currentLetter = 'S';
                    break;
                case 'S':
                    this.currentLetter = 'T';
                    break;
                case 'T':
                    this.currentLetter = 'U';
                    break;
                case 'U':
                    this.currentLetter = 'V';
                    break;
                case 'V':
                    this.currentLetter = 'W';
                    break;
                case 'W':
                    this.currentLetter = 'X';
                    break;
                case 'X':
                    this.currentLetter = 'Y';
                    break;
                case 'Y':
                    this.currentLetter = 'Z';
                    break;
                case 'Z':
                    this.gameComplete = true;
                    break;
            }
    }

    screenIsComplete() {
        return this.screenComplete;
    }

    getCurrentLetter() {
        return this.currentLetter;
    }



}

export class letterhb {
    leftBound = 0;
    rightBound = 0;
    topBound = 0;
    bottomBound = 0;
    status = true;

    constructor() {
    }

    updatePosition(x, y) {
        this.leftBound = x - 25;
        this.rightBound = x + 25;
        this.topBound = y - 25;
        this.bottomBound = y + 25;
    }

    setStatus(status) {
        this.status = status;
    }

    isHit() {
        return this.status;
    }

    traceCheck(x, y) {
        if (x > this.leftBound && x < this.rightBound && y > this.topBound && y < this.bottomBound) {
            this.setStatus(true);
        }
    }
}
