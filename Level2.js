var isIntro;
const myIntro = document.getElementById("introduction2");

function startLevel2(){
    displayIntro(myIntro);
}

function respondOnKey(myInput) {
    if(isIntro && myInput == -26) {
        // "G" key pressed during Intro display:
        myIntro.style.display = 'none';
        isIntro = false;
    }
}
