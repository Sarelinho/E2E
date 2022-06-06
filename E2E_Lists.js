document.getElementsById("headerText1").innerHTML = "חידון המאכלים";
document.getElementsById("head").innerHTML = "פרוייקט גמר לקורס E2E, תשפ\"ב, מכללת כנרת";
document.getElementsById("foot").innerHTML = " בוצע ע\"י
  <br/>
  אזגורי ישי, אזולאי שראל, גוסקובסקי גל, דגו יוסף, מראי שלמה, נחמני דניאל, ספורי נידאל, צ\'רקסוב איתן";

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

//===============================================================================
// List of Ingredients

const myPath = "";
  
const ing_dummy = "dummy";
const ing_artichoke     = myPath + "Artichoke.jpg";  // ארטישוק
const ing_avocado       = myPath + "Avocado.jpg";  // אבוקדו
const ing_baharat       = myPath + "Baharat.jpg";  // בהרט
const ing_bakingpowder  = myPath + "BakingPowder.jpg";  // אבקת עפיה
const ing_balsamic      = myPath + "";  // רוטב בלסמי
const ing_basil         = myPath + "";  // בזיליקום
const ing_bean          = myPath + "";  // שעועית
const ing_beefarm       = myPath + "";  // זרוע בקר
const ing_beer          = myPath + "Beer.jpg";  // בירה
const ing_beet          = myPath + "";  // סלק
const ing_breadcrumbs   = myPath + "";  // פירורי לחם
const ing_burgul        = myPath + "";  // בורגול
const ing_butter        = myPath + "Butter.jpg";  // חמאה
const ing_cabbage       = myPath + "Cabbage.jpg";  // כרוב
const ing_carrot        = myPath + "Carrot.jpg";  // גזר
const ing_cauliflower   = myPath + "";  // כרובית
const ing_celery        = myPath + "";  // סלרי
const ing_cheese        = myPath + "";  // גבינה צהובה
const ing_chicken       = myPath + "";  // עוף
const ing_chickenbreast = myPath + "";  // חזה עוף
const ing_chickensoup   = myPath + "";  // מרק עוף
const ing_chilesouce    = myPath + "";  // רוטב צ'ילה
const ing_chokolate     = myPath + "";  // שוקולד
const ing_coarsesalt    = myPath + "";  // מלח גס
const ing_corn          = myPath + "";  // תירס
const ing_cream         = myPath + "";  // שמנת
const ing_datehoney     = myPath + "";  // סילן
const ing_datespread    = myPath + "";  // ממרח תמרים
const ing_dijonmustard  = myPath + "";  // חרדל דיז'ון
const ing_eggplant      = myPath + "";  // חציל
const ing_eggs          = myPath + "";  // ביצים
const ing_fish          = myPath + "Fish.jpg";  // דג
const ing_flour         = myPath + "Flour.jpg";  // קמח
const ing_fromageblanc  = myPath + "";  // גבינה לבנה
const ing_gamba         = myPath + "Gamba.jpg";  // גמבה
const ing_garlic        = myPath + "";  // שום
const ing_garlicpowder  = myPath + "";  // אבקת שום
const ing_hawayeg       = myPath + "Hawaej.jpg";  // חוואיג'
const ing_hotpepper     = myPath + "";  // פלפל חריף
const ing_humus         = myPath + "Humus.jpg";  // גרגירי חומוס
const ing_jam           = myPath + "Jam.jpg";  // ריבה
const ing_kadaif        = myPath + "Kadaif.jpg";  // קדאיף
const ing_lemon         = myPath + "";  // לימון
const ing_lentils       = myPath + "";  // עדשים
const ing_maple         = myPath + "";  // מייפל
const ing_margarine     = myPath + "";  // מרגרינה
const ing_matzaflour    = myPath + "MatsaFlour.jpg";  // קמח מצה
const ing_mayonnaise    = myPath + "";  // מיונז
const ing_meat          = myPath + "Meat.jpg";  // בשר
const ing_milk          = myPath + "Milk.jpg";  // חלב
const ing_mince         = myPath + "Mince.jpg";  // בשר טחון
const ing_mozzarella    = myPath + "";  // מוצרלה
const ing_oil           = myPath + "";  // שמן
const ing_oliveoil      = myPath + "";  // שמן זית
const ing_onion         = myPath + "Onion.jpg";  // בצל
const ing_noodles       = myPath + "";  // אתריות
const ing_paprika       = myPath + "Paprika.jpg";  // פפריקה
const ing_parmesan      = myPath + "";  // פרמזן
const ing_parsley       = myPath + "";  // פטרוזיליה
const ing_persianlemon  = myPath + "";  // לימון פרסי
const ing_phyllodough   = myPath + "";  // בצק פילו
const ing_pistachio     = myPath + "";  // פיסטוק
const ing_pita          = myPath + "";  // פיתה
const ing_poppy         = myPath + "";  // פרג
const ing_potato        = myPath + "";  // תפוח אדמה
const ing_pumpkin       = myPath + "Pumpkin.jpg";  // דלעת
const ing_rice          = myPath + "Rice.jpg";  // אורז
const ing_rosewater     = myPath + "RoseWater.jpg";  // מי ורדים
const ing_semolina      = myPath + "";  // סולת
const ing_sesame        = myPath + "";  // שומשום
const ing_sesameoil     = myPath + "";  // שמן שומשום
const ing_siga          = myPath + "";  // סיגא
const ing_soysauce      = myPath + "";  // רוטב סויה
const ing_spagetti      = myPath + "Spagetti.jpg";  // ספגטי
const ing_spleen        = myPath + "";  // טחול
const ing_sugar         = myPath + "";  // סוכר
const ing_sugarpowder   = myPath + "";  // אבקת סוכר
const ing_sugarwater    = myPath + "SugarWater.jpg";  // מי סוכר
const ing_taf           = myPath + "";  // טאף
const ing_tomato        = myPath + "";  // עגבניה
const ing_tomatopaste   = myPath + "";  // רסק עגבניות
const ing_turmeric      = myPath + "";  // כורכום
const ing_vanillapudding = myPath + ""; // פודינג וניל 
const ing_vanillasugar  = myPath + "";  // סוכר וניל
const ing_wheat         = myPath + "Wheat.jpg";  // חיטה
const ing_yeast         = myPath + "";  // שמרים

