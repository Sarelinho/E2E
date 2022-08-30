const numIngreds = 5;
const numDishes = 5;
const numQuests = 5;
const myTitle = "חידון מאכלים";
const mySubTitle = "תשפ\"ב (2021-2022), מכללת כנרת, פרויקט גמר בקורס E2E";
const myFooter = "בוצע ע\"י: <br>אזגורי ישי, אזולאי שראל, גסקובסקי גל, דגו יוסף, מראי שלמה, נחמני דניאל, ספורי נידאל, צ\'רקסוב איתן"
var isCorrect;
var isMessageTime = false;
var myStageIndicators = [];


document.getElementById("headerText1").innerHTML = myTitle;
document.getElementById("head").innerHTML = mySubTitle;
document.getElementById("foot").innerHTML = myFooter;


//function switchToKeyBoard() {
  // Once a button pressed, convert its key value into a number ("97" is "a" in ASCII)
  // and run the function to handle user's repsonse:
  document.body.addEventListener("keypress", (e) => {
    const myPressedButton = e.key.charCodeAt(0) - 97;
    respondOnKey(myPressedButton);
  });
//}

class imgQuestion {
    constructor(imgPath, imgName) {
        this.imgPath = imgPath;
        this.imgName = imgName;
    }
}

//===============================================================================
// List of Ingredients

const myPathIngr = "./Images/Ingreds/";

