#define redbtn 12
#define greenbtn 4
#define bluebtn 3

#define redled 11
#define greenled 9
#define blueled 6
#define yellowled 10

#define vrY 5



int blueRate = 60000 ;

bool isRedon;
bool isGreenon;
bool joystate;
bool joystate2;
bool check;


int abletopressagain = 250;
int joyRate = 250;
int casestime = 250;
unsigned long redtimetopin;
unsigned long greentimetopin;
unsigned long timeforjoystick;
unsigned long timeforjoystick2;
unsigned long casespin;



#define answer1 1
#define answer2 2
#define answer3 3
#define answer4 4
#define answer5 5
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
  redtimetopin = millis();
  greentimetopin = millis();
  timeforjoystick = millis();
  timeforjoystick2 = millis();
  casespin = millis();

  currState = answer1;

}

void loop() {
  // put your main code here, to run repeatedly:

  switch (currState) {

    case answer1: Serial.print("1");
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

        }
        if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

          Controlredled();


        }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {


          Controlgreenled();

        }

      }

      break;

    case answer2:
      Serial.print("2");

      timeforjoystick = millis();
      timeforjoystick2 = millis();
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

        }
        if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

          Controlredled();


        }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

          Controlgreenled();

        }

      }
      break;
    case answer3:
      Serial.print("3");

      timeforjoystick = millis();
      timeforjoystick2 = millis();
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

        }
        if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

          Controlredled();


        }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

          Controlgreenled();

        }

      }
    case answer4:
      Serial.print("4");

      timeforjoystick = millis();
      timeforjoystick2 = millis();
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

        }
        if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

          Controlredled();


        }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

          Controlgreenled();

        }

      }
      break;

    case answer5:
      Serial.print("5");
      timeforjoystick = millis();
      timeforjoystick2 = millis();
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

        }
        if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

          Controlredled();


        }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

          Controlgreenled();

        }

      }
      break;

  }




  /*int y = analogRead(vrY);
    if (y == 0 && millis() - timeforjoystick > joyRate) {

    controljoystick();

    }
    if (digitalRead(redbtn) == LOW && millis() - redtimetopin > abletopressagain) {

    Controlredled();


    }  else if (digitalRead(greenbtn) == LOW && millis() - greentimetopin > abletopressagain) {

    Controlgreenled();

    }*/



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

  } else {


    Greenon();

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
    Yellowon();

  } else {
    yellowoff();
  }
}


void yellowoff() {

  digitalWrite(yellowled, LOW);
  joystate = true;
}
void Yellowon() {
  digitalWrite(yellowled, HIGH);
  joystate = false;
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
//--------------------------------------------------------
