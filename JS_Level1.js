const numOptions = 4;
var myRndInt;
var myString;
var myCorrectAnswer;
var myAnswerButtons = [];
var isEndOfLevel = detectEndOfLevel();
const answerTags = document.getElementsByClassName("btn_answer");
const myMessageContinue = '<br><br><i>כדי להמשיך, יש להוציא את הניצב מהמסלול</i>';
const myMessageWrong = `תשובה לא נכונה${myMessageContinue}`;
const myMessageCorrect1 = `נכון מאוד!${myMessageContinue}`;
const myMessageCorrect2 = `סיימת את השלב בהצלחה!${myMessageContinue}`;

for (let i = 0; i < numQuests; i++) { myStageIndicators[i] = `q${i + 1}`; }
for (let i = 0; i < numOptions; i++) { myAnswerButtons[i] = `Ans_${i+1}`; }
myAnswerButtons.reverse();

const myIntro = document.getElementById("introduction");

function startLevel1(){
    myRndInt = 0;
    myString = "";
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked
    
    // Display Introduction message:
    displayIntro(myIntro);

    // Display question:
    runQuest(myQuestions[myIdx], myIdx);
}

 

//==============================================================
// FUNCTIONS A
//==============================================================

function runQuest(v, idx) {


    // 1. Populate the images of the ingredients
  
    //Clear-up previous images if exist:
    removeAllChildNodes(document.querySelector('#images'));

    //Create HTML elements "img" acc amount of ingredients and append them into "images" div:
	const myDish = DishList[v];
    for (let k of myDish.Ingredients)  {        
		let myImg = document.createElement("img");
        myImg.src = k.imgPath;
		document.getElementById("images").appendChild(myImg);
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



function randAnswers (correctIndex, myRnd) {
    // - Create an array of 4 Dish-names.
    // - Get the "correct answer" and put it randomly among the 4 options.
    // - Get 3 random answers (other than the correct one)
    //   and put them as "incorrect answers".
    // - Optionally - check that the "incorrect answers" 
    //   were not already used in previous questions as "correct answers".

    var myArray = [];

    myArray[myRnd] = DishList[correctIndex].DishParams.imgName;

    for (let i = 0; i < 4; i++) { 
        let myInt = i + 65;
        let s = String.fromCharCode(myInt);

        if (i != myRnd) {
            myRndInt = getRndInteger(0, 40);
            myString = DishList[myRndInt].DishParams.imgName;
            isUsed = myArray.some(myTest2);

            while(isUsed || (myRndInt == myRnd)) {
                myRndInt = getRndInteger(0, 40);
                myString = DishList[myRndInt].DishParams.imgName;
                isUsed = myArray.some(myTest2);
            }
            myArray[i] = s + `<br >${DishList[myRndInt].DishParams.imgName}`;
        }
        else {
            myArray[i] = s + `<br >${DishList[correctIndex].DishParams.imgName}`;
        }
    }

    myRndInt = 0;
    myString = "";
    return myArray;
}

function respondOnKey(myInput) {

    let myChoice = "";

    if((myInput >= 0 && myInput < numOptions) && !isMessageTime) {
        // Revert "myInput" (due to revert element order inside the div, because of RTL Direction):
        let tmpArr = [];
        let len = numOptions;
        for (let i = 0; i < numOptions; i++) tmpArr[i] = len-- - 1;
        let myTmp = tmpArr[myInput];

        // Retrieve content from the chosen answer:
        myChosenButton = document.getElementById(`Ans_${myTmp + 1}`);
        myChoice = myChosenButton.textContent.substring(1);
    }

    // Respond on correct answer not during message display:
    if (myInput == myCorrectAnswer && !isMessageTime) {
        if (detectEndOfLevel()) { displayMessage("messageCorrect", myMessageCorrect2, myChoice); }
        else { displayMessage("messageCorrect", myMessageCorrect1, myChoice); }

        isCorrect = true;

        changeBattery(batteryUpdate);
        batteryUpdate = 20;
    }
    
    // Respond on "z" during Correc/Wrong Message display:
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

                //Close current page and open Level-2 page:
                window.location.href = "./pageB1.html";
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

    // Respond on "z" during Introduction message display:
    else if (isIntro && myInput == 25) {
        // Hide Introduction message:
        myIntro.style.display = 'none';
        isIntro = false;
    }
    
    // Any incorrect key (excluding "z") not during message display:
    else if (!(myInput == 25 && isMessageTime)) {  
        displayMessage("messageWrong", myMessageWrong, myChoice);
        batteryUpdate = Math.max(0, batteryUpdate -= 5);
    }
    
    // Don't respond on nothing during message display (except "z"):
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


