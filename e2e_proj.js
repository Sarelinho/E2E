var myRndInt = 0;
var myString = "";
const myQuestions = getDishes();            // List of (indexes of) Dishes to be asked
const Level_1 = myQuestions.slice(0, 5);    // Create array of the first 5 Dishes
const Level_2 = myQuestions.slice(5);       // Create array of the last 5 Dishes

Level_1.forEach(runLevel1);

//==============================================================
// FUNCTIONS A
//==============================================================

function runLevel1(v) {
    // 1. TBD: Populate the images of the ingredients

    // 2. Populate the options

    // Create array of 4 Dish-Names (including the correct answer)
    let myOptions = randAnswers(v);

    // 3. TBD: Score the answer

    // 4. TBD: Change design for the "Stage" indicators
}

function getDishes () {
    // This function returns an array of 10 integers (indexes)
    // taken randomly out of list of 40 Dishes.
    // Each number can appear only once.

    let myDishArray = [];
    for (let i = 0; i < 10; i++){
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


function randAnswers (correctIndex) {
    // - Create an array of 4 Dish-names.
    // - Get the "correct answer" and put it randomly among the 4 options.
    // - Get 3 random answers (other than the correct one)
    //   and put them as "incorrect answers".
    // - Optionally - check that the "incorrect answers" 
    //   were not already used in previous questions as "correct answers".

    const myArray = [];
    let myRnd = getRndInteger(0, 4); // Store random index 0 to 3 to be used for "correct answer"

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