//const ing_dummy = "dummy";
const ing_artichoke     = new imgQuestion(myPathIngr + "Artichoke.jpg",      "ארטישוק")
const ing_avocado       = new imgQuestion(myPathIngr + "Avocado.jpg",        "אבוקדו")
const ing_baharat       = new imgQuestion(myPathIngr + "Baharat.jpg",        "בהרט")
const ing_bakingpowder  = new imgQuestion(myPathIngr + "BakingPowder.jpg",   "אבקת עפיה")
const ing_balsamic      = new imgQuestion(myPathIngr + "Balsamic.jpg",       "רוטב בלסמי")
const ing_basil         = new imgQuestion(myPathIngr + "Basil.jpg",          "בזיליקום")
const ing_bean          = new imgQuestion(myPathIngr + "Bean.jpg",           "שעועית")
const ing_beefarm       = new imgQuestion(myPathIngr + "BeefArm.jpg",        "זרוע בקר")
const ing_beer          = new imgQuestion(myPathIngr + "Beer.jpg",           "בירה")
const ing_beet          = new imgQuestion(myPathIngr + "Beet.jpg",           "סלק")
const ing_breadcrumbs   = new imgQuestion(myPathIngr + "BreadCrumbs.jpg",    "פירורי לחם")
const ing_burgul        = new imgQuestion(myPathIngr + "Bulgur.jpg",         "בורגול")
const ing_butter        = new imgQuestion(myPathIngr + "Butter.jpg",         "חמאה")
const ing_cabbage       = new imgQuestion(myPathIngr + "Cabbage.jpg",        "כרוב")
const ing_carrot        = new imgQuestion(myPathIngr + "Carrot.jpg",         "גזר")
const ing_cauliflower   = new imgQuestion(myPathIngr + "Cauliflower.jpg",    "כרובית")
const ing_celery        = new imgQuestion(myPathIngr + "Celery.jpg",         "סלרי")
const ing_cheese        = new imgQuestion(myPathIngr + "Cheese.jpg",         "גבינה צהובה")
const ing_chicken       = new imgQuestion(myPathIngr + "Chicken.jpg",        "עוף")
const ing_chickenbreast = new imgQuestion(myPathIngr + "ChickenBreast.jpg",  "חזה עוף")
const ing_chickensoup   = new imgQuestion(myPathIngr + "ChickenSoup.jpg",    "מרק עוף")
const ing_chilesouce    = new imgQuestion(myPathIngr + "Chile.jpg",          "רוטב צ'ילה")
const ing_chokolate     = new imgQuestion(myPathIngr + "Chocolate.jpg",      "שוקולד")
const ing_cucumber      = new imgQuestion(myPathIngr + "Cucumber.jpg",       "מלפוון")
const ing_coarsesalt    = new imgQuestion(myPathIngr + "Salt.jpg",           "מלח גס")
const ing_corn          = new imgQuestion(myPathIngr + "Corn.jpg",           "תירס")
const ing_cream         = new imgQuestion(myPathIngr + "Cream.jpg",          "שמנת")
const ing_datehoney     = new imgQuestion(myPathIngr + "DateHoney.jpg",      "סילן")
const ing_datespread    = new imgQuestion(myPathIngr + "DateSpread.jpg",     "ממרח תמרים")
const ing_dill          = new imgQuestion(myPathIngr + "Dill.jpg",           "שמיר")
const ing_dijonmustard  = new imgQuestion(myPathIngr + "Dijon.jpg",          "חרדל דיז'ון")
const ing_eggplant      = new imgQuestion(myPathIngr + "Eggplant.jpg",       "חציל")
const ing_eggs          = new imgQuestion(myPathIngr + "Eggs.jpg",           "ביצים")
const ing_fish          = new imgQuestion(myPathIngr + "Fish.jpg",           "דג")
const ing_flour         = new imgQuestion(myPathIngr + "Flour.jpg",          "קמח")
const ing_fromageblanc  = new imgQuestion(myPathIngr + "Fromage.jpg",        "גבינה לבנה")
const ing_gamba         = new imgQuestion(myPathIngr + "Gamba.jpg",          "גמבה")
const ing_garlic        = new imgQuestion(myPathIngr + "Garlic.jpg",         "שום")
const ing_garlicpowder  = new imgQuestion(myPathIngr + "GarlicPowder.jpg",   "אבקת שום")
const ing_hawayeg       = new imgQuestion(myPathIngr + "Hawaej.jpg",         "חוואיג'")
const ing_hotpepper     = new imgQuestion(myPathIngr + "HotPepper.jpg",      "פלפל חריף")
const ing_humus         = new imgQuestion(myPathIngr + "Humus.jpg",          "גרגירי חומוס")
const ing_jam           = new imgQuestion(myPathIngr + "Jam.jpg",            "ריבה")
const ing_kadaif        = new imgQuestion(myPathIngr + "Kadaif.jpg",         "קדאיף")
const ing_lemon         = new imgQuestion(myPathIngr + "Lemon.jpg",          "לימון")
const ing_lentils       = new imgQuestion(myPathIngr + "Lentils.jpg",        "עדשים")
const ing_maple         = new imgQuestion(myPathIngr + "Maple.jpg",          "מייפל")
const ing_margarine     = new imgQuestion(myPathIngr + "Margarine.jpg",      "מרגרינה")
const ing_matzaflour    = new imgQuestion(myPathIngr + "MatsaFlour.jpg",     "קמח מצה")
const ing_mayonnaise    = new imgQuestion(myPathIngr + "Mayonese.jpg",       "מיונז")
const ing_meat          = new imgQuestion(myPathIngr + "Meat.jpg",           "בשר")
const ing_milk          = new imgQuestion(myPathIngr + "Milk.jpg",           "חלב")
const ing_mince         = new imgQuestion(myPathIngr + "Mince.jpg",          "בשר טחון")
const ing_mozzarella    = new imgQuestion(myPathIngr + "Mozarella.jpg",      "מוצרלה")
const ing_mushrooms     = new imgQuestion(myPathIngr + "Mashrooms.jpg",      "פטריות")
const ing_noodles       = new imgQuestion(myPathIngr + "Noodles.jpg",        "אתריות")
const ing_oil           = new imgQuestion(myPathIngr + "Oil.jpg",            "שמן")
const ing_oliveoil      = new imgQuestion(myPathIngr + "OliveOil.jpg",       "שמן זית")
const ing_onion         = new imgQuestion(myPathIngr + "Onion.jpg",          "בצל")
const ing_paprika       = new imgQuestion(myPathIngr + "Paprika.jpg",        "פפריקה")
const ing_parmesan      = new imgQuestion(myPathIngr + "Parmesan.jpg",       "פרמזן")
const ing_parsley       = new imgQuestion(myPathIngr + "Parsley.jpg",        "פטרוזיליה")
const ing_persianlemon  = new imgQuestion(myPathIngr + "PersianLemon.jpg",   "לימון פרסי")
const ing_phyllodough   = new imgQuestion(myPathIngr + "Phyllo.jpg",         "בצק פילו")
const ing_pistachio     = new imgQuestion(myPathIngr + "Pistaccio.jpg",      "פיסטוק")
const ing_pita          = new imgQuestion(myPathIngr + "Pita.jpg",           "פיתה")
const ing_poppy         = new imgQuestion(myPathIngr + "Poppy.jpg",          "פרג")
const ing_potato        = new imgQuestion(myPathIngr + "Potato.jpg",         "תפוח אדמה")
const ing_pumpkin       = new imgQuestion(myPathIngr + "Pumpkin.jpg",        "דלעת")
const ing_rice          = new imgQuestion(myPathIngr + "Rice.jpg",           "אורז")
const ing_rosewater     = new imgQuestion(myPathIngr + "RoseWater.jpg",      "מי ורדים")
const ing_semolina      = new imgQuestion(myPathIngr + "Semolina.jpg",       "סולת")
const ing_sesame        = new imgQuestion(myPathIngr + "Sesam.jpg",          "שומשום")
const ing_sesameoil     = new imgQuestion(myPathIngr + "SesameOil.jpg",      "שמן שומשום")
const ing_siga          = new imgQuestion(myPathIngr + "Siga.jpg",           "סיגא")
const ing_soysauce      = new imgQuestion(myPathIngr + "SoySauce.jpg",       "רוטב סויה")
const ing_spagetti      = new imgQuestion(myPathIngr + "Spagetti.jpg",       "ספגטי")
const ing_spleen        = new imgQuestion(myPathIngr + "Spleen.jpg",         "טחול")
const ing_sugar         = new imgQuestion(myPathIngr + "Sugar.jpg",          "סוכר")
const ing_sugarpowder   = new imgQuestion(myPathIngr + "SugarPowder.jpg",    "אבקת סוכר")
const ing_sugarwater    = new imgQuestion(myPathIngr + "SugarWater.jpg",     "מי סוכר")
const ing_taf           = new imgQuestion(myPathIngr + "Taf.jpg",            "טאף")
const ing_tomato        = new imgQuestion(myPathIngr + "Tomato.jpg",         "עגבניה")
const ing_tomatopaste   = new imgQuestion(myPathIngr + "TomatoPaste.jpg",    "רסק עגבניות")
const ing_turmeric      = new imgQuestion(myPathIngr + "Turmeric.jpg",       "כורכום")
const ing_vanillapudding = new imgQuestion(myPathIngr + "Pudding.jpg",       "פודינג וניל")
const ing_vanillasugar  = new imgQuestion(myPathIngr + "VanillaSugar.jpg",   "סוכר וניל")
const ing_wheat         = new imgQuestion(myPathIngr + "Wheat.jpg",          "חיטה")
const ing_yeast         = new imgQuestion(myPathIngr + "Yeast.jpg",          "שמרים")
const ing_yogurt        = new imgQuestion(myPathIngr + "Yogurt.jpg",         "יוגורט")


