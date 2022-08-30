#include <Keyboard.h>
#define axis_X 2
#define axis_Y 3
#define Red 6
#define Green 5
#define greenLED 8
#define redLED 7

bool Pressed = false;

int Gcnt = 0;
int Rcnt = 1;

unsigned long check;

void setup() {
  pinMode(Red, INPUT_PULLUP);
  pinMode(Green, INPUT_PULLUP);
  pinMode(greenLED, OUTPUT);
  pinMode(redLED, OUTPUT);
  Keyboard.begin();
  Serial.begin(9600);
  check = millis();
}

void loop() {

  joystick();
  btns();
  LongPress();
  Pressed = false;
  check = millis();
}
//////////////////////////////////// Joystick
void joystick()
{
  int VRX = analogRead(axis_X);
  int VRY = analogRead(axis_Y);

  if (VRY < 250)
  {
    Keyboard.write (87);
    delay (100);
  }

  else if (VRY > 750)
  {
    Keyboard.write (83);
    delay (100);
  }

  else if (VRX < 250)
  {
    Keyboard.write (65);
    delay (100);
  }

  else if ( VRX > 750)
  {
    Keyboard.write(68);
    delay (100);
  }


}
//////////////////////////////////// Buttons
void btns()
{
  while (Pressed == false && millis() - check < 250)
  {

    if (digitalRead(Red) == LOW )
    {
      //Serial.print("hi");
      Keyboard.write(82);
      Pressed = true;
      delay(100);
    }
    else if (digitalRead(Green) == LOW )
    {
      //Serial.print("hi");
      Keyboard.write(71);
      Pressed = true;
      delay(100);
    }
  }
}
//////////////////////////////////// LongPress
void LongPress() {

  while (Pressed == true && digitalRead(Red) == LOW || digitalRead(Green) == LOW )
  {

    if (digitalRead(Red) == HIGH && digitalRead(Green) == HIGH)
    {
      //Serial.print(" wew ");
      break;
    }
  }


}
