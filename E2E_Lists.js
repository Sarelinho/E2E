const myTitle = "חידון מאכלים";
const mySubTitle = "תשפ\"ב, מכללת כנרת, פרויקט גמר בקורס E2E";
const myFooter = "בוצע ע\"י: <br>אזגורי ישי, אזולי שראל, גסקובסקי גל, דגו יוסף, מראי שלמה, נחמני דניאל, ספורי נידאל, צ\'רקסוב איתן"

document.getElementById("headerText1").innerHTML = myTitle;
document.getElementById("head").innerHTML = mySubTitle;
document.getElementById("foot").innerHTML = myFooter;

class Dish {
  constructor(name, ingr1, ingr2, ingr3, ingr4, ingr5) {
      this.DishName = name;
      this.Ingredient1 = ingr1;
      this.Ingredient2 = ingr2;
      this.Ingredient3 = ingr3;
      this.Ingredient4 = ingr4;
      this.Ingredient5 = ingr5;
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

const myPath = "";
//const myPath = "C:\\Users\\Eitan\\Documents\\_Kinneret\\E2E\\Presentation_June\\Images\\";
 
const ing_dummy = new Dish("dummy", "");
const ing_artichoke     = new Dish(myPath + "Artichoke.jpg", "ארטישוק");  // ארטישוק
const ing_avocado       = myPath + "Avocado.jpg";  // אבוקדו
const ing_baharat       = myPath + "Baharat.jpg";  // בהרט
const ing_bakingpowder  = myPath + "BakingPowder.jpg";  // אבקת עפיה
const ing_balsamic      = myPath + "Balsamic.jpg";  // רוטב בלסמי
const ing_basil         = myPath + "Basil.jpg";  // בזיליקום
const ing_bean          = myPath + "Bean.jpg";  // שעועית
const ing_beefarm       = myPath + "BeefArm.jpg";  // זרוע בקר
const ing_beer          = myPath + "Beer.jpg";  // בירה
const ing_beet          = myPath + "Beet.jpg";  // סלק
const ing_breadcrumbs   = myPath + "BreadCrumbs.jpg";  // פירורי לחם
const ing_burgul        = myPath + "Bulgur.jpg";  // בורגול
const ing_butter        = myPath + "Butter.jpg";  // חמאה
const ing_cabbage       = myPath + "Cabbage.jpg";  // כרוב
const ing_carrot        = myPath + "Carrot.jpg";  // גזר
const ing_cauliflower   = myPath + "Cauliflower.jpg";  // כרובית
const ing_celery        = myPath + "Celery.jpg";  // סלרי
const ing_cheese        = myPath + "Cheese.jpg";  // גבינה צהובה
const ing_chicken       = myPath + "Chicken.jpg";  // עוף
const ing_chickenbreast = myPath + "ChickenBreast.jpg";  // חזה עוף
const ing_chickensoup   = myPath + "ChickenSoup.jpg";  // מרק עוף
const ing_chilesouce    = myPath + "Chile.jpg";  // רוטב צ'ילה
const ing_chokolate     = myPath + "Chocolate.jpg";  // שוקולד
const ing_coarsesalt    = myPath + "Salt.jpg";  // מלח גס
const ing_corn          = myPath + "Corn.jpg";  // תירס
const ing_cream         = myPath + "Cream.jpg";  // שמנת
const ing_datehoney     = myPath + "DateHoney.jpg";  // סילן
const ing_datespread    = myPath + "DateSpread.jpg";  // ממרח תמרים
const ing_dijonmustard  = myPath + "Dijon.jpg";  // חרדל דיז'ון
const ing_eggplant      = myPath + "Eggplant.jpg";  // חציל
const ing_eggs          = myPath + "Eggs.jpg";  // ביצים
const ing_fish          = myPath + "Fish.jpg";  // דג
const ing_flour         = myPath + "Flour.jpg";  // קמח
const ing_fromageblanc  = myPath + "Fromage.jpg";  // גבינה לבנה
const ing_gamba         = myPath + "Gamba.jpg";  // גמבה
const ing_garlic        = myPath + "Garlic.jpg";  // שום
const ing_garlicpowder  = myPath + "GarlicPowder.jpg";  // אבקת שום
const ing_hawayeg       = myPath + "Hawaej.jpg";  // חוואיג'
const ing_hotpepper     = myPath + "HotPepper.jpg";  // פלפל חריף
const ing_humus         = myPath + "Humus.jpg";  // גרגירי חומוס
const ing_jam           = myPath + "Jam.jpg";  // ריבה
const ing_kadaif        = myPath + "Kadaif.jpg";  // קדאיף
const ing_lemon         = myPath + "Lemon.jpg";  // לימון
const ing_lentils       = myPath + "Lentils.jpg";  // עדשים
const ing_maple         = myPath + "Maple.jpg";  // מייפל
const ing_margarine     = myPath + "Margarine.jpg";  // מרגרינה
const ing_matzaflour    = myPath + "MatsaFlour.jpg";  // קמח מצה
const ing_mayonnaise    = myPath + "Mayonese.jpg";  // מיונז
const ing_meat          = myPath + "Meat.jpg";  // בשר
const ing_milk          = myPath + "Milk.jpg";  // חלב
const ing_mince         = myPath + "Mince.jpg";  // בשר טחון
const ing_mozzarella    = myPath + "Mozarella.jpg";  // מוצרלה
const ing_mushrooms     = myPath + "Mashrooms.jpg" // פטריות
const ing_noodles       = myPath + "Noodles.jpg";  // אתריות
const ing_oil           = myPath + "Oil.jpg";  // שמן
const ing_oliveoil      = myPath + "OliveOil.jpg";  // שמן זית
const ing_onion         = myPath + "Onion.jpg";  // בצל
const ing_paprika       = myPath + "Paprika.jpg";  // פפריקה
const ing_parmesan      = myPath + "Parmesan.jpg";  // פרמזן
const ing_parsley       = myPath + "Parsley.jpg";  // פטרוזיליה
const ing_persianlemon  = myPath + "PersianLemon.jpg";  // לימון פרסי
const ing_phyllodough   = myPath + "Phyllo.jpg";  // בצק פילו
const ing_pistachio     = myPath + "Pistaccio.jpg";  // פיסטוק
const ing_pita          = myPath + "Pita.jpg";  // פיתה
const ing_poppy         = myPath + "Poppy.jpg";  // פרג
const ing_potato        = myPath + "Potato.jpg";  // תפוח אדמה
const ing_pumpkin       = myPath + "Pumpkin.jpg";  // דלעת
const ing_rice          = myPath + "Rice.jpg";  // אורז
const ing_rosewater     = myPath + "RoseWater.jpg";  // מי ורדים
const ing_semolina      = myPath + "Semolina.jpg";  // סולת
const ing_sesame        = myPath + "Sesam.jpg";  // שומשום
const ing_sesameoil     = myPath + "SesameOil.jpg";  // שמן שומשום
const ing_siga          = myPath + "Siga.jpg";  // סיגא
const ing_soysauce      = myPath + "SoySauce.jpg";  // רוטב סויה
const ing_spagetti      = myPath + "Spagetti.jpg";  // ספגטי
const ing_spleen        = myPath + "Spleen.jpg";  // טחול
const ing_sugar         = myPath + "Sugar.jpg";  // סוכר
const ing_sugarpowder   = myPath + "SugarPowder.jpg";  // אבקת סוכר
const ing_sugarwater    = myPath + "SugarWater.jpg";  // מי סוכר
const ing_taf           = myPath + "Taf.jpg";  // טאף
const ing_tomato        = myPath + "Tomato.jpg";  // עגבניה
const ing_tomatopaste   = myPath + "TomatoPaste.jpg";  // רסק עגבניות
const ing_turmeric      = myPath + "Turmeric.jpg";  // כורכום
const ing_vanillapudding = myPath + "Pudding.jpg"; // פודינג וניל 
const ing_vanillasugar  = myPath + "VanillaSugar.jpg";  // סוכר וניל
const ing_wheat         = myPath + "Wheat.jpg";  // חיטה
const ing_yeast         = myPath + "Yeast.jpg";  // שמרים

/*
const ing_dummy = "dummy";
const ing_artichoke     = myPath + "Artichoke.jpg";  // ארטישוק
const ing_avocado       = myPath + "Avocado.jpg";  // אבוקדו
const ing_baharat       = myPath + "Baharat.jpg";  // בהרט
const ing_bakingpowder  = myPath + "BakingPowder.jpg";  // אבקת עפיה
const ing_balsamic      = myPath + "Balsamic.jpg";  // רוטב בלסמי
const ing_basil         = myPath + "Basil.jpg";  // בזיליקום
const ing_bean          = myPath + "Bean.jpg";  // שעועית
const ing_beefarm       = myPath + "BeefArm.jpg";  // זרוע בקר
const ing_beer          = myPath + "Beer.jpg";  // בירה
const ing_beet          = myPath + "Beet.jpg";  // סלק
const ing_breadcrumbs   = myPath + "BreadCrumbs.jpg";  // פירורי לחם
const ing_burgul        = myPath + "Bulgur.jpg";  // בורגול
const ing_butter        = myPath + "Butter.jpg";  // חמאה
const ing_cabbage       = myPath + "Cabbage.jpg";  // כרוב
const ing_carrot        = myPath + "Carrot.jpg";  // גזר
const ing_cauliflower   = myPath + "Cauliflower.jpg";  // כרובית
const ing_celery        = myPath + "Celery.jpg";  // סלרי
const ing_cheese        = myPath + "Cheese.jpg";  // גבינה צהובה
const ing_chicken       = myPath + "Chicken.jpg";  // עוף
const ing_chickenbreast = myPath + "ChickenBreast.jpg";  // חזה עוף
const ing_chickensoup   = myPath + "ChickenSoup.jpg";  // מרק עוף
const ing_chilesouce    = myPath + "Chile.jpg";  // רוטב צ'ילה
const ing_chokolate     = myPath + "Chocolate.jpg";  // שוקולד
const ing_coarsesalt    = myPath + "Salt.jpg";  // מלח גס
const ing_corn          = myPath + "Corn.jpg";  // תירס
const ing_cream         = myPath + "Cream.jpg";  // שמנת
const ing_datehoney     = myPath + "DateHoney.jpg";  // סילן
const ing_datespread    = myPath + "DateSpread.jpg";  // ממרח תמרים
const ing_dijonmustard  = myPath + "Dijon.jpg";  // חרדל דיז'ון
const ing_eggplant      = myPath + "Eggplant.jpg";  // חציל
const ing_eggs          = myPath + "Eggs.jpg";  // ביצים
const ing_fish          = myPath + "Fish.jpg";  // דג
const ing_flour         = myPath + "Flour.jpg";  // קמח
const ing_fromageblanc  = myPath + "Fromage.jpg";  // גבינה לבנה
const ing_gamba         = myPath + "Gamba.jpg";  // גמבה
const ing_garlic        = myPath + "Garlic.jpg";  // שום
const ing_garlicpowder  = myPath + "GarlicPowder.jpg";  // אבקת שום
const ing_hawayeg       = myPath + "Hawaej.jpg";  // חוואיג'
const ing_hotpepper     = myPath + "HotPepper.jpg";  // פלפל חריף
const ing_humus         = myPath + "Humus.jpg";  // גרגירי חומוס
const ing_jam           = myPath + "Jam.jpg";  // ריבה
const ing_kadaif        = myPath + "Kadaif.jpg";  // קדאיף
const ing_lemon         = myPath + "Lemon.jpg";  // לימון
const ing_lentils       = myPath + "Lentils.jpg";  // עדשים
const ing_maple         = myPath + "Maple.jpg";  // מייפל
const ing_margarine     = myPath + "Margarine.jpg";  // מרגרינה
const ing_matzaflour    = myPath + "MatsaFlour.jpg";  // קמח מצה
const ing_mayonnaise    = myPath + "Mayonese.jpg";  // מיונז
const ing_meat          = myPath + "Meat.jpg";  // בשר
const ing_milk          = myPath + "Milk.jpg";  // חלב
const ing_mince         = myPath + "Mince.jpg";  // בשר טחון
const ing_mozzarella    = myPath + "Mozarella.jpg";  // מוצרלה
const ing_mushrooms     = myPath + "Mashrooms.jpg" // פטריות
const ing_noodles       = myPath + "Noodles.jpg";  // אתריות
const ing_oil           = myPath + "Oil.jpg";  // שמן
const ing_oliveoil      = myPath + "OliveOil.jpg";  // שמן זית
const ing_onion         = myPath + "Onion.jpg";  // בצל
const ing_paprika       = myPath + "Paprika.jpg";  // פפריקה
const ing_parmesan      = myPath + "Parmesan.jpg";  // פרמזן
const ing_parsley       = myPath + "Parsley.jpg";  // פטרוזיליה
const ing_persianlemon  = myPath + "PersianLemon.jpg";  // לימון פרסי
const ing_phyllodough   = myPath + "Phyllo.jpg";  // בצק פילו
const ing_pistachio     = myPath + "Pistaccio.jpg";  // פיסטוק
const ing_pita          = myPath + "Pita.jpg";  // פיתה
const ing_poppy         = myPath + "Poppy.jpg";  // פרג
const ing_potato        = myPath + "Potato.jpg";  // תפוח אדמה
const ing_pumpkin       = myPath + "Pumpkin.jpg";  // דלעת
const ing_rice          = myPath + "Rice.jpg";  // אורז
const ing_rosewater     = myPath + "RoseWater.jpg";  // מי ורדים
const ing_semolina      = myPath + "Semolina.jpg";  // סולת
const ing_sesame        = myPath + "Sesam.jpg";  // שומשום
const ing_sesameoil     = myPath + "SesameOil.jpg";  // שמן שומשום
const ing_siga          = myPath + "Siga.jpg";  // סיגא
const ing_soysauce      = myPath + "SoySauce.jpg";  // רוטב סויה
const ing_spagetti      = myPath + "Spagetti.jpg";  // ספגטי
const ing_spleen        = myPath + "Spleen.jpg";  // טחול
const ing_sugar         = myPath + "Sugar.jpg";  // סוכר
const ing_sugarpowder   = myPath + "SugarPowder.jpg";  // אבקת סוכר
const ing_sugarwater    = myPath + "SugarWater.jpg";  // מי סוכר
const ing_taf           = myPath + "Taf.jpg";  // טאף
const ing_tomato        = myPath + "Tomato.jpg";  // עגבניה
const ing_tomatopaste   = myPath + "TomatoPaste.jpg";  // רסק עגבניות
const ing_turmeric      = myPath + "Turmeric.jpg";  // כורכום
const ing_vanillapudding = myPath + "Pudding.jpg"; // פודינג וניל 
const ing_vanillasugar  = myPath + "VanillaSugar.jpg";  // סוכר וניל
const ing_wheat         = myPath + "Wheat.jpg";  // חיטה
const ing_yeast         = myPath + "Yeast.jpg";  // שמרים

*/
//===============================================================================
// List of Dishes


var DishList = [
    new Dish("עראייס", ing_pita, ing_oliveoil, ing_meat, ing_parsley, ing_onion),
    new Dish("ארטישוק ממולא", ing_artichoke, ing_datehoney, ing_garlic, ing_celery, ing_mince),
    new Dish("בורקס בשר", ing_phyllodough, ing_mince, ing_tomato, ing_baharat, ing_oliveoil),
    new Dish("בורשט", ing_potato, ing_cabbage, ing_beet, ing_meat, ing_carrot),
    new Dish("סלט קפרז\'ה", ing_balsamic, ing_mozzarella, ing_basil, ing_tomato, ing_coarsesalt),
    new Dish("עוגת גבינה", ing_eggs, ing_flour, ing_fromageblanc, ing_vanillasugar, ing_vanillapudding),
    new Dish("פשטידת תירס", ing_butter, ing_corn, ing_cheese, ing_flour, ing_cream),
    new Dish("עוגיות תמרים", ing_datespread, ing_flour, ing_eggs, ing_margarine, ing_bakingpowder),
    new Dish("סופגניה", ing_sugar, ing_flour, ing_jam, ing_sugarpowder, ing_oil),
    new Dish("פלאפל", ing_humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper),
    new Dish("פיש\&צ\'יפס", ing_fish, ing_beer, ing_potato, ing_oil, ing_flour),
    new Dish("קציצות דגים", ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina),
    new Dish("גורמי סבזי", ing_turmeric, ing_bean ,ing_persianlemon, ing_onion, ing_parsley),
    new Dish("גוואקאמולי", ing_avocado, ing_lemon, ing_garlic, ing_tomato, ing_oliveoil),
    new Dish("חמין", ing_eggs, ing_wheat, ing_potato, ing_bean, ing_rice),
    new Dish("מרק חרירה", ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery),
    new Dish("אינג\'רה", ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs),
    new Dish("רגל קרושה", ing_beefarm, ing_onion, ing_celery, ing_garlic, ing_carrot),
    new Dish("כנאפה", ing_cheese, ing_kadaif, ing_rosewater, ing_sugarwater, ing_pistachio),
    new Dish("קניידלך", ing_matzaflour, ing_eggs, ing_oil, ing_chickensoup, ing_dummy),
    new Dish("קובה סלק", ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste),
    new Dish("קוסקוס", ing_semolina, ing_pumpkin, ing_chicken, ing_carrot ,ing_cabbage),
    new Dish("מפרום", ing_burgul, ing_cauliflower, ing_onion, ing_mince, ing_parsley),
    new Dish("מקלובה", ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato),
    new Dish("דג מרוקאי", ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba),
    new Dish("מטבוחה", ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste),
    new Dish("ממולאים", ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion),
    new Dish("מג\'דרה", ing_rice, ing_dummy, ing_onion, ing_dummy, ing_lentils),
    new Dish("מוסקה", ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley),
    new Dish("סלט אוליביה", ing_potato, ing_carrot, ing_eggs, ing_chickenbreast, ing_mayonnaise),
    new Dish("חביתת ירק", ing_eggs, ing_oliveoil, ing_onion, ing_parsley, ing_dummy),
    new Dish("אוזני המן", ing_yeast, ing_poppy, ing_chokolate, ing_flour, ing_butter),
    new Dish("פנקייק", ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple),
    new Dish("פסטה אלפרדו",ing_spagetti, ing_cream, ing_garlicpowder, ing_parmesan, ing_onion),
    new Dish("פיצה", ing_flour, ing_yeast, ing_tomatopaste, ing_cheese, ing_oliveoil),
    new Dish("שקשוקה", ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika),
    new Dish("שניצל", ing_eggs, ing_breadcrumbs, ing_chickenbreast, ing_sesame, ing_dijonmustard),
    new Dish("מוקפץ", ing_noodles, ing_chickenbreast, ing_carrot, ing_onion, ing_gamba),
    new Dish("מוקפץ תאילנדי", ing_chilesouce, ing_soysauce, ing_sesameoil, ing_chicken, ing_gamba),
    new Dish("מעורב ירושלמי", ing_spleen, ing_chickenbreast, ing_hawayeg, ing_turmeric, ing_onion)
];
