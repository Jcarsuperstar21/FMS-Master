export class LetterTraceRunner {

    screenComplete = true;
    currentLetter = 'A';

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
                this.hitBox5.updatePosition(870, 565);
                break;
            case 'B':
                image(this.imgB, width/2, height/2);
                break;
            case 'C':
                image(this.imgC, width/2, height/2);
                break;
            case 'D':
                image(this.imgD, width/2, height/2);
                break;
            case 'E':
                image(this.imgE, width/2, height/2);
                break;
            case 'F':
                image(this.imgF, width/2, height/2);
                break;
            case 'G':
                image(this.imgG, width/2, height/2);
                break;
            case 'H':
                image(this.imgH, width/2, height/2);
                break;
            case 'I':
                image(this.imgI, width/2, height/2);
                break;
            case 'J':
                image(this.imgJ, width/2, height/2);
                break;
            case 'K':
                image(this.imgK, width/2, height/2);
                break;
            case 'L':
                image(this.imgL, width/2, height/2);
                break;
            case 'M':
                image(this.imgM, width/2, height/2);
                break;
            case 'N':
                image(this.imgN, width/2, height/2);
                break;
            case 'O':
                image(this.imgO, width/2, height/2);
                break;
            case 'P':
                image(this.imgP, width/2, height/2);
                break;
            case 'Q':
                image(this.imgQ, width/2, height/2);
                break;
            case 'R':
                image(this.imgR, width/2, height/2);
                break;
            case 'S':
                image(this.imgS, width/2, height/2);
                break;
            case 'T':
                image(this.imgT, width/2, height/2);
                break;
            case 'U':
                image(this.imgU, width/2, height/2);
                break;
            case 'V':
                image(this.imgV, width/2, height/2);
                break;
            case 'W':
                image(this.imgW, width/2, height/2);
                break;
            case 'X':
                image(this.imgX, width/2, height/2);
                break;
            case 'Y':
                image(this.imgY, width/2, height/2);
                break;
            case 'Z':
                image(this.imgZ, width/2, height/2);
                break;
        }
        noTint();
        this.screenComplete = false;
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
            this.screenComplete = true;
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