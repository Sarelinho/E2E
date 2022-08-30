const myIntro = document.getElementById("introduction2");
const myOptionsPan = document.getElementById("B_answer");
var myOptions = myOptionsPan.children
var myFocus;

function startLevel2(){
    myRndInt = 0;
    myString = "";
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked

    // Display Introduction message:
   // displayIntro(myIntro);

    // Display question:
    runQuest2(myQuestions[myIdx]);
}

function runQuest2(currIdx) {

    const myDish = DishList[currIdx];

    // 1. Display the dish name:
    document.getElementById("B_header").innerHTML = myDish.DishParams.imgName;

    // 2. Display the dish image:
    myImageBox = document.getElementById("B_image");
    myImageBox.style.backgroundImage = `url(${myDish.DishParams.imgPath})`;

    // 3. Display answer options:

    // 3.1. Merge and shuffle all the correct and incorrect options:
    var myArrIncorrect = myDish.WrongIngredients;
    var myArrCorrect = [];
    var myArrCorrectRaw = myDish.Ingredients;
    for (let i = 0; i < myArrCorrectRaw.length; i++) 
        myArrCorrect[i] = myArrCorrectRaw[i].imgName;

    var myArrOptions = myArrCorrect.concat(myArrIncorrect);
    myArrOptions.shuffle();

    // 3.2. Create element for each option, append it into the page:
    for (let i = 0; i < myArrOptions.length; i++) {
        let myElement = document.createElement('div');
        myElement.setAttribute('id', `option${i}`);
        myElement.textContent = myArrOptions[i];
        document.getElementById("B_answer").appendChild(myElement);
    }

    // 3.3. Focus by default on the first option: TBD
    setFocus(0);
}

function respondOnKey(myInput) {
    // Child-number of the Option focused before the move:
    const myCurrent = Array.from(myFocus.parentElement.children).indexOf(myFocus);


    if (isIntro) {
        if (isIntro && ((myInput == -32) || ((myInput == -29) || ((myInput == -10) || (myInput == -14))))) {
            // When "A", "S", "D", "W" keys pressed during Intro display, hide Introduction message:
            myIntro.style.display = 'none';
            isIntro = false;
        }
    }
    else {
        switch (myInput) {
            case -32:
            case -29:
                // "A" or "D" pressed (move left or right):
                break;
            case -10:
                // "W" pressed (move up):
                if ((myCurrent - 1) >= 0) {
                    toggleFocus(myCurrent, myCurrent - 1);
                }
                break;
            case -14:
                // "S" pressed (move down):
                if ((myCurrent + 1) < (myOptions.length)) {
                    toggleFocus(myCurrent, myCurrent + 1);
                }
                break;
        }
    }
}

function setFocus(myNum) {
    myFocus = myOptionsPan.children[myNum];
    myFocus.style.backgroundColor = 'saddlebrown';
    myFocus.style.color = 'yellow';
}

function removeFocus(myNum) {
    myElem = myOptionsPan.children[myNum];
    myElem.style.backgroundColor = 'yellow';
    myElem.style.color = 'saddlebrown';
}

function toggleFocus(mySource, myTarget) {
    setFocus(myTarget);
    removeFocus(mySource);
}
