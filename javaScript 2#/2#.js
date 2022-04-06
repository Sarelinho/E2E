// Array with 40 names of dishes
const numAnswers = 4;
const numDishes = 40;
const DishesNames = [
    "שקשוקה", "מטבוחה", "קובה", "קנאפה", "אינג'רה", 
    "בורשט", "מקלובה", "ממולאים", "פנקייק", "מוסקה",
    "קוסקוס", "פישנדצ'יפס", "דג מרוקאי", "עראיס", "פסטה אלפרדו",
    "מוקפץ תאילנדי", "גואקמולי", "סבזי", "פשטידת תירס", "מרק חרירה",
    "סלט קפרז'ה", "אוזני המן", "חולודץ", "מעורב ירושלמי", "סלט אוליביה", 
    "קציצות דגים", "סופגניות", "סלט שובה", "ורניקי", "dish30",
    "dish31", "dish32", "dish33", "dish34", "dish35", 
    "dish36", "dish37", "dish38", "dish39", "dish40"
];

let correctIndex = 0; // "0" to be replaced by a function which returns a relevant integer
let listAnswers = getListAnswers(correctIndex); // Get an array of 4 answers, one of them is correct

////////////////////////////////////////////////////////////////////////////////////
// Functions Area
////////////////////////////////////////////////////////////////////////////////////

//====================================================================================================================

function getListAnswers (correctIndex) {
    // - Create an array of 4 answers (4 dish-names).
    // - Get the "correct answer" and put it randomly among the 4 options.
    // - Get 3 random answers (other than the correct one)
    //   and put them as "incorrect answers".
    // - Optionally - check that the "incorrect answers" 
    //   were not already used in previous questions as "correct answers".
  
    let myArray = [];
    let rnd1 = getRndInteger(0, numAnswers); // Store random index 0 to 3 to be used for "correct answer"
    let rnd2;
    let s;
    for (let i = 0; i < numAnswers; i++){ 
      
        // If the placement is not stored for the "correct answer":
        if (i != rnd1) {
            // Get a random dish-name, not already present among the chosen options
            do {
                // Get random integer, other than "correctIndex"
                do {
                    rnd2 = getRndInteger(0, numDishes);   
                }
                while (rnd2 == correctIndex)
                s = DishesNames[rnd2];             
            }
            while (myArray.includes(s))
        } 
        else {
            // If the placement is stored, get the dish-name for "correct answer"
            s = DishesNames[correctIndex];
        }
        myArray.push(s);
    }
    return myArray;
}
  
//====================================================================================================================

function getRndInteger(min, max) {
    // Get random integer within the min-max range: not including "max" value
    // ((CC) Taken from W3Schools)
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
//====================================================================================================================
