const numIngreds = 5;
const numDishes = 5;
const numQuests = 5;
var myRndInt;
var myString;
var myCorrectAnswer;
var myQuestions = [];    
var myIdx;        
const answerTags = document.getElementsByClassName("btn_answer");
const myStageIndicators = ["q1", "q2", "q3", "q4", "q5"];
const myMessageWrong = 'תשובה לא נכונה<br>נסו שוב';
const myMessageCorrect = 'נכון מאוד!<br>ממשיכים...';



function startLevel1(){
    myRndInt = 0;
    myString = "";
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked
    
    // Display question:
    runQuest(myQuestions[myIdx], myIdx);

    // Once a button pressed, 
    // convert its key value into a number ("97" is "a" in ASCII)
    // and run the function to handle user's repsonse:
    document.body.addEventListener("keypress", (e) => {
        const myPressedButton = e.key.charCodeAt(0) - 97;
        getAttempt(myPressedButton);
    });
}

 

//==============================================================
// FUNCTIONS A
//==============================================================

function runQuest(v, idx) {

    const myStageIndicator = myStageIndicators[idx];

    if(myIdx >= numQuests){
        sendMessage("messageCorrect", "סיימת את השלב בהצלחה!")


        // Support theme update in "התקדמות" panel (for the whole list of questions):
        document.getElementById("level1").style.background = " #3f3f3f";
        document.getElementById("lvl1").style.color = "#ffffff";
    } 
    else {
        // 1. Populate the images of the ingredients
        
        //Change color theme of current stage in left panel:
        document.getElementById(myStageIndicator).style.background = "#d8d513";
        document.getElementById(myStageIndicator).style.padding = "5px 32.2px";
        
        //Clear-up previous images if exist:
        removeAllChildNodes(document.querySelector('#images'));

        //Create HTML elements "img" acc amount of ingredients and append them into "images" div:
        for (let k in DishList[v])  {
            if(DishList[v][k].includes(myPath)) {
                let myImg = document.createElement("img");
                myImg.src = DishList[v][k];
                document.getElementById("images").appendChild(myImg);
            }   
        } 
        
        // 2. Answer options

        // Create array of 4 Dish-Names (including the correct answer)
        myCorrectAnswer = getRndInteger(0, 4); // Store random index 0 to 3 to be used for "correct answer"
        var myOptions = randAnswers(v, myCorrectAnswer);

        // Populate the answer buttons 
        // Order of items inside the array matters 
        myAnswerButtons = ["Ans_4", "Ans_3", "Ans_2", "Ans_1"]
        for (let i = 0; i < myAnswerButtons.length; i++){
            document.getElementById(myAnswerButtons[i]).innerHTML = myOptions[i];
        }
    }
}


function getDishes () {
    // This function returns an array of 5 integers (indexes)
    // taken randomly out of list of 40 Dishes.
    // Each number can appear only once.

    var  myDishArray = [];
    
    for (let i = 0; i < numDishes; i++){
        myRndInt = getRndInteger(0, 40);
        let isUsed = myDishArray.some(myTest1);

        while (isUsed) {
            myRndInt = getRndInteger(0, 40);
            isUsed = myDishArray.some(myTest1);
        }
        myDishArray[i] = myRndInt;
    }

    myRndInt = 0;
    return myDishArray;
}


function randAnswers (correctIndex, myRnd) {
    // - Create an array of 4 Dish-names.
    // - Get the "correct answer" and put it randomly among the 4 options.
    // - Get 3 random answers (other than the correct one)
    //   and put them as "incorrect answers".
    // - Optionally - check that the "incorrect answers" 
    //   were not already used in previous questions as "correct answers".

    var myArray = [];

    myArray[myRnd] = DishList[correctIndex].DishName;

    for (let i = 0; i < 4; i++) { 
        if (i != myRnd) {
            myRndInt = getRndInteger(0, 40);
            myString = DishList[myRndInt].DishName;
            isUsed = myArray.some(myTest2);

            while(isUsed || (myRndInt == myRnd)) {
                myRndInt = getRndInteger(0, 40);
                myString = DishList[myRndInt].DishName;
                isUsed = myArray.some(myTest2);
            }
            myArray[i] = DishList[myRndInt].DishName;
        }
    }

    myRndInt = 0;
    myString = "";
    return myArray;
}



//==============================================================
// FUNCTIONS B
//==============================================================

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
 
function myTest1(v) {
    return v == myRndInt;
}
 
function myTest2(v) {
    return v == myString;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getAttempt(myInput) {
    if (myInput == myCorrectAnswer) {
        //Display a message:
        sendMessage("messageCorrect", myMessageCorrect)
        
        //Update Stage Indicator (left panel):
        const myStageIndicator = myStageIndicators[myIdx];
        const myStageIndicator_Style = document.getElementById(myStageIndicator).style

        myStageIndicator_Style.color = "#ffffff";
        myStageIndicator_Style.background = "#3f3f3f";
        myStageIndicator_Style.padding = "5px 33.2px";

        //Advance to next stage:
        myIdx++;
        runQuest(myQuestions[myIdx], myIdx);
    }

    else {
        //Display a message:
        sendMessage("messageWrong", myMessageWrong)        
    }
}

function sendMessage(myElementName, myContent){
    let myMessageElement = document.getElementById(myElementName);
    myMessageElement.style.display = 'block';
    myMessageElement.innerHTML = myContent;

    setTimeout(function() {
        myMessageElement.style.display = 'none';
    }, 2000);
    
    //TBD:
    // To close the message: wait for "z" key pressed (instead of timeout).
    // Remove EventListener from body
    // Message div to contain:
    // Box with chosen Dish-name --> timeout of 1 sec --> message correct/wrong --> "To continue, remove the token from lazer path"
    // Add EventListener for Message div
    // On key-z pressed: 
    //    add EventListener back to body (or just move the existing addEventListener into runQuest function)
    //    remove EventListener from Message div
    //    close the message (display = 'none')
    // Need exclude "z" from getAttempt: else if (myInput == 25){ do nothing }
}
