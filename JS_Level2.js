const myIntro = document.getElementById("introduction2");
const myOptionsPan = document.getElementById("B_answer");
var myOptions = myOptionsPan.children
var myFocus;
var myArrCorrect = [];
var myArrChecked = [];

function startLevel2(){
    myCorrectAnswer = 0;
    myIdx = 0;
    myQuestions = getDishes();          // List of (indexes of) Dishes to be asked

    // Display Introduction message:
    displayIntro(myIntro);

    // Display question:
    runQuest2(myQuestions[myIdx]);
}

function runQuest2(currIdx) {

    const myDish = DishList[currIdx];
    myArrChecked = [];

    // 1. Display the dish name:
    document.getElementById("B_header").innerHTML = myDish.DishParams.imgName;

    // 2. Display the dish image:
    myImageBox = document.getElementById("B_image");
    myImageBox.style.backgroundImage = `url(${myDish.DishParams.imgPath})`;

    // 3. Display answer options:

    // 3.1. Merge and shuffle all the correct and incorrect options:
    var myArrIncorrect = myDish.WrongIngredients;
    var myArrCorrectRaw = myDish.Ingredients;
    myArrCorrect = [];  // Make this array empty before use

    for (let i = 0; i < myArrCorrectRaw.length; i++) 
        myArrCorrect[i] = myArrCorrectRaw[i].imgName;

    var myArrOptions = myArrCorrect.concat(myArrIncorrect);
    myArrOptions.shuffle();

    // 3.2. Create element for each option, append it into the page:
    removeAllChildNodes(document.querySelector("#B_answer"));

    for (let i = 0; i < myArrOptions.length; i++) {
        let myElement = document.createElement('div');
        myElement.setAttribute('id', `option${i}`);
        myElement.textContent = myArrOptions[i];
        document.getElementById("B_answer").appendChild(myElement);
    }

    // 3.3. Focus by default on the first option:
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
                if (myArrChecked.includes(myCurrent)) break;

                const myAnswer = myFocus.textContent;
                if (myArrCorrect.includes(myAnswer)) {
                    // Correct choice:
                    myFocus.style.backgroundColor = "green";
                    myFocus.style.color = "white";

                    // Remove the correct answer from the array:
                    for (let i = 0; i < myArrCorrect.length; i++)
                        if (myArrCorrect[i] == myAnswer) myArrCorrect.splice(i, 1);
                }
                else {
                    // Incorrect choice:
                    myFocus.style.backgroundColor = "red";
                    myFocus.style.color = "yellow";
                    batteryUpdate = Math.max(0, batteryUpdate -= 4);
                }
                myArrChecked.push(myCurrent);

                // End of question:
                if (myArrCorrect.length == 0) {
                    changeBattery(batteryUpdate);
                    batteryUpdate = 20;

                    if (detectEndOfLevel()) {
                        //Change Stage Indicator (left panel) (for the whole list of questions):
                        document.getElementById("level1").style.background = "#3f3f3f";
                        document.getElementById("lvl1").style.color = "#ffffff";

                        //Close current page and open Level-2 page:
                        window.location.href = "./pageC1.html";
                    }
                    else {
                        //Advance to next stage:
                        myIdx++;
                        runQuest2(myQuestions[myIdx]);
                    }
                }                
                break;
            case -10:
                // "W" pressed (move up):
                if ((myCurrent - 1) >= 0)
                    toggleFocus(myCurrent, myCurrent - 1);
                break;
            case -14:
                // "S" pressed (move down):
                if ((myCurrent + 1) < (myOptions.length))
                    toggleFocus(myCurrent, myCurrent + 1);
                break;
        }
    }
}

function setFocus(myNum) {
    myFocus = myOptionsPan.children[myNum];
    if (myArrChecked.includes(myNum) == false) {
        myFocus.style.backgroundColor = 'saddlebrown';
        myFocus.style.color = 'yellow';
    }
    myFocus.style.border = '10px solid gray';
}

function removeFocus(myNum) {
    if (myArrChecked.includes(myNum) == false) {
        myFocus.style.backgroundColor = 'yellow';
        myFocus.style.color = 'saddlebrown';
    }
    myFocus.style.border = '2px solid gray';
}

function toggleFocus(mySource, myTarget) {
    removeFocus(mySource);
    setFocus(myTarget);
}
