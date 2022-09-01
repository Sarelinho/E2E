//------images------
const arayes          = myPathDish + "Arayes.jpg";
const fish_and_chips  = myPathDish + "Fish_and_chips.jpg";
const havitat_yerek   = myPathDish + "ScrambledEggs.jpg";
const hrira           = myPathDish + "Hrira.jpg";
const knafe           = myPathDish + "Knafe.jpg";
const kuba_selek      = myPathDish + "Kuba.jpg";
const pankeik         = myPathDish + "Pancake.jpg";
const pizza           = myPathDish + "Pizza.jpg";
const shnitzel        = myPathDish + "Schnitzel.jpg";
const sir_dagim       = myPathDish + "Maroccan_fish.jpg";
const backCard = "./Images/back_cards.jpg";

var myAttempts = 0;
const myFinish = document.getElementById("gameover");

const games = [
    arayes, arayes,
    fish_and_chips, fish_and_chips,
    havitat_yerek, havitat_yerek,
    hrira, hrira,
    knafe, knafe,
    kuba_selek, kuba_selek,
    pankeik, pankeik,
    pizza, pizza,
    shnitzel, shnitzel,
    sir_dagim, sir_dagim
];

displayIntro(myIntro);

//----------help tools---------
let checkCards = [];
let ids = [];
let counterCards = 0;
let cardsThatCameOutOfTheGame = [];
let myMoves = 0;
let walked;

let testCards = false;

//---------games container-----------
const cards = document.getElementById('gamesM');
let divs = ""; 

games.shuffle();

for(let k = 0; k < games.length; k++){
     divs +=`<div id ="card${k}" onclick=" clicks(${k})"><img id="${k}" src="${backCard}"></div>`;   
 }

cards.innerHTML = divs;

function clicks(id){
    if((checkCards.length == 0) && (!testCards) && (cardsThatCameOutOfTheGame.indexOf(games[id]) < 0)){
        document.getElementById(id).src = games[id];
        ids.push(id);
        checkCards.push(games[id]);
    }
    else if ((checkCards.length == 1) && (ids[0] != id) && (cardsThatCameOutOfTheGame.indexOf(games[id]) < 0)) {
        document.getElementById(id).src = games[id];
        ids.push(id);
        checkCards.push(games[id]);
        testCards = true;
        myAttempts++;

        if(checkCards[0] === checkCards[1]){
            cardsThatCameOutOfTheGame.push(checkCards[0]);
            counterCards += 2;
            checkCards = [];
            ids = [];
            testCards = false;

            let myPerformance = Math.ceil((games.length / 2) / myAttempts);
            changeBattery(myPerformance);
            myAttempts = 0;

            //driveCar(0, myPerformance);

            if (counterCards == games.length) {
                displayIntro(myFinish);
            }
        }
        else {
            setTimeout(back, 1000);
            testCards = false;
        }
    }
} 

function outCards(){
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).style.border = "none";
        document.getElementById(ids[i]).remove();
    }
}

function back(){
    for(let k = 0; k < ids.length; k++) document.getElementById(ids[k]).src = backCard;
    checkCards = [];
    ids = [];
}

function shuffle(array){
    for(let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;  
    }
}

function respondOnKey(myInput) {
    if (isIntro) {
        if ((myInput == -32) || ((myInput == -29) || ((myInput == -10) || (myInput == -14)))) {
            // When "A", "S", "D", "W" keys pressed during Intro display, hide Introduction message:
            myIntro.style.display = 'none';
            isIntro = false;
        }
    }
    else {
        switch (myInput) {
            case -32:
                // "A" pressed (move left):
                walked = myMoves;
                myMoves++;
                if (myMoves > 19) myMoves = 0;

                toggleFocus(walked, myMoves);
                break;
            case -29:
                // "D" pressed (move right):
                walked = myMoves;
                myMoves--;
                if (myMoves < 0) myMoves = 19;

                toggleFocus(walked, myMoves);
                break;
            case -10:
                // "W" pressed (move up):
                walked = myMoves;
                myMoves -= 5;
                if ((myMoves >= -5) && (myMoves <= -1)) myMoves += 20;

                toggleFocus(walked, myMoves);
                break;
            case -14:
                // "S" pressed (move down):
                walked = myMoves;
                myMoves += 5;
                if ((myMoves > 19) && (myMoves < 29))  myMoves -= 20;

                toggleFocus(walked, myMoves);
                break;
            case -26:
                // "G" pressed (green button):
                clicks(myMoves);
                break;
        }
    }
}

function setFocus(myNum) {
    let move = document.getElementById(`card${myNum}`);
    move.style.border = 'hsl(120, 88%, 54%) solid 4px';
}

function removeFocus(myNum) {
    let move = document.getElementById(`card${myNum}`);
    move.style.border = '#595959 solid 4px';
}

function toggleFocus(mySource, myTarget) {
    setFocus(myTarget);
    removeFocus(mySource);
}

function newGames(){
    for(let k = 0; k < games.length; k++) 
        document.getElementById(`card${k}`).innerHTML = `<img id="${k}" src="${backCard}">`;   

    shuffle(games);
    cardsThatCameOutOfTheGame = [];
    checkCards = [];
    ids = [];
    counterCards = 0;
    toggelTurn = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.getElementById('winner').style.display = "none";
    document.getElementById('PointsA').innerHTML = 0;
    document.getElementById('PointsB').innerHTML = 0;
}
