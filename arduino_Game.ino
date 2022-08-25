#define redbtn 12
#define greenbtn 4
#define bluebtn 3
#define yellowbtn 2


#define redled 11
#define greenled 9
#define blueled 6
#define yellowled 10

#define vrY 5
#define swbtn A4





bool isRedon;
bool isGreenon;
bool joystate;
bool joystate2;
bool check;
bool startgame;
bool trigger;


int abletopressagain = 250;
int joyRate = 250;
int casestime = 250;
unsigned long redtimetopin;
unsigned long greentimetopin;
unsigned long timeforjoystick;
unsigned long timeforjoystick2;
unsigned long casespin;
unsigned long timetostartgame;


#define wait4start 1
#define pingame 2
#define gameon 3
#define backdoor 4
int gamestate;

#define answer1 1
#define answer2 2
#define answer3 3
#define answer4 4
#define answer5 5
#define exitloop 6

int currState;
int flag = 1;


void setup() {

  Serial.begin(9600);

  pinMode(redbtn, INPUT_PULLUP);
  pinMode(greenbtn, INPUT_PULLUP);
  pinMode(bluebtn, INPUT_PULLUP);

  pinMode(redled, OUTPUT);
  pinMode(greenled, OUTPUT);
  pinMode(blueled, OUTPUT);
  pinMode(yellowled, OUTPUT);

  isRedon = false;
  isGreenon = false;
  joystate = false;
  joystate2 = false;
  check = true;
  startgame = true;
  trigger = true;

  redtimetopin = millis();
  greentimetopin = millis();
  timeforjoystick = millis();
  timeforjoystick2 = millis();
  casespin = millis();


  currState = answer1;
  gamestate = wait4start;

}

void loop() {

  startgame = true;
  switch (gamestate) {
    case wait4start: Serial.println("press BLUE button to start the game...");
      while (startgame) {
        if (digitalRead(bluebtn) == LOW) {
          startgame = false;
        }
      }
      gamestate = pingame;
      break;

    case pingame: timetostartgame = millis();
      gamestate = gameon;
      break;
    case gameon:

      MainGame();
      reset();
      gamestate = backdoor;

      break;
    case backdoor:
      LedOff();
      gamestate = wait4start ;
      break;

  }

}

//------------------------------------------------------RED LED
void Controlredled() {

  redtimetopin = millis();
  if (isRedon) {

    Redoff();
    Serial.println(" RED OFF ");
  } else {


    Redon();
    Serial.println(" RED ON ");
    Greenoff();


  }

}


void Redon() {

  digitalWrite(redled, HIGH);
  isRedon = true;



}

void Redoff() {

  digitalWrite(redled, LOW);
  isRedon = false;

}


//--------------------------------------------------------GREEN LED

void Controlgreenled() {

  greentimetopin = millis();
  if (isGreenon) {

    Greenoff();
    Serial.println(" GREEN OFF ");
  } else {


    Greenon();
    Serial.println(" GREEN ON ");
    Redoff();

  }

}

void Greenon() {

  digitalWrite(greenled, HIGH);
  isGreenon = true;

}

void Greenoff() {

  digitalWrite(greenled, LOW);
  isGreenon = false;


}


//--------------------------------------------------------JOYSTICK DOWN

void controljoystick() {
  timeforjoystick = millis();
  if (joystate) {
    yellowoff();

  } else {
    yellowon();
    blueoff();
  }
}


void yellowoff() {

  digitalWrite(yellowled, LOW);
  joystate = false;
}
void yellowon() {
  digitalWrite(yellowled, HIGH);
  joystate = true;
}
//--------------------------------------------------------JOYSTICK UP

void controljoystick2() {
  timeforjoystick2 = millis();
  if (joystate2) {
    blueoff();
  } else {
    blueon();
    yellowoff();
  }
}

void blueoff() {

  digitalWrite(blueled, LOW);
  joystate2 = false;

}

void blueon() {

  digitalWrite(blueled, HIGH);
  joystate2 = true;

}
//--------------------------------------------------------MAIN GAME

