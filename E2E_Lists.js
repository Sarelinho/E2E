const myTitle = "חידון מאכלים";
const mySubTitle = "תשפ\"ב (2021-2022), מכללת כנרת, פרויקט גמר בקורס E2E";
const myFooter = "בוצע ע\"י: <br>אזגורי ישי, אזולי שראל, גסקובסקי גל, דגו יוסף, מראי שלמה, נחמני דניאל, ספורי נידאל, צ\'רקסוב איתן"

document.getElementById("headerText1").innerHTML = myTitle;
document.getElementById("head").innerHTML = mySubTitle;
document.getElementById("foot").innerHTML = myFooter;


  // Once a button pressed, convert its key value into a number ("97" is "a" in ASCII)
  // and run the function to handle user's repsonse:
  document.body.addEventListener("keypress", (e) => {
    const myPressedButton = e.key.charCodeAt(0) - 97;
    respondOnKey(myPressedButton);
  });

class Dish {
  constructor(name, ingr1, ingr2, ingr3, ingr4, ingr5/*, arrWrong*/) {
      this.DishName = name;
      this.Ingredient1 = ingr1;
      this.Ingredient2 = ingr2;
      this.Ingredient3 = ingr3;
      this.Ingredient4 = ingr4;
      this.Ingredient5 = ingr5;
      //this.WrongOptions = arrWrong;
  }
}

class Ingred {
  constructor(name, image) {
    this.IngredName = name;
    this.IngredImage = image;
  }
}

//===============================================================================
// List of Ingredients

//const myPath = "";
const myPath = ".Images\\Ingreds\\";
 
