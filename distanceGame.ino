#include <Keyboard.h>
#include <NewPing.h>


#define trigPin 4
#define echoPin 3
#define MAX_DISTANCE 30

bool answerFlag = false;

unsigned long isTimeForAnswer;
char myAnswer;

void determinesTheAnswer(byte b){

  if((b >= 6) && (b <=8) &&(!answerFlag)) {
      
      Keyboard.write('a');  
      answerFlag = true;
    }else if((b >= 9) && (b <= 11) &&(!answerFlag)){
        
        Keyboard.write('b');  
        answerFlag = true;
    }else if((b >= 12) && (b <= 15) &&(!answerFlag)){
      
      Keyboard.write('c');
      answerFlag = true;
    }else if((b >= 16) && (b <= 18) &&(!answerFlag)){
      
      Keyboard.write('d');
      answerFlag = true; 
    }else if((answerFlag) && (b > 18)){
      
      Keyboard.write('z');
      answerFlag = false;
    
    }
  
}


NewPing distance(trigPin,echoPin,MAX_DISTANCE);



void setup() {
  Serial.begin(9600);
  Keyboard.begin();
  isTimeForAnswer = millis();
}

int distanceSum(){
    int firstDis = distance.ping_cm();
    int cont = 0;
    byte sum = 0;
    for(int k = 0; k<12; k++){
       if((firstDis +1 >= distance.ping_cm()) || (firstDis - 1 <= distance.ping_cm())){
        
          sum += distance.ping_cm();
          cont++;
       }
    }
    sum /= cont;
    return sum;
}

void loop() {

          if(!answerFlag){
            delay(5000);
          }
      
       determinesTheAnswer(distanceSum());
      /*Serial.print("distance(cm): ");
      Serial.println(distanceSum());*/

      
}
//aabbaa
