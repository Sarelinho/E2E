#include <Keyboard.h>
#include <NewPing.h>


#define trigPin 4
#define echoPin 3
#define MAX_DISTANCE 20

bool answerFlag = false;

unsigned long isTimeForAnswer;
char myAnswer;

void determinesTheAnswer(byte b){

  if((b >= 3) && (b <=5) &&(!answerFlag)) {
       Keyboard.write('a');
      answerFlag = true;
       
    }else if((b >= 7) && (b <= 9) &&(!answerFlag)){
         Keyboard.write('b');
        answerFlag = true;
        
    }else if((b >= 10) && (b <= 13) &&(!answerFlag)){
      Keyboard.write('c');
      answerFlag = true;
        
    }else if((b >= 14) && (b <= 15) &&(!answerFlag)){
       Keyboard.write('d');
      answerFlag = true; 
      
    }else if((answerFlag) && (b > 15)){
      
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
           delay(4000);
        }
        determinesTheAnswer(distanceSum());
     /* Serial.print("distance(cm): ");
      Serial.println(distanceSum());*/

      
}
//czdzaazbzczdz