//===============================================================================
// List of Dishes

const Arayes            = new Dish("עראייס", ing_pita, ing_oliveoil, ing_meat, ing_parsley, ing_onion);
const Artichoke         = new Dish("ארטישוק ממולא", ing_artichoke, ing_datehoney, ing_garlic, ing_celery, ing_mince);
const Borekas           = new Dish("בורקס בשר", ing_phyllodough, ing_mince, ing_tomato, ing_baharat, ing_oliveoil);
const Caprese           = new Dish("סלט קפרז\'ה", ing_balsamic, ing_mozzarella, ing_basil, ing_tomato, ing_coarsesalt);
const Cheesecake        = new Dish("עוגת גבינה", ing_eggs, ing_flour, ing_fromageblanc, ing_vanillasugar, ing_vanillapudding);
const CornPie           = new Dish("פשטידת תירס", ing_butter, ing_corn, ing_cheese, ing_flour, ing_cream);
const DateCookies       = new Dish("עוגיות תמרים", ing_datespread, ing_flour, ing_eggs, ing_margarine, ing_bakingpowder);
const Doughnuts         = new Dish("סופגניה", ing_sugar, ing_flour, ing_jam, ing_sugarpowder, ing_oil);
const Falafel           = new Dish("פלאפל", ing_humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper);
const FishandChips      = new Dish("פיש\&צ\'יפס", ing_fish, ing_beer, ing_potato, ing_oil, ing_flour);
const FishSticks        = new Dish("קציצות דגים", ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina);
const GormeySbazi       = new Dish("גורמי סבזי", ing_turmeric, ing_bean ,ing_persianlemon, ing_onion, ing_parsley);
const Guacamole         = new Dish("גוואקאמולי", ing_avocado, ing_lemon, ing_garlic, ing_tomato, ing_oliveoil);
const Hamin             = new Dish("חמין", ing_eggs, ing_wheat, ing_potato, ing_bean, ing_rice);
const Hrira             = new Dish("מרק חרירה", ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery);
const Ingera            = new Dish("אינג\'רה", ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs);
const Kholodets         = new Dish("רגל קרושה", ing_beefarm, ing_onion, ing_celery, ing_garlic, ing_carrot);
const Knafe             = new Dish("כנאפה", ing_cheese, ing_kadaif, ing_rosewater, ing_sugarwater, ing_pistachio);
const Kneidlech         = new Dish("קניידלך", ing_matzaflour, ing_eggs, ing_oil, ing_chickensoup, ing_dummy);
const Kuba_selek        = new Dish("קובה סלק", ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste);
const Kuskus            = new Dish("קוסקוס", ing_semolina, ing_pumpkin, ing_chicken, ing_carrot ,ing_cabbage);
const Mafrum            = new Dish("מפרום", ing_burgul, ing_cauliflower, ing_onion, ing_mince, ing_parsley);
const Makluba           = new Dish("מקלובה", ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato);
const MaroccanFish      = new Dish("דג מרוקאי", ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba);
const Matbuha           = new Dish("מטבוחה", ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste);
const Memulaim          = new Dish("ממולאים", ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion);
const Mjadara           = new Dish("מג\'דרה", ing_rice, ing_dummy, ing_onion, ing_dummy, ing_lentils);
const Musaka            = new Dish("מוסקה", ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley);
const Olivier           = new Dish("סלט אוליביה", ing_potato, ing_carrot, ing_eggs, ing_chickenbreast, ing_mayonnaise);
const Omelet            = new Dish("חביתת ירק", ing_eggs, ing_oliveoil, ing_onion, ing_parsley, ing_dummy);
const OzneyHaman        = new Dish("אוזני המן", ing_yeast, ing_poppy, ing_chokolate, ing_flour, ing_butter);
const Pancake           = new Dish("פנקייק", ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple);
const PastaAlfredo      = new Dish("פסטה אלפרדו",ing_spagetti, ing_cream, ing_garlicpowder, ing_parmesan, ing_onion);
const Pizza             = new Dish("פיצה", ing_flour, ing_yeast, ing_tomatopaste, ing_cheese, ing_oliveoil);
const Shakshuka         = new Dish("שקשוקה", ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika);
const Schnitzel         = new Dish("שניצל", ing_eggs, ing_breadcrumbs, ing_chickenbreast, ing_sesame, ing_dijonmustard);
const StirFriedSalad    = new Dish("מוקפץ", ing_noodles, ing_chickenbreast, ing_carrot, ing_onion, ing_gamba);
const ThaiStirFried     = new Dish("מוקפץ תאילנדי", ing_chilesouce, ing_soysauce, ing_sesameoil, ing_chicken, ing_gamba);
const Borsht            = new Dish("בורשט", ing_potato, ing_cabbage, ing_beet, ing_meat, ing_carrot);
const Yerushalmi        = new Dish("מעורב ירושלמי", ing_spleen, ing_chickenbreast, ing_hawayeg, ing_turmeric, ing_onion);

var DishList = [
  Arayes, Artichoke, Borekas, Borsht, Caprese, Cheesecake, CornPie, DateCookies, Doughnuts, Falafel, 
  FishandChips, FishSticks, Guacamole, GormeySbazi, Hamin, Hrira, Ingera, Kholodets, Knafe, Kneidlech, 
  Kuba_selek, Kuskus, Mafrum, Makluba, MaroccanFish, Matbuha, Memulaim, Mjadara, Musaka, Olivier,        
  Omelet, OzneyHaman, Pancake, PastaAlfredo, Pizza, Shakshuka, Schnitzel, StirFriedSalad, ThaiStirFried, Yerushalmi
];