const ing_dummy = "dummy";
const ing_artichoke     = new Ingred("ארטישוק", `${myPath}Artichoke.jpg`);
const ing_avocado       = new Ingred("אבוקדו", `${myPath}Avocado.jpg`);
const ing_baharat       = new Ingred("בהרט", `${myPath}Baharat.jpg`);
const ing_bakingpowder  = new Ingred("אבקת אפיה",`${myPath}BakingPowder.jpg`);
const ing_balsamic      = new Ingred("רוטב בלסמי",`${myPath}Balsamic.jpg`);
const ing_basil         = new Ingred("בזיליקום", `${myPath}Basil.jpg`);
const ing_bean          = new Ingred("שעועית", `${myPath}Bean.jpg`);
const ing_beefarm       = new Ingred("זרוע בקר", `${myPath}BeefArm.jpg`);
const ing_beer          = new Ingred("בירה", `${myPath}Beer.jpg`);
const ing_beet          = new Ingred("סלק", `${myPath}Beet.jpg`);
const ing_breadcrumbs   = new Ingred("פירורי לחם", `${myPath}BreadCrumbs.jpg`);
const ing_burgul          = new Ingred("בורגול", `${myPath}Bulgur.jpg`);
const ing_butter          = new Ingred("חמאה", `${myPath}Butter.jpg`);
const ing_cabbage          = new Ingred("כרוב", `${myPath}Cabbage.jpg`);
const ing_carrot          = new Ingred("גזר", `${myPath}Carrot.jpg`);
const ing_cauliflower          = new Ingred("כרובית", `${myPath}Cauliflower.jpg`);
const ing_celery          = new Ingred("סלרי", `${myPath}Celery.jpg`);
const ing_cheese          = new Ingred("גבינה צהובה", `${myPath}Cheese.jpg`);
const ing_chicken          = new Ingred("עוף", `${myPath}Chicken.jpg`);
const ing_chickenbreast          = new Ingred("חזה עוף", `${myPath}ChickenBreast.jpg`);
const ing_chickensoup          = new Ingred("מרק עוף", `${myPath}ChickenSoup.jpg`);
const ing_chilesouce          = new Ingred("רוטב צ'ילי", `${myPath}Chile.jpg`);
const ing_chokolate          = new Ingred("שוקולד", `${myPath}Chocolate.jpg`);
const ing_cucumber          = new Ingred("מלפפון", `${myPath}Cucumber.jpg`);
const ing_coarsesalt          = new Ingred("מלח גס", `${myPath}Salt.jpg`);
const ing_corn          = new Ingred("תירס", `${myPath}Corn.jpg`);
const ing_cream          = new Ingred("שמנת", `${myPath}Cream.jpg`);
const ing_datehoney          = new Ingred("סילן", `${myPath}DateHoney.jpg`);
const ing_datespread          = new Ingred("ממרח תמרים", `${myPath}DateSpread.jpg`);
const ing_dill          = new Ingred("שמיר", `${myPath}Dill.jpg`);
const ing_dijonmustard          = new Ingred("חרדל דיז'ון", `${myPath}Dijon.jpg`);
const ing_eggplant          = new Ingred("חציל", `${myPath}Eggplant.jpg`);
const ing_eggs          = new Ingred("ביצים", `${myPath}Eggs.jpg`);
const ing_fish          = new Ingred("דג", `${myPath}Fish.jpg`);
const ing_flour          = new Ingred("קמח", `${myPath}Flour.jpg`);
const ing_fromageblanc          = new Ingred("גבינה לבנה", `${myPath}Fromage.jpg`);
const ing_gamba          = new Ingred("גמבה", `${myPath}Gamba.jpg`);
const ing_garlic          = new Ingred("שום", `${myPath}Garlic.jpg`);
const ing_garlicpowder          = new Ingred("אבקת שום", `${myPath}GarlicPowder.jpg`);
const ing_hawayeg          = new Ingred("'חוואיג", `${myPath}Hawaej.jpg`);
const ing_hotpepper          = new Ingred("פלפל חריף", `${myPath}HotPepper.jpg`);
const ing_humus          = new Ingred("גרגירי חומוס", `${myPath}Humus.jpg`);
const ing_jam          = new Ingred("ריבה", `${myPath}Jam.jpg`);
const ing_kadaif          = new Ingred("קדאיף", `${myPath}Kadaif.jpg`);
const ing_lemon          = new Ingred("לימון", `${myPath}Lemon.jpg`);
const ing_lentils          = new Ingred("עדשים", `${myPath}Lentils.jpg`);
const ing_maple          = new Ingred("מייפל", `${myPath}Maple.jpg`);
const ing_margarine          = new Ingred("מרגרינה", `${myPath}Margarine.jpg`);
const ing_matzaflour          = new Ingred("קמח מצה", `${myPath}MatsaFlour.jpg`);
const ing_mayonnaise          = new Ingred("מיונז", `${myPath}Mayonese.jpg`);
const ing_meat          = new Ingred("בשר", `${myPath}Meat.jpg`);
const ing_milk          = new Ingred("חלב", `${myPath}Milk.jpg`);
const ing_mince          = new Ingred("בשר טחון", `${myPath}Mince.jpg`);
const ing_mozzarella          = new Ingred("מוצרלה", `${myPath}Mozarella.jpg`);
const ing_mushrooms          = new Ingred("פטריות", `${myPath}Mashrooms.jpg`);
const ing_noodles          = new Ingred("איטריות", `${myPath}Noodles.jpg`);
const ing_oil          = new Ingred("שמן", `${myPath}Oil.jpg`);
const ing_oliveoil          = new Ingred("שמן זית", `${myPath}OliveOil.jpg`);
const ing_onion          = new Ingred("בצל", `${myPath}Onion.jpg`);
const ing_paprika          = new Ingred("פפריקה", `${myPath}Paprika.jpg`);
const ing_parmesan          = new Ingred("פרמזן", `${myPath}Parmesan.jpg`);
const ing_parsley          = new Ingred("פטרוזיליה", `${myPath}Parsley.jpg`);
const ing_persianlemon          = new Ingred("לימון פרסי", `${myPath}PersianLemon.jpg`);
const ing_phyllodough          = new Ingred("בצק פילו", `${myPath}Phyllo.jpg`);
const ing_pistachio          = new Ingred("פיסטוק", `${myPath}Pistaccio.jpg`);
const ing_pita          = new Ingred("פיתה", `${myPath}Pita.jpg`);
const ing_poppy          = new Ingred("פרג", `${myPath}Poppy.jpg`);
const ing_potato          = new Ingred("תפוח אדמה", `${myPath}Potato.jpg`);
const ing_pumpkin          = new Ingred("דלעת", `${myPath}Pumpkin.jpg`);
const ing_rice          = new Ingred("אורז", `${myPath}Rice.jpg`);
const ing_rosewater          = new Ingred("מי ורדים", `${myPath}RoseWater.jpg`);
const ing_semolina          = new Ingred("סולת", `${myPath}Semolina.jpg`);
const ing_sesame          = new Ingred("שומשום", `${myPath}Sesam.jpg`);
const ing_sesameoil          = new Ingred("שמן שומשום", `${myPath}SesameOil.jpg`);
const ing_siga          = new Ingred("סיגא", `${myPath}Siga.jpg`);
const ing_soysauce          = new Ingred("רוטב סויה", `${myPath}SoySauce.jpg`);
const ing_spagetti          = new Ingred("ספגטי", `${myPath}Spagetti.jpg`);
const ing_spleen          = new Ingred("טחול", `${myPath}Spleen.jpg`);
const ing_sugar          = new Ingred("סוכר", `${myPath}Sugar.jpg`);
const ing_sugarpowder          = new Ingred("אבקת סוכר", `${myPath}SugarPowder.jpg`);
const ing_sugarwater          = new Ingred("מי סוכר", `${myPath}SugarWater.jpg`);
const ing_taf          = new Ingred("טאף", `${myPath}Taf.jpg`);
const ing_tomato          = new Ingred("עגבניה", `${myPath}Tomato.jpg`);
const ing_tomatopaste          = new Ingred("רסק עגבניות", `${myPath}TomatoPaste.jpg`);
const ing_turmeric          = new Ingred("כורכום", `${myPath}Turmeric.jpg`);
const ing_vanillapudding          = new Ingred("פודינג וניל ", `${myPath}Pudding.jpg`);
const ing_vanillasugar          = new Ingred("סוכר וניל", `${myPath}VanillaSugar.jpg`);
const ing_wheat          = new Ingred("חיטה", `${myPath}Wheat.jpg`);
const ing_yeast          = new Ingred("שמרים", `${myPath}Yeast.jpg`);
const ing_yogurt          = new Ingred("יוגורט", `${myPath}Yogurt.jpg`);





