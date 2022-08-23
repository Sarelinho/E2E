var isIntro;
const myIntro = document.getElementById("introduction2");

function startLevel2(){
    //Callback getAttempt() is summoned here:
    switchToKeyBoard();
    isIntro = true;

    myIntro.style.display = 'block';
    myIntro.style.fontSize = '20px';
    myIntro.style.backgroundColor = 'blue';
    myIntro.style.border = 'lightblue 5px solid';
    myIntro.style.textAlign = 'right';
}

function getAttempt(myInput) {
    if(isIntro && myInput == 6) {
        // "g" key pressed during Intro display:
        myIntro.style.display = 'none';

    }
}
