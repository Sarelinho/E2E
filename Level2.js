const myIntro = document.getElementById("introduction2");

function startLevel2(){
    
    // Display Introduction message:
    displayIntro(myIntro);
}

function respondOnKey(myInput) {
    if(isIntro && myInput == -26) {
        // When "G" key pressed during Intro display, hide Introduction message:
        myIntro.style.display = 'none';
        isIntro = false;
    }
}
