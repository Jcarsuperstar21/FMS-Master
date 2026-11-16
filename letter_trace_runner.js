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
        //1875 969
        background(100, 200, 100);
        imageMode(CENTER);
        tint(255, 128);
        switch (this.currentLetter) {
            case 'A':
                image(this.imgA, width/2, height/2, (this.imgA.width / 1875) * width, (this.imgA.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (755/1875), height * (670/969));
                this.hitBox2.updatePosition(width * (930/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (1111/1875), height * (670/969));
                this.hitBox4.updatePosition(width * (995/1875), height * (565/969));
                this.hitBox5.updatePosition(width * (850/1875), height * (565/969));
                break;
            case 'B':
                image(this.imgB, width/2, height/2, (this.imgB.width / 1875) * width, (this.imgB.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (790/1875), height * (290/969));
                this.hitBox2.updatePosition(width * (877/1875), height * (283/969));
                this.hitBox3.updatePosition(width * (790/1875), height * (470/969));
                this.hitBox4.updatePosition(width * (885/1875), height * (650/969));
                this.hitBox5.updatePosition(width * (790/1875), height * (650/969));
                break;
            case 'C':
                image(this.imgC, width/2, height/2, (this.imgC.width / 1875) * width, (this.imgC.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (1090/1875), height * (380/969));
                this.hitBox2.updatePosition(width * (770/1875), height * (390/969));
                this.hitBox3.updatePosition(width * (805/1875), height * (360/969));
                this.hitBox4.updatePosition(width * (1090/1875), height * (595/969));
                break;
            case 'D':
                image(this.imgD, width/2, height/2, (this.imgD.width / 1875) * width, (this.imgD.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (790/1875), height * (305/969));
                this.hitBox2.updatePosition(width * (790/1875), height * (675/969));
                this.hitBox3.updatePosition(width * (1100/1875), height * (490/969));
                this.hitBox4.updatePosition(width * (850/1875), height * (670/969));
                this.hitBox5.updatePosition(width * (855/1875), height * (300/969));
                break;
            case 'E':
                image(this.imgE, width/2, height/2, (this.imgE.width / 1875) * width, (this.imgE.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (795/1875), height * (300/969));
                this.hitBox2.updatePosition(width * (1040/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (1040/1875), height * (480/969));
                this.hitBox4.updatePosition(width * (795/1875), height * (666/969));
                this.hitBox5.updatePosition(width * (1040/1875), height * (666/969));
                break;
            case 'F':
                image(this.imgF, width/2, height/2, (this.imgF.width / 1875) * width, (this.imgF.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (815/1875), height * (290/969));
                this.hitBox2.updatePosition(width * (1060/1875), height * (285/969));
                this.hitBox3.updatePosition(width * (815/1875), height * (470/969));
                this.hitBox4.updatePosition(width * (1000/1875), height * (470/969));
                this.hitBox5.updatePosition(width * (815/1875), height * (655/969));
                break;
            case 'G':
                image(this.imgG, width/2, height/2, (this.imgG.width / 1875) * width, (this.imgG.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (1100/1875), height * (380/969));
                this.hitBox2.updatePosition(width * (758/1875), height * (490/969));
                this.hitBox3.updatePosition(width * (1031/1875), height * (655/969));
                this.hitBox4.updatePosition(width * (1100/1875), height * (488/969));
                this.hitBox5.updatePosition(width * (980/1875), height * (485/969));
                break;
            case 'H':
                image(this.imgH, width/2, height/2, (this.imgH.width / 1875) * width, (this.imgH.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (785/1875), height * (300/969));
                this.hitBox2.updatePosition(width * (785/1875), height * (666/969));
                this.hitBox3.updatePosition(width * (937/1875), height * (480/969));
                this.hitBox4.updatePosition(width * (1088/1875), height * (300/969));
                this.hitBox5.updatePosition(width * (1088/1875), height * (666/969));
                break;
            case 'I':
                image(this.imgI, width/2, height/2, (this.imgI.width / 1875) * width, (this.imgI.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (934/1875), height * (305/969));
                this.hitBox2.updatePosition(width * (934/1875), height * (472/969));
                this.hitBox3.updatePosition(width * (934/1875), height * (675/969));
                break;
            case 'J':
                image(this.imgJ, width/2, height/2, (this.imgJ.width / 1875) * width, (this.imgJ.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (1034/1875), height * (288/969));
                this.hitBox2.updatePosition(width * (1022/1875), height * (605/969));
                this.hitBox3.updatePosition(width * (897/1875), height * (662/969));
                this.hitBox4.updatePosition(width * (815/1875), height * (592/969));
                break;
            case 'K':
                image(this.imgK, width/2, height/2, (this.imgK.width / 1875) * width, (this.imgK.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (796/1875), height * (300/969));
                this.hitBox2.updatePosition(width * (797/1875), height * (670/969));
                this.hitBox3.updatePosition(width * (1066/1875), height * (300/969));
                this.hitBox4.updatePosition(width * (964/1875), height * (543/969));
                this.hitBox5.updatePosition(width * (1072/1875), height * (669/969));
                break;
            case 'L':
                image(this.imgL, width/2, height/2, (this.imgL.width / 1875) * width, (this.imgL.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (814/1875), height * (302/969));
                this.hitBox2.updatePosition(width * (815/1875), height * (670/969));
                this.hitBox3.updatePosition(width * (1066/1875), height * (670/969));
                break;
            case 'M':
                image(this.imgM, width/2, height/2, (this.imgM.width / 1875) * width, (this.imgM.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (762/1875), height * (670/969));
                this.hitBox2.updatePosition(width * (762/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (936/1875), height * (561/969));
                this.hitBox4.updatePosition(width * (1105/1875), height * (300/969));
                this.hitBox5.updatePosition(width * (1105/1875), height * (669/969));
                break;
            case 'N':
                image(this.imgN, width/2, height/2, (this.imgN.width / 1875) * width, (this.imgN.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (776/1875), height * (670/969));
                this.hitBox2.updatePosition(width * (776/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (936/1875), height * (487/969));
                this.hitBox4.updatePosition(width * (1093/1875), height * (666/969));
                this.hitBox5.updatePosition(width * (1092/1875), height * (300/969));
                break;
            case 'O':
                image(this.imgO, width/2, height/2, (this.imgO.width / 1875) * width, (this.imgO.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (740/1875), height * (480/969));
                this.hitBox2.updatePosition(width * (794/1875), height * (355/969));
                this.hitBox3.updatePosition(width * (782/1875), height * (613/969));
                this.hitBox4.updatePosition(width * (1112/1875), height * (398/969));
                this.hitBox5.updatePosition(width * (1114/1875), height * (545/969));
                break;
            case 'P':
                image(this.imgP, width/2, height/2, (this.imgP.width / 1875) * width, (this.imgP.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (811/1875), height * (674/969));
                this.hitBox2.updatePosition(width * (810/1875), height * (295/969));
                this.hitBox3.updatePosition(width * (935/1875), height * (293/969));
                this.hitBox4.updatePosition(width * (882/1875), height * (545/969));
                break;
            case 'Q':
                image(this.imgQ, width/2, height/2, (this.imgQ.width / 1875) * width, (this.imgQ.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (985/1875), height * (658/969));
                this.hitBox2.updatePosition(width * (844/1875), height * (305/969));
                this.hitBox3.updatePosition(width * (1112/1875), height * (553/969));
                this.hitBox4.updatePosition(width * (975/1875), height * (540/969));
                this.hitBox5.updatePosition(width * (1114/1875), height * (662/969));
                break;
            case 'R':
                image(this.imgR, width/2, height/2, (this.imgR.width / 1875) * width, (this.imgR.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (812/1875), height * (662/969));
                this.hitBox2.updatePosition(width * (810/1875), height * (296/969));
                this.hitBox3.updatePosition(width * (1076/1875), height * (411/969));
                this.hitBox4.updatePosition(width * (885/1875), height * (538/969));
                this.hitBox5.updatePosition(width * (1076/1875), height * (675/969));
                break;
            case 'S':
                image(this.imgS, width/2, height/2, (this.imgS.width / 1875) * width, (this.imgS.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (1052/1875), height * (330/969));
                this.hitBox2.updatePosition(width * (815/1875), height * (386/969));
                this.hitBox3.updatePosition(width * (945/1875), height * (478/969));
                this.hitBox4.updatePosition(width * (1052/1875), height * (626/969));
                this.hitBox5.updatePosition(width * (819/1875), height * (638/969));
                break;
            case 'T':
                image(this.imgT, width/2, height/2, (this.imgT.width / 1875) * width, (this.imgT.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (805/1875), height * (297/969));
                this.hitBox2.updatePosition(width * (1067/1875), height * (297/969));
                this.hitBox3.updatePosition(width * (934/1875), height * (678/969));
                this.hitBox4.updatePosition(width * (933/1875), height * (355/969));
                break;
            case 'U':
                image(this.imgU, width/2, height/2, (this.imgU.width / 1875) * width, (this.imgU.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (786/1875), height * (294/969));
                this.hitBox2.updatePosition(width * (819/1875), height * (621/969));
                this.hitBox3.updatePosition(width * (938/1875), height * (674/969));
                this.hitBox4.updatePosition(width * (1057/1875), height * (621/969));
                this.hitBox5.updatePosition(width * (1085/1875), height * (296/969));
                break;
            case 'V':
                image(this.imgV, width/2, height/2, (this.imgV.width / 1875) * width, (this.imgV.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(true);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (755/1875), height * (292/969));
                this.hitBox2.updatePosition(width * (939/1875), height * (676/969));
                this.hitBox3.updatePosition(width * (1124/1875), height * (290/969));
                break;
            case 'W':
                image(this.imgW, width/2, height/2, (this.imgW.width / 1875) * width, (this.imgW.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (681/1875), height * (300/969));
                this.hitBox2.updatePosition(width * (804/1875), height * (677/969));
                this.hitBox3.updatePosition(width * (938/1875), height * (300/969));
                this.hitBox4.updatePosition(width * (1059/1875), height * (679/969));
                this.hitBox5.updatePosition(width * (1197/1875), height * (296/969));
                break;
            case 'X':
                image(this.imgX, width/2, height/2, (this.imgX.width / 1875) * width, (this.imgX.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(false);
                this.hitBox1.updatePosition(width * (785/1875), height * (293/969));
                this.hitBox2.updatePosition(width * (1082/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (785/1875), height * (671/969));
                this.hitBox4.updatePosition(width * (1082/1875), height * (675/969));
                this.hitBox5.updatePosition(width * (933/1875), height * (486/969));
                break;
            case 'Y':
                image(this.imgY, width/2, height/2, (this.imgY.width / 1875) * width, (this.imgY.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (937/1875), height * (670/969));
                this.hitBox2.updatePosition(width * (786/1875), height * (291/969));
                this.hitBox3.updatePosition(width * (1088/1875), height * (291/969));
                this.hitBox4.updatePosition(width * (937/1875), height * (468/969));
                break;
            case 'Z':
                image(this.imgZ, width/2, height/2, (this.imgZ.width / 1875) * width, (this.imgZ.height / 969) * height);
                this.hitBox1.setStatus(false);
                this.hitBox2.setStatus(false);
                this.hitBox3.setStatus(false);
                this.hitBox4.setStatus(false);
                this.hitBox5.setStatus(true);
                this.hitBox1.updatePosition(width * (793/1875), height * (300/969));
                this.hitBox2.updatePosition(width * (1076/1875), height * (300/969));
                this.hitBox3.updatePosition(width * (790/1875), height * (666/969));
                this.hitBox4.updatePosition(width * (1079/1875), height * (666/969));
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
