const numIngreds = 5;
const numDishes = 5;
const numQuests = 5;
const numOptions = 4;
var myIdx;
var myRndInt;
var myString;
var myCorrectAnswer;
var myQuestions = [];    
var myAnswerButtons = [];
var myStageIndicators = [];
var isMessageTime = false;
var isCorrect;
var isEndOfLevel = detectEndOfLevel();
const answerTags = document.getElementsByClassName("btn_answer");
const myMessageContinue = '<br><br><i>כדי להמשיך, יש להוציא את הניצב מהמסלול</i>';
const myMessageWrong = `תשובה לא נכונה${myMessageContinue}`;
const myMessageCorrect1 = `נכון מאוד!${myMessageContinue}`;
const myMessageCorrect2 = `סיימת את השלב בהצלחה!${myMessageContinue}`;

for (let i = 0; i < numQuests; i++) { myStageIndicators[i] = `q${i+1}`; }
for (let i = 0; i < numOptions; i++) { myAnswerButtons[i] = `Ans_${i+1}`; }
myAnswerButtons.reverse();

function startLevel1(){
    myRndInt = 0;
    myString = "";
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked
    
    // Display question:
    runQuest(myQuestions[myIdx], myIdx);

    // Once a button pressed, convert its key value into a number ("97" is "a" in ASCII)
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

    // 1. Populate the images of the ingredients
  
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
    for (let i = 0; i < myAnswerButtons.length; i++){
        document.getElementById(myAnswerButtons[i]).innerHTML = myOptions[i];
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

function getAttempt(myInput) {

    let myChoice = "";

    if(myInput >= 0 && myInput < numOptions) {
        // Revert "myInput" (due to revert element order inside the div):
        let tmpArr = [];
        let len = numOptions;
        for (let i = 0; i < numOptions; i++) tmpArr[i] = len-- - 1;
        let myTmp = tmpArr[myInput];

        // Retrieve content from the chosen answer:
        myChosenButton = document.getElementById(`Ans_${myTmp + 1}`);
        myChoice = myChosenButton.textContent;
    }

    // Respond on correct answer not during message display:
    if (myInput == myCorrectAnswer && !isMessageTime) {
        if (detectEndOfLevel()) { displayMessage("messageCorrect", myMessageCorrect2, myChoice); }
        else { displayMessage("messageCorrect", myMessageCorrect1, myChoice); }

        isCorrect = true;
    }
    // Respond on "z" during message display:
    else if (myInput == 25 && isMessageTime) {          
        document.getElementById("displayAnswer").style.display = 'none';
        document.getElementById("messageWrong").style.display = 'none';
        document.getElementById("messageCorrect").style.display = 'none';
        
        if (isCorrect) {
            updateIndicator(myIdx);
            
            if (detectEndOfLevel()) {
                //Change Stage Indicator (left panel) (for the whole list of questions):
                document.getElementById("level1").style.background = "#3f3f3f";
                document.getElementById("lvl1").style.color = "#ffffff";
            }
            else {
                //Advance to next stage:
                myIdx++;
                runQuest(myQuestions[myIdx], myIdx);
            }

            isCorrect = false;
        }

        isMessageTime = false;
    }
    // Any incorrect key (excluding "z") not during message display:
    else if (!(myInput == 25 && isMessageTime)) {  
        displayMessage("messageWrong", myMessageWrong, myChoice)        
    }
    // Don't respond on nothing during the message display (except "z"):
    else { /* do nothing */ }   
}

function displayMessage(myElementName, myContent, myChoice) {
    
    isMessageTime = true;
    
    // Unhide the Message divs:
    let myMessageElement = document.getElementById(myElementName);
    let myAnswerElement = document.getElementById("displayAnswer");
    myMessageElement.style.display = 'block';
    myAnswerElement.style.display = 'block';
    myMessageElement.innerHTML = `<br><br>${myContent}`;
    myAnswerElement.innerHTML = myChoice;
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

function detectEndOfLevel() {
    if (myIdx >= numQuests - 1)  return true; 
    else return false; 
}

function updateIndicator(myIdx) {
    const myStageIndicator = myStageIndicators[myIdx];
    const myStageIndicator_Style = document.getElementById(myStageIndicator).style
    myStageIndicator_Style.color = "#ffffff";
    myStageIndicator_Style.background = "#3f3f3f";
    myStageIndicator_Style.padding = "5px 33.2px";
}