//===============================================================================
// List of Dishes

const myPathDish = "./Images/Dishes/";

const dish_Alfredo      = new imgQuestion(myPathDish + "Alfredo.jpg",       "פסטה אלפרדו")
const dish_Arayes       = new imgQuestion(myPathDish + "Arayes.jpg",        "עראייס")
const dish_Artichoke    = new imgQuestion(myPathDish + "Artichoke.jpg",     "ארטישוק ממולא")
const dish_Borsht       = new imgQuestion(myPathDish + "Borsht.jpg",        "בורשט")
const dish_Burekas      = new imgQuestion(myPathDish + "Burekas.jpg",       "בורקס בשר")
const dish_Caprese      = new imgQuestion(myPathDish + "Caprese.jpg",       "סלט קפרז\'ה")
const dish_CheeseCake   = new imgQuestion(myPathDish + "CheeseCake.jpg",    "עוגת גבינה")
const dish_CornKish     = new imgQuestion(myPathDish + "CornKish.jpg",      "פשטידת תירס")
const dish_DateCookies  = new imgQuestion(myPathDish + "DateCookies.jpg",   "עוגיות תמרים")
const dish_Donut        = new imgQuestion(myPathDish + "Donut.jpg",         "סופגניה")
const dish_Falafel      = new imgQuestion(myPathDish + "Falafel.jpg",       "פלאפל")
const dish_FilledGamba  = new imgQuestion(myPathDish + "FilledGamba.jpg",   "פלפלים ממולאים")
const dish_Fish_and_chips = new imgQuestion(myPathDish + "Fish_and_chips.jpg", "פיש\&צ\'יפס")
const dish_FishBalls    = new imgQuestion(myPathDish + "FishBalls.jpg",     "קציצות דגים")
const dish_GormeSabzi   = new imgQuestion(myPathDish + "GormeSabzi.jpg",    "גורמי סבזי")
const dish_Guacamole    = new imgQuestion(myPathDish + "Guacamole.jpg",     "גוואקאמולי")
const dish_Holodets     = new imgQuestion(myPathDish + "Holodets.jpg",      "רגל קרושה")
const dish_Hrira        = new imgQuestion(myPathDish + "Hrira.jpg",         "מרק חרירה")
const dish_Injera       = new imgQuestion(myPathDish + "Injera.jpg",        "אינג\'רה")
const dish_Jerusalem    = new imgQuestion(myPathDish + "Jerusalem.jpg",     "מעורב ירושלמי")
const dish_Khamin       = new imgQuestion(myPathDish + "Khamin.jpg",        "חמין")
const dish_Knafe        = new imgQuestion(myPathDish + "Knafe.jpg",         "כנאפה")
const dish_Kneidalach   = new imgQuestion(myPathDish + "Kneidalach.jpg",    "קניידלך")
const dish_Kuba         = new imgQuestion(myPathDish + "Kuba.jpg",          "קובה סלק")
const dish_Kuskus       = new imgQuestion(myPathDish + "Kuskus.jpg",        "קוסקוס")
const dish_Majadra      = new imgQuestion(myPathDish + "Majadra.jpg",       "מג\'דרה")
const dish_Makluba      = new imgQuestion(myPathDish + "Makluba.jpg",       "מקלובה")
const dish_Maroccan_fish = new imgQuestion(myPathDish + "Maroccan_fish.jpg", "דג מרוקאי")
const dish_Mafrum       = new imgQuestion(myPathDish + "Mafrum.jpg",        "מפרום")
const dish_Matbukha     = new imgQuestion(myPathDish + "Matbukha.jpg",      "מטבוחה")
const dish_Musaka       = new imgQuestion(myPathDish + "Musaka.jpg",        "מוסקה")
const dish_Olivier      = new imgQuestion(myPathDish + "Olivier.jpg",       "סלט אוליביה")
const dish_OzneyAman    = new imgQuestion(myPathDish + "OzneyAman.jpg",     "אוזני המן")
const dish_Pancake      = new imgQuestion(myPathDish + "Pancake.jpg",       "פנקייק")
const dish_Pizza        = new imgQuestion(myPathDish + "Pizza.jpg",         "פיצה")
const dish_ScrambledEggs = new imgQuestion(myPathDish + "ScrambledEggs.jpg", "חביתת ירק")
const dish_Schnitzel    = new imgQuestion(myPathDish + "Schnitzel.jpg",     "שניצל")
const dish_Shakshuka    = new imgQuestion(myPathDish + "Shakshuka.jpg",     "שקשוקה")
const dish_Thailand     = new imgQuestion(myPathDish + "Thailand.jpg",      "מוקפץ תאילנדי")
const dish_Tsiziki      = new imgQuestion(myPathDish + "Tsiziki.jpg",       "ציזיקי")


