function Dish(name, ingred1, ingred2, ingred3, ingred4, ingred5) {
    this.DishName = name;
    this.Ingredient1 = ingred1;
    this.Ingredient2 = ingred2;
    this.Ingredient3 = ingred3;
    this.Ingredient4 = ingred4;
    this.Ingredient5 = ingred5;
}
  
const DishList = [
    Arayes, Artichoke, Borekas, Caprese, Cheesecake, CornPie, DateCookies, Doughnuts, Falafel, FishandChips, 
    FishSticks, Guacamole, GormeySbazi, Hamin, Hrira, Ingera, Kholodets, Knafe, Kneidlech, Kuba_selek, 
    Kuskus, Mafrum, Makluba, MaroccanFish, Matbuha, MeoravYerushalmi, Memulaim, Mjadara, Musaka, Olivier, 
    Omelet, OzneyHaman, Pancake, PastaAlfredo, Pizza, Shakshuka, Schnitzel, StirFriedSalad, ThaiStirFried, Vareniki
];
  
const myPath = "";
  
// List of Dishes
  
const Arayes =      new Dish("עראייס",      ing_pita, ing_oliveoil, ing_meat, ing_parsley, ing_onion);
const Artichoke =   new Dish("ארטישוק ממולא", ing_Artishok, ing_Silan, ing_garlic, ing_celery, ing_BasarTahun);
const Borekas =     new Dish("בורקס בשר",   ing_Bazek_filo, ing_BasarTahun, ing_tomato, ing_Baharat, ing_oliveoil);
const Caprese =     new Dish("סלט קפרז'ה",  ing_RotevBalsami, ing_GvinatMuzarela, ing_Bazilikum, ing_tomato, ing_MelahGas);
const Cheesecake =  new Dish("עוגת גבינה",  ing_eggs, ing_flour, ing_GvinaLevana, ing_SugarVanil, ing_InstantPudingVanil);
const CornPie =     new Dish("פשטידת תירס", ing_Hema, ing_Tiras, ing_cheese, ing_flour, ing_shamenet);
const DateCookies = new Dish("עוגיות תמרים", ing_MimrahTmarim, ing_flour, ing_eggs, ing_Mahmha, ing_AvkatAfiya);
const Doughnuts =   new Dish("סופגניה",     ing_sugar, ing_flour, ing_Riba, ing_AvkatSugar, ing_oil);
const Falafel =     new Dish("פלאפל",       ing_Humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper);
const FishandChips = new Dish("פיש\&צ\'יפס", ing_fish, ing_beer, ing_potato, ing_oil, ing_flour);
const FishSticks =  new Dish("קציצות דגים", ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina);
const GormeySbazi = new Dish("גורמי סבזי",  ing_Kurkum, ing_Sheuit ,ing_LemonParsi, ing_onion, ing_parsley);
const Guacamole =   new Dish("גוואקאמולי",  ing_Avokado, ing_Lemon, ing_garlic, ing_tomato, ing_oliveoil);
const Hamin =       new Dish("חמין",        ing_eggs, ing_Hita, ing_potato, ing_Sheuit, ing_rice);
const Hrira =       new Dish("מרק חרירה",   ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery);
const Ingera =      new Dish("אינג'רה",     ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs);
const Kholodets =   new Dish("רגל קרושה",   ing_ZroaBakar, ing_onion, ing_celery, ing_garlic, ing_carrot);
const Knafe =       new Dish("כנאפה",       ing_cheese, ing_kaddif, ing_rosewater, ing_sugarwater, ing_pistachio);
const Kneidlech =   new Dish("קניידלך",     ing_KemahMaza, ing_eggs, ing_oil, ing_MarakOf, ing_Melah);
const Kuba_selek =  new Dish("קובה סלק",    ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste);
const Kuskus =      new Dish("קוסקוס",      ing_semolina, ing_pumpkin, ing_chicken, ing_carrot ,ing_cabbage);
const Mafrum =      new Dish("מפרום",       ing_Burgul, ing_cauliflower, ing_onion, ing_BasarTahun, ing_parsley);
const Makluba =     new Dish("מקלובה",      ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato);
const MaroccanFish = new Dish ("דג מרוקאי", ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba);
const Matbuha =     new Dish("מטבוחה",      ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste);
const Memulaim =    new Dish("ממולאים",     ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion);
const MeoravYerushalmi = new Dish("מעורב ירושלמי", ing_Thol, ing_HazeOf, ing_Hawayeg, ing_Kurkum, ing_onion);
const Mjadara =     new Dish("מג'דרה",      ing_rice, ing_dummy, ing_onion, ing_dummy, ing_lentils);
const Musaka =      new Dish("מוסקה",       ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley);
const Olivier =     new Dish("סלט אוליביה", ing_potato, ing_carrot, ing_eggs, ing_HazeOf, ing_Mayonez);
const Omelet =      new Dish("שניצל",       ing_eggs, ing_oliveoil, ing_onion, ing_parsley, ing_Melah);
const OzneyHaman=   new Dish("אוזני המן",   ing_Shmarim, ing_Pereg, ing_Shokolad, ing_flour, ing_Hema);
const Pancake =     new Dish("פנקייק",      ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple);
const PastaAlfredo = new Dish("פסטה אלפרדו",ing_spageti, ing_shamenet, ing_avkatShum, ing_Parmezan, ing_onion);
const Pizza =       new Dish("פיצה",        ing_flour, ing_Shmarim, ing_tomatopaste, ing_cheese, ing_oliveoil);
const Shakshuka =   new Dish("שקשוקה",      ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika);
const Schnitzel =   new Dish("שניצל",       ing_eggs, ing_PerureyLehem, ing_HazeOf, ing_Sumsum, ing_HardalDizon);
const StirFriedSalad = new Dish("מוקפץ",    ing_Pasta, ing_HazeOf, ing_carrot, ing_onion, ing_gamba);
const ThaiStirFried = new Dish("מוקפץ תאילנדי", ing_RotevChili, ing_RotevSoya, ing_ShemenSumsum, ing_chicken, ing_gamba);
const Vareniki =    new Dish("וריניקי",     ing_potato, ing_cabbage, ing_Riba, ing_BasarTahun, ing_Pitryot);


    
// List of Ingredients
const ing_dummy = "";
const ing_beer          = myPath + "";  //
const ing_beet          = myPath + "";  // סלק
const ing_cabbage       = myPath + "";  //
const ing_carrot        = myPath + "";  // גזר
const ing_cauliflower   = myPath + "";  // כרובית
const ing_celery        = myPath + "";  // סלרי
const ing_cheese        = myPath + "";  // גבינה צהובה
const ing_chicken       = myPath + "";  // עוף
const ing_eggplant      = myPath + "";  // 
const ing_eggs          = myPath + "";  // ביצים
const ing_fish          = myPath + "";  // 
const ing_flour         = myPath + "";  // קמח
const ing_gamba         = myPath + "";  // 
const ing_garlic        = myPath + "";  // 
const ing_hotpepper     = myPath + "";  //
const ing_kaddif        = myPath + "";  // 
const ing_lentils       = myPath + "";  // עדשים
const ing_maple         = myPath + "";  // מייפל
const ing_meat          = myPath + "";  // בשר
const ing_milk          = myPath + "";  // חלב
const ing_oil           = myPath + "";  //
const ing_oliveoil      = myPath + "";  //
const ing_onion         = myPath + "";  // בצל
const ing_paprika       = myPath + "";  // פפריקה
const ing_parsley       = myPath + "";  // פטרוזיליה
const ing_pistachio     = myPath + "";  // פיסטוק
const ing_pita          = myPath + "";  // 
const ing_potato        = myPath + "";  // תפוח אדמה
const ing_pumpkin       = myPath + "";  //
const ing_rice          = myPath + "";  // אורז
const ing_rosewater     = myPath + "";  // מי וורדים
const ing_semolina      = myPath + "";  // סולת
const ing_siga          = myPath + "";  // סיגא
const ing_sugar         = myPath + "";  // סוכר
const ing_sugarwater    = myPath + "";  // מי סוכר
const ing_taf           = myPath + "";  // טאף
const ing_tomato        = myPath + "";  // עגבניה
const ing_tomatopaste   = myPath + "";  // רסק עגבניות
    const ing_spageti= myPath + "";//
    const ing_shamenet= myPath + "";//
    const ing_avkatShum= myPath + "";//
    const ing_Parmezan= myPath + "";//
    const ing_RotevChili= myPath + "";//
    const ing_RotevSoya= myPath + "";//
    const ing_ShemenSumsum= myPath + "";//
    const ing_Avokado= myPath + "";//
    const ing_Lemon= myPath + "";//
    const ing_Kurkum= myPath + "";//
    const ing_Sheuit= myPath + "";//
    const ing_LemonParsi= myPath + "";//
    const ing_Hema= myPath + "";//
    const ing_Tiras= myPath + "";//
    const ing_RotevBalsami= myPath + "";//
    const ing_GvinatMuzarela= myPath + "";//
    const ing_Bazilikum= myPath + "";//
    const ing_MelahGas= myPath + "";//
    const ing_Shmarim= myPath + "";//
    const ing_Pereg= myPath + "";//
    const ing_Shokolad= myPath + "";//
    const ing_ZroaBakar= myPath + "";//
    const ing_Thol= myPath + "";//
    const ing_HazeOf= myPath + "";//
    const ing_Hawayeg= myPath + "";//
    const ing_Mayonez= myPath + "";//
    const ing_Riba= myPath + "";//
    const ing_AvkatSugar= myPath + "";//
    const ing_Water= myPath + "";//
    const ing_Pitryot= myPath + "";//
    const ing_BasarTahun= myPath + "";//
    const ing_Burgul= myPath + "";//
    const ing_Humus= myPath + "";//
    const ing_Bazek_filo= myPath + "";//
    const ing_Baharat= myPath + "";//
    const ing_Pasta= myPath + "";//
    const ing_Hita= myPath + "";//
    const ing_PerureyLehem= myPath + "";//
    const ing_Sumsum= myPath + "";//
    const ing_HardalDizon= myPath + "";//
    const ing_Melah= myPath + "";//
    const ing_GvinaLevana= myPath + "";//
    const ing_SugarVanil =myPath + "";//
    const ing_InstantPudingVanil =myPath + "";//
    const ing_Artishok =myPath + "";//
    const ing_Silan=myPath + "";//
    const ing_MimrahTmarim=myPath + "";//
    const ing_Mahmha=myPath + "";//
    const ing_AvkatAfiya=myPath + "";//
    const ing_KemahMaza=myPath + "";//
    const ing_MarakOf=myPath + "";//