//===============================================================================
// List of Dishes


var DishList = [
    //new Dish("עראייס", ing_pita.image, ing_oliveoil.image, ing_meat.image, ing_parsley.image, ing_onion.image, ["ביצי תוקי", "כרוב אדום", "שמנת", "כוסמת", "תמרים"]),
    //new Dish("ארטישוק ממולא", ing_artichoke.image, ing_datehoney.image, ing_garlic.image, ing_celery.image, ing_mince.image, ["שוקולד", "כרוב לבן", "יוגורט", "מוצרלה", "בצק עלים"]),
    //new Dish("בורקס בשר", ing_phyllodough.image, ing_mince.image, ing_tomato.image, ing_baharat.image, ing_oliveoil.image, ["אבוקדו", "מושט", "חלב עזים", "שיבולת שועל", "פודינג וניל"]),
    
    
    
    new Dish("אוזני המן", ing_yeast, ing_poppy, ing_chokolate, ing_flour, ing_butter, ["בשר טחון", "כרוב לבן", "מיונז", "טחינה", "מלפפון"]),
    new Dish("אינג\'רה", ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs, ["שזיף", "במבה", "חלב עזים", "מלפפון", "תפוח"]),
    new Dish("ארטישוק ממולא", ing_artichoke, ing_datehoney, ing_garlic, ing_celery, ing_mince, ["שוקולד", "כרוב לבן", "יוגורט", "מוצרלה", "בצק עלים"]),
    new Dish("בורקס בשר", ing_phyllodough, ing_mince, ing_tomato, ing_baharat, ing_oliveoil, ["אבוקדו", "מושט", "חלב עזים", "שיבולת שועל", "פודינג וניל"]),
    new Dish("בורשט", ing_potato, ing_cabbage, ing_beet, ing_meat, ing_carrot, ["שוקולד", "ממרח תמרים", "קולה", "מוצרלה", " בורגול"]),
    new Dish("גוואקאמולי", ing_avocado, ing_lemon, ing_garlic, ing_tomato, ing_oliveoil, ["תפוח אדמה", "מושט", "חלב עזים", "שמנת", "פודינג וניל"]),
    new Dish("גורמי סבזי", ing_turmeric, ing_bean, ing_persianlemon, ing_onion, ing_parsley, ["שמרים", "ממרח תמרים", "ערק", "קרם בורלה", "ביסלי"]),
    new Dish("דג מרוקאי", ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba, ["אבוקדו", "נקניק", "אבקת אפייה", "עוף", "שמרים"]),
    new Dish("חביתת ירק", ing_eggs, ing_oliveoil, ing_onion, ing_parsley, ing_dummy, ["בשר טחון", "קמח תופח", "פסטה", "דג", "שוקולד"]),
    new Dish("חמין", ing_eggs, ing_wheat, ing_potato, ing_bean, ing_rice, ["שמרים", "אבקת אפיה", "חלב עזים", "פיתה", "שוקולד לבן"]),
    new Dish("כנאפה", ing_cheese, ing_kadaif, ing_rosewater, ing_sugarwater, ing_pistachio, ["דג", "גמבה", "חזה עוף", "מיונז", "עגבניה"]),
    new Dish("מג'דרה", ing_rice, ing_dummy, ing_onion, ing_dummy, ing_lentils, ["פסטה", "לחם", "חלב ", "קמח", "פודינג וניל"]),
    new Dish("מוסקה", ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley, ["מלפפון", "מושט", "גבינה לבנה", "שמנת מתוקה", "שיבולת שועל"]),
    new Dish("מוקפץ תאילנדי", ing_chilesouce, ing_soysauce, ing_sesameoil, ing_chicken, ing_gamba, ["שוקולד", "שמרים", "'קוטג", "דגני בוקר", "פלאפל"]),
    new Dish("מטבוחה", ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste, ["מלפפון חמוץ", "תפוח אדמה", "אפרסק", "תפוז", "בצק עלים"]),
    new Dish("מעורב ירושלמי", ing_spleen, ing_chickenbreast, ing_hawayeg, ing_turmeric, ing_onion, ["תפוח", "קרקר", "חלב", "מלוואח", "פודינג וניל"]),
    new Dish("מפרום", ing_burgul, ing_cauliflower, ing_onion, ing_mince, ing_parsley, ["פסטה", "קרונפלקס", "תפוח", "פופקורן", "פטל"]),
    new Dish("מקלובה", ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato, ["מלפפון", "שמנת מתוקה", "שמרים", "שיבולת שועל", "גבינת חלומי"]),
    new Dish("מרק חרירה", ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery, ["פלאפל", "קבוקים", "שוקולד לבן", "תפוז", "חמאה"]),
    new Dish("סופגניה", ing_sugar, ing_flour, ing_jam, ing_sugarpowder, ing_oil, ["אבוקדו", "חזה עוף", "בשר טחון", "עגבניה", "חציל"]),
    new Dish("סלט אוליביה", ing_potato, ing_carrot, ing_eggs, ing_chickenbreast, ing_mayonnaise, ["קמח", "ריבת תות", "חלב ", "שמרים", "פודינג וניל"]),
    new Dish("סלט קפרז\'ה", ing_balsamic, ing_mozzarella, ing_basil, ing_tomato, ing_coarsesalt, ["פתיתים", "במבה", "אבקת אפיה", "שוקולד", "קולה"]),
    new Dish("עוגיות תמרים", ing_datespread, ing_flour, ing_eggs, ing_margarine, ing_bakingpowder, ["אבוקדו", "ממרח שוקולד", "פלאפל", "מישמש", "סלרי"]),
    new Dish("עוגת גבינה", ing_eggs, ing_flour, ing_fromageblanc, ing_vanillasugar, ing_vanillapudding, ["בשר טחון", "תפוח", "תפוח אדמה", "פסטה", "חזה עוף"]),
    new Dish("עראייס", ing_pita, ing_oliveoil, ing_meat, ing_parsley, ing_onion, ["ביצי תוכי", "כרוב אדום", "שמנת", "כוסמת", "תמרים"]),
    new Dish("פיצה", ing_flour, ing_yeast, ing_tomatopaste, ing_cheese, ing_oliveoil, ["עוף", "דוריטוס", "ממרח תמרים", "בשר טחון", "חומוס"]),
    new Dish("פיש\&צ\'יפס", ing_fish, ing_beer, ing_potato, ing_oil, ing_flour, ["גבינה לבנה", "בשר טחון", "שזיף", "קרונפלקס", "פודינג וניל"]),
    new Dish("פלאפל", ing_humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper, ["במבה", "מושט", "חלב עזים", "תמרים", "פתיתים"]),
    new Dish("פלפלים ממולאים", ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion, ["אבקת אפיה", "ביצים", "שוקולד", "תפוז", "מיונז"]),
    new Dish("פנקייק", ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple, ["חסה", "בורי", "אנריקוט", "פטרוזיליה", "עגבניה"]),
    new Dish("פסטה אלפרדו", ing_spagetti, ing_cream, ing_garlicpowder, ing_parmesan, ing_onion, ["תפוח", "מישמש", "חלב עזים", "בטטה", "חזה עוף"]),
    new Dish("פשטידת תירס", ing_butter, ing_corn, ing_cheese, ing_flour, ing_cream, ["אפרסק", "אבטיח", "מיונז", "שוקולד", "שמנת מתוקה"]),
    new Dish("ציזיקי", ing_yogurt, ing_oliveoil, ing_cucumber, ing_dill, ing_dummy, ["בוטנים", "מושט", "שוקולד", "אפרסק", "שקדי מרק"]),
    new Dish("קובה סלק", ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste, ["חלב", "מושט", "גבינת חלומי", "קרונפלקס", "פטל"]),
    new Dish("קוסקוס", ing_semolina, ing_pumpkin, ing_chicken, ing_carrot, ing_cabbage, ["שמרים", "גבינה לבנה", "ריבת תות", "שזיף", "שוקולד"]),
    new Dish("קניידלך", ing_matzaflour, ing_eggs, ing_oil, ing_chickensoup, ing_dummy, ["חציל", "בורי", "במבה", "מישמש", "מלון"]),
    new Dish("קציצות דגים", ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina, ["בשר טחון", "גבינת עזים", "תפוח", "פטל", "חלב"]),
    new Dish("רגל קרושה", ing_beefarm, ing_onion, ing_celery, ing_garlic, ing_carrot, ["שמרים", "ממרח תמרים", "אבקת אפיה", "ענבים", "יוגורט"]),
    new Dish("שניצל", ing_eggs, ing_breadcrumbs, ing_chickenbreast, ing_sesame, ing_dijonmustard, ["בשר טחון", "גבינה לבנה", "פסטה", "שיבולת שועל", "פודינג וניל"]),
    new Dish("שקשוקה", ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika, ["שוקולד", "פתיתים", "אגס", "חלב עזים", "קוסקוס"])
];

var myIdx;
var isIntro;

function updateIndicator(myIdx) {
  const myStageIndicator = myStageIndicators[myIdx];
  const myBox = document.getElementById(myStageIndicator);

  myBox.classList.remove("greenbox");
  myBox.classList.add("answer");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function displayIntro(myIntro) {
    isIntro = true;

    myIntro.style.display = 'block';
    myIntro.style.fontSize = '20px';
    myIntro.style.backgroundColor = 'blue';
    myIntro.style.border = 'lightblue 5px solid';
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