class Dish {
    constructor(dishParams, Ingredients, dishWrong) {
        this.DishParams = dishParams;
        this.Ingredients = Ingredients;
        this.WrongIngredients = dishWrong;
    }
}

var DishList = [
    new Dish(dish_Alfredo,      [ing_spagetti, ing_cream, ing_mushrooms, ing_parmesan, ing_onion],      ["תפוח", "מישמש", "חלב עזים", "בטטה", "חזה עוף"]),
    new Dish(dish_Arayes,       [ing_pita, ing_oliveoil, ing_meat, ing_parsley, ing_onion],             ["ביצי תוכי", "כרוב אדום", "שמנת", "כוסמת", "תמרים"]),
    new Dish(dish_Artichoke,    [ing_artichoke, ing_datehoney, ing_garlic, ing_celery, ing_mince],      ["שוקולד", "כרוב לבן", "יוגורט", "מוצרלה", "בצק עלים"]),
    new Dish(dish_Borsht,       [ing_potato, ing_cabbage, ing_beet, ing_meat, ing_carrot],              ["שוקולד", "ממרח תמרים", "קולה", "מוצרלה", " בורגול"]),
    new Dish(dish_Burekas,      [ing_phyllodough, ing_mince, ing_tomato, ing_baharat, ing_oliveoil],    ["אבוקדו", "מושט", "חלב עזים", "שיבולת שועל", "פודינג וניל"]),
    new Dish(dish_Caprese,      [ing_balsamic, ing_mozzarella, ing_basil, ing_tomato, ing_coarsesalt],  ["פתיתים", "במבה", "אבקת אפיה", "שוקולד", "קולה"]),
    new Dish(dish_CheeseCake,   [ing_eggs, ing_flour, ing_fromageblanc, ing_vanillasugar, ing_vanillapudding], ["בשר טחון", "תפוח", "תפוח אדמה", "פסטה", "חזה עוף"]),
    new Dish(dish_CornKish,     [ing_butter, ing_corn, ing_cheese, ing_flour, ing_cream],               ["אפרסק", "אבטיח", "מיונז", "שוקולד", "שמנת מתוקה"]),
    new Dish(dish_DateCookies,  [ing_datespread, ing_flour, ing_eggs, ing_margarine, ing_bakingpowder], ["אבוקדו", "ממרח שוקולד", "פלאפל", "מישמש", "סלרי"]),
    new Dish(dish_Donut,        [ing_sugar, ing_flour, ing_jam, ing_sugarpowder, ing_oil],              ["אבוקדו", "חזה עוף", "בשר טחון", "עגבניה", "חציל"]),
    new Dish(dish_Falafel,      [ing_humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper],         ["במבה", "מושט", "חלב עזים", "תמרים", "פתיתים"]),
    new Dish(dish_FilledGamba,  [ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion],                 ["אבקת אפיה", "ביצים", "שוקולד", "תפוז", "מיונז"]),
    new Dish(dish_Fish_and_chips, [ing_fish, ing_beer, ing_potato, ing_oil, ing_flour],                 ["גבינה לבנה", "בשר טחון", "שזיף", "קרונפלקס", "מיונז"]),
    new Dish(dish_FishBalls,    [ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina],         ["חמאת בוטנים", "גבינת עזים", "תפוח", "פטל", "חלב"]),
    new Dish(dish_GormeSabzi,   [ing_turmeric, ing_bean, ing_persianlemon, ing_onion, ing_parsley],     ["שמרים", "ממרח תמרים", "ערק", "קרם בורלה", "ביסלי"]),
    new Dish(dish_Guacamole,    [ing_avocado, ing_lemon, ing_garlic, ing_tomato, ing_oliveoil],         ["תפוח אדמה", "מושט", "חלב עזים", "שמנת", "פודינג וניל"]),
    new Dish(dish_Holodets,     [ing_beefarm, ing_onion, ing_celery, ing_garlic, ing_carrot],           ["שמרים", "ממרח תמרים", "אבקת אפיה", "ענבים", "יוגורט"]),
    new Dish(dish_Hrira,        [ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery],             ["פלאפל", "קבוקים", "שוקולד לבן", "תפוז", "חמאה"]),
    new Dish(dish_Injera,       [ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs],                 ["שזיף", "במבה", "חלב עזים", "מלפפון", "תפוח"]),
    new Dish(dish_Jerusalem,    [ing_spleen, ing_chickenbreast, ing_hawayeg, ing_turmeric, ing_onion],  ["תפוח", "קרקר", "פודינג וניל", "חלב", "מלוואח"]),
    new Dish(dish_Khamin,       [ing_eggs, ing_wheat, ing_potato, ing_bean, ing_rice],                  ["שמרים", "אבקת אפיה", "חלב עזים", "פיתה", "שוקולד לבן"]),
    new Dish(dish_Knafe,        [ing_cheese, ing_kadaif, ing_rosewater, ing_sugarwater, ing_pistachio], ["דג", "גמבה", "חזה עוף", "מיונז", "עגבניה"]),
    new Dish(dish_Kneidalach,   [ing_matzaflour, ing_eggs, ing_oil, ing_chickensoup],                  ["חציל", "בורי", "במבה", "מלון"]),
    new Dish(dish_Kuba,         [ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste],        ["חלב", "מושט", "גבינת חלומי", "קרונפלקס", "פטל"]),
    new Dish(dish_Kuskus,       [ing_semolina, ing_pumpkin, ing_chicken, ing_carrot, ing_cabbage],      ["שמרים", "גבינה לבנה", "ריבת תות", "שזיף", "שוקולד"]),
    new Dish(dish_Mafrum,       [ing_burgul, ing_cauliflower, ing_onion, ing_mince, ing_parsley],       ["פסטה", "קורנפלקס", "תפוח", "פופקורן", "פטל"]),
    new Dish(dish_Majadra,      [ing_rice, ing_onion, ing_lentils],                                     ["לחם", "חלב ", "קמח"]),
    new Dish(dish_Makluba,      [ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato],          ["מלפפון", "שמנת מתוקה", "שמרים", "שיבולת שועל", "גבינת חלומי"]),
    new Dish(dish_Maroccan_fish, [ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba],            ["אבוקדו", "נקניק", "אבקת אפייה", "עוף", "שמרים"]),
    new Dish(dish_Matbukha,     [ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste],      ["מלפפון חמוץ", "תפוח אדמה", "אפרסק", "תפוז", "בצק עלים"]),
    new Dish(dish_Musaka,       [ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley],           ["מלפפון", "מושט", "גבינה לבנה", "שמנת מתוקה", "שיבולת שועל"]),
    new Dish(dish_Olivier,      [ing_potato, ing_carrot, ing_eggs, ing_chickenbreast, ing_mayonnaise],  ["קמח", "ריבת תות", "חלב ", "טחינה", "פלפל חריף"]),
    new Dish(dish_OzneyAman,    [ing_yeast, ing_poppy, ing_chokolate, ing_flour, ing_butter],           ["בשר טחון", "כרוב לבן", "מיונז", "טחינה", "מלפפון"]),
    new Dish(dish_Pancake,      [ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple],                  ["חסה", "בורי", "אנריקוט", "פטרוזיליה", "עגבניה"]),
    new Dish(dish_Pizza,        [ing_flour, ing_yeast, ing_tomatopaste, ing_cheese, ing_oliveoil],      ["עוף", "דוריטוס", "ממרח תמרים", "בשר טחון", "חומוס"]),
    new Dish(dish_ScrambledEggs,[ing_eggs, ing_oliveoil, ing_onion, ing_parsley],                       ["קמח תופח", "פסטה", "דג", "שוקולד"]),
    new Dish(dish_Schnitzel,    [ing_eggs, ing_breadcrumbs, ing_chickenbreast, ing_sesame, ing_dijonmustard], ["בשר טחון", "גבינה לבנה", "פסטה", "שיבולת שועל", "פודינג וניל"]),
    new Dish(dish_Shakshuka,    [ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika],            ["שוקולד", "פתיתים", "אגס", "חלב עזים", "קוסקוס"]),
    new Dish(dish_Thailand,     [ing_chilesouce, ing_soysauce, ing_sesameoil, ing_chicken, ing_gamba],  ["שוקולד", "שמרים", "'קוטג", "דגני בוקר", "פלאפל"]),
    new Dish(dish_Tsiziki,      [ing_yogurt, ing_oliveoil, ing_cucumber, ing_dill],                     ["בוטנים", "מושט", "שוקולד", "שקדי מרק"])
];

