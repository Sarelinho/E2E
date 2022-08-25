const myIntro = document.getElementById("introduction2");

function startLevel2(){
    
    // Display Introduction message:
    displayIntro(myIntro);
}

function respondOnKey(myInput) {
    if(isIntro && ((myInput == 0) || ((myInput == 3) || ((myInput == 18) || (myInput == 22))))) {
        // When "a", "s", "d", "w" keys pressed during Intro display, hide Introduction message:
        myIntro.style.display = 'none';
        isIntro = false;
    }
}
