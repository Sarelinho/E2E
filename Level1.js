const numIngreds = 5;
const numDishes = 5;
var myRndInt;
var myString;
var myCorrectAnswer;
var myQuestions = [];    
var myIdx;        
const answerTags = document.getElementsByClassName("btn_answer");

var questions=["q1","q2","q3","q4","q5"];

function startLevel1(){
    myRndInt = 0;
    myString = "";
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked

    /*
    let test = "";
    for (let i =0; i<myQuestions.length; i++){
        test += `${DishList[myQuestions[i]].DishName} -- `;    
    }
    alert (test);
*/
    // Arrange the images and answer-options:
    runQuest(myQuestions[myIdx], myIdx);
    
    // Respond on player's choice:
    for (var i = 0; i < answerTags.length; i++) {
        answerTags[i].addEventListener("click", getAttempt);
       
    }  
}

 

//==============================================================
// FUNCTIONS A
//==============================================================

function runQuest(v, idx) {
    
   
    let s=questions[idx];
    if(myIdx >= numDishes){
        alert("Game over");
        document.getElementById("level1").style.background = " #3f3f3f";
        document.getElementById("lvl1").style.color = "#ffffff";
      
       
    } 
    else {
        // 1. Populate the images of the ingredients

        //Update the number of question:
       
       


       
       

        document.getElementById(s).style.background = "#d8d513";
        document.getElementById(s).style.padding = "5px 32.2px";
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
        var myOptions = randAnswers(v, myCorrectAnswer); // Create an array of 4 Dish-names, one of them is "correct"

        // Populate the answer buttons
        myAnswerButtons = ["Ans_1", "Ans_2", "Ans_3", "Ans_4"]
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
        myRndInt = getRndInteger(0, DishList.length);
        let isUsed = myDishArray.some(myTest1);

        while (isUsed) {
            myRndInt = getRndInteger(0, DishList.length);
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
            myRndInt = getRndInteger(0, DishList.length);
            myString = DishList[myRndInt].DishName;
            isUsed = myArray.some(myTest2);

            while(isUsed || (myRndInt == myRnd)) {
                myRndInt = getRndInteger(0, DishList.length);
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

function getAttempt(){
    
   

    if(this.textContent == DishList[myQuestions[myIdx]].DishName){
        alert("Correct answer!");
       
        
        
        let s=questions[myIdx];
        document.getElementById(s).style.color = "#ffffff";
        document.getElementById(s).style.background = "#3f3f3f";
        document.getElementById(s).style.padding = "5px 33.2px";
        myIdx++;
        runQuest(myQuestions[myIdx], myIdx);

       
    }
    else {
        alert("Wrong answer. Try again.");
    }
}