var myIdx;
var isIntro;
var myQuestions = [];

function updateIndicator(myIdx) {
  const myStageIndicator = myStageIndicators[myIdx];
  const myBox = document.getElementById(myStageIndicator);

  myBox.classList.remove("greenbox");
  myBox.classList.add("answer");
}

function displayIntro(myIntro) {
    isIntro = true;

    myIntro.style.display = 'block';
    myIntro.style.fontSize = '20px';
    myIntro.style.backgroundColor = 'blue';
    myIntro.style.border = 'lightblue 5px solid';
}

function getDishes() {
    // This function returns an array of 5 integers (indexes)
    // taken randomly out of list of 40 Dishes.
    // Each number can appear only once.

    var myDishArray = [];

    for (let i = 0; i < numDishes; i++) {
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


//==================== Battery Update =============================================================

var batteryUpdate = 20;
var batteryResult = 0;
const batteryStyle = document.getElementById("charge").style;
const batteryHeader = document.getElementById("Execution");

function changeBattery(myInput) {
  batteryStyle.height = `${batteryResult += myInput}%`;

  if      (batteryResult <= 20)                        batteryStyle.backgroundColor = "red";
  else if (batteryResult > 20 && batteryResult <= 40) batteryStyle.backgroundColor = "orange";
  else if (batteryResult > 40 && batteryResult <= 60) batteryStyle.backgroundColor = "yellow"; 
  else if (batteryResult > 60 && batteryResult <= 80) batteryStyle.backgroundColor = "lightgreen"; 
  else /*if (batteryResult > 80 && batteryResult <= 100)*/ batteryStyle.backgroundColor = "#00ff00";
  if (batteryResult >= 100) document.getElementById("battery_head").style.backgroundColor = "#00ff00";


  batteryHeader.innerHTML = `ביצוע: ${batteryResult}%`;
}
//==================== Battery Update  - end =======================================================




//==============================================================
// FUNCTIONS B
//==============================================================

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

function detectEndOfLevel() {
    if (myIdx >= numQuests - 1) return true;
    else return false;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.shuffle = function () {
    let i = this.length;
    let rnd;
    let temp;

    while (--i > 0) {
        rnd = getRndInteger(0, i + 1);
        temp = this[rnd];
        this[rnd] = this[i];
        this[i] = temp;
    }
}