void MainGame() {
  Serial.println("The game has started,you have 60 seconds to be done , GOOD LUCK.");
  while (trigger) {

    switch (currState) {

      case answer1: Serial.println(" 1 ");
        isRedon = false;
        isGreenon = false;
        while (check && flag == 1 && millis() - casespin  > casestime ) {

          int y = analogRead(vrY);
          if (y == 0 && millis() - timeforjoystick > joyRate) {

            controljoystick();

            flag = 2;
            check = false;
            currState = answer2;


          } else if (y == 1023 && millis() - timeforjoystick2 > joyRate) {

            controljoystick2();

            flag = 5;
            currState = answer5;

          } else if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

            Controlredled();


          }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {


            Controlgreenled();

          } else {
            leaving();
          }


        }

        break;

      case answer2: Serial.println(" 2 ");
        timeforjoystick = millis();
        timeforjoystick2 = millis();

        isRedon = false;
        isGreenon = false;
        while (!check && flag == 2 && millis() - casespin  > casestime ) {

          int y = analogRead(vrY);
          if (y == 0 && millis() - timeforjoystick > joyRate) {

            controljoystick();
            flag = 3;
            check = true;
            currState = answer3;


          } else if (y == 1023 && millis() - timeforjoystick2 > joyRate) {

            controljoystick2();
            flag = 1;
            check = true;
            currState = answer1;

          } else if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

            Controlredled();


          }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

            Controlgreenled();

          } else {
            leaving();
          }


        }
        break;
      case answer3: Serial.println(" 3 ");

        timeforjoystick = millis();
        timeforjoystick2 = millis();
        isRedon = false;
        isGreenon = false;

        while (check && flag == 3 && millis() - casespin  > casestime ) {

          int y = analogRead(vrY);
          if (y == 0 && millis() - timeforjoystick > joyRate) {

            controljoystick();
            flag = 4;
            check = false;
            currState = answer4;


          } else if (y == 1023 && millis() - timeforjoystick2 > joyRate) {

            controljoystick2();
            flag = 2;
            check = false;
            currState = answer2;

          } else if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

            Controlredled();


          }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

            Controlgreenled();

          } else {
            leaving();
            
          }

        }
        break;

      case answer4: Serial.println(" 4 ");


        timeforjoystick = millis();
        timeforjoystick2 = millis();
        isRedon = false;
        isGreenon = false;

        while (!check && flag == 4 && millis() - casespin  > casestime ) {

          int y = analogRead(vrY);
          if (y == 0 && millis() - timeforjoystick > joyRate) {

            controljoystick();
            flag = 5;
            check = true;
            currState = answer5;


          } else if (y == 1023 && millis() - timeforjoystick2 > joyRate) {

            controljoystick2();
            flag = 3;
            check = true;
            currState = answer3;

          } else if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

            Controlredled();


          }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

            Controlgreenled();

          } else {
            leaving();
            
          }

        }
        break;

      case answer5: Serial.println(" 5 ");

        timeforjoystick = millis();
        timeforjoystick2 = millis();
        isRedon = false;
        isGreenon = false;
        while (check && flag == 5 && millis() - casespin  > casestime ) {

          int y = analogRead(vrY);
          if (y == 0 && millis() - timeforjoystick > joyRate) {

            controljoystick();
            flag = 1;
            currState = answer1;



          } else if (y == 1023 && millis() - timeforjoystick2 > joyRate) {

            controljoystick2();
            flag = 4;
            check = false;
            currState = answer4;

          } else  if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

            Controlredled();


          }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

            Controlgreenled();

          } else {
            leaving();

          }

        }
        break;

    }


  }
}
//--------------------------------------------------------------------------RESET MAINGAME SETTINGS
void reset() {
  flag = 1;
  currState = answer1;
  trigger = true;
  check = true;
}
//--------------------------------------------------------------------------FOR EXITING THE ANSWERS
void leaving() {


  if (millis() - timetostartgame > 60000) {
    flag = 100;
    currState = exitloop;
    trigger = false;
  }
}
//--------------------------------------------------------------------------TURN OFF LIGHTS WHEN LEAVING

void LedOff() {

  digitalWrite(redled, LOW);
  digitalWrite(greenled, LOW);
  digitalWrite(blueled, LOW);
  digitalWrite(yellowled, LOW);
  Serial.println("bye bye...");
  delay(500);


}
