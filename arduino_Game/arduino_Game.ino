#define redbtn 12
#define greenbtn 4
#define bluebtn 3


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
#define backdoor 6
int currState;
int flag = 1;


void setup() {
  // put your setup code here, to run once:
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
    case wait4start: Serial.println("start");
      while (startgame) {
        if (digitalRead(bluebtn) == LOW) {
          startgame = false;
        }
      }
      gamestate = pingame;
      break;

    case pingame: timetostartgame = millis();
      gamestate = gameon;
    case gameon:

      MainGame();

      if (millis() - timetostartgame > 30000) {
        gamestate = backdoor;
      }
      break;
    case backdoor:
      LedOff();
      delay(400);
      gamestate = wait4start ;
      break;

  }

}

//------------------------------------------------------RED LED
void Controlredled() {

  redtimetopin = millis();
  if (isRedon) {

    Redoff();

  } else {


    Redon();


  }

}


void Redon() {

  digitalWrite(redled, HIGH);
  isRedon = true;
  Serial.print(": RED on ");


}

void Redoff() {

  digitalWrite(redled, LOW);
  isRedon = false;
  Serial.print(": RED off ");
}


//--------------------------------------------------------GREEN LED

void Controlgreenled() {

  greentimetopin = millis();
  if (isGreenon) {

    Greenoff();

  } else {


    Greenon();

  }

}

void Greenon() {

  digitalWrite(greenled, HIGH);
  isGreenon = true;
  Serial.print(": GREEN on ");
}

void Greenoff() {

  digitalWrite(greenled, LOW);
  isGreenon = false;
  Serial.print(": GREEN off ");

}


//--------------------------------------------------------JOYSTICK DOWN

void controljoystick() {
  timeforjoystick = millis();
  if (joystate) {
    yellowoff();

  } else {
    Yellowon();
  }
}


void yellowoff() {

  digitalWrite(yellowled, LOW);
  joystate = false;
}
void Yellowon() {
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

        }

      }

      break;

    case answer2:
      Serial.println(" 2 ");
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

        }

      }
      break;
    case answer3:
      Serial.println(" 3 ");

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

        }

      }
    case answer4:
      Serial.println(" 4 ");

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

        }

      }
      break;

    case answer5:
      Serial.println(" 5 ");
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

        }

      }
      break;

  }
}

//--------------------------------------------------------------------------DONE WITH PLAYING

void LedOff() {

  digitalRead(redled) == LOW;
  digitalRead(greenled) == LOW;
  digitalRead(blueled) == LOW;
  digitalRead(yellowled) == LOW;


}




