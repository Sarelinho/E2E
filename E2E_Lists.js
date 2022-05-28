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
const Caprese =     new Dish("סלט קפרז\'ה",  ing_balsamic, ing_mozzarella, ing_basil, ing_tomato, ing_coarsesalt);
const Cheesecake =  new Dish("עוגת גבינה",  ing_eggs, ing_flour, ing_GvinaLevana, ing_SugarVanil, ing_InstantPudingVanil);
const CornPie =     new Dish("פשטידת תירס", ing_butter, ing_corn, ing_cheese, ing_flour, ing_cream);
const DateCookies = new Dish("עוגיות תמרים", ing_MimrahTmarim, ing_flour, ing_eggs, ing_Mahmha, ing_AvkatAfiya);
const Doughnuts =   new Dish("סופגניה",     ing_sugar, ing_flour, ing_Riba, ing_AvkatSugar, ing_oil);
const Falafel =     new Dish("פלאפל",       ing_Humus, ing_onion, ing_parsley, ing_garlic, ing_hotpepper);
const FishandChips = new Dish("פיש\&צ\'יפס", ing_fish, ing_beer, ing_potato, ing_oil, ing_flour);
const FishSticks =  new Dish("קציצות דגים", ing_fish, ing_eggs, ing_onion, ing_tomatopaste, ing_semolina);
const GormeySbazi = new Dish("גורמי סבזי",  ing_turmeric, ing_bean ,ing_persianlemon, ing_onion, ing_parsley);
const Guacamole =   new Dish("גוואקאמולי",  ing_avocado, ing_lemon, ing_garlic, ing_tomato, ing_oliveoil);
const Hamin =       new Dish("חמין",        ing_eggs, ing_Hita, ing_potato, ing_bean, ing_rice);
const Hrira =       new Dish("מרק חרירה",   ing_meat, ing_lentils, ing_onion, ing_tomato, ing_celery);
const Ingera =      new Dish("אינג'רה",     ing_taf, ing_siga, ing_potato, ing_chicken, ing_eggs);
const Kholodets =   new Dish("רגל קרושה",   ing_beefarm, ing_onion, ing_celery, ing_garlic, ing_carrot);
const Knafe =       new Dish("כנאפה",       ing_cheese, ing_kaddif, ing_rosewater, ing_sugarwater, ing_pistachio);
const Kneidlech =   new Dish("קניידלך",     ing_KemahMaza, ing_eggs, ing_oil, ing_MarakOf, ing_Melah);
const Kuba_selek =  new Dish("קובה סלק",    ing_beet, ing_semolina, ing_celery, ing_meat, ing_tomatopaste);
const Kuskus =      new Dish("קוסקוס",      ing_semolina, ing_pumpkin, ing_chicken, ing_carrot ,ing_cabbage);
const Mafrum =      new Dish("מפרום",       ing_Burgul, ing_cauliflower, ing_onion, ing_BasarTahun, ing_parsley);
const Makluba =     new Dish("מקלובה",      ing_rice, ing_carrot, ing_cauliflower, ing_meat, ing_potato);
const MaroccanFish = new Dish ("דג מרוקאי", ing_fish, ing_paprika, ing_hotpepper, ing_oil, ing_gamba);
const Matbuha =     new Dish("מטבוחה",      ing_garlic, ing_hotpepper, ing_tomato, ing_oil, ing_tomatopaste);
const Memulaim =    new Dish("ממולאים",     ing_rice, ing_gamba, ing_tomato, ing_meat, ing_onion);
const MeoravYerushalmi = new Dish("מעורב ירושלמי", ing_spleen, ing_chickenbreast, ing_hawayeg, ing_turmeric, ing_onion);
const Mjadara =     new Dish("מג\'דרה",      ing_rice, ing_dummy, ing_onion, ing_dummy, ing_lentils);
const Musaka =      new Dish("מוסקה",       ing_eggplant, ing_onion, ing_tomato, ing_meat, ing_parsley);
const Olivier =     new Dish("סלט אוליביה", ing_potato, ing_carrot, ing_eggs, ing_chickenbreast, ing_mayonnaise);
const Omelet =      new Dish("שניצל",       ing_eggs, ing_oliveoil, ing_onion, ing_parsley, ing_Melah);
const OzneyHaman=   new Dish("אוזני המן",   ing_yeast, ing_poppy, ing_chokolate, ing_flour, ing_butter);
const Pancake =     new Dish("פנקייק",      ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple);
const PastaAlfredo = new Dish("פסטה אלפרדו",ing_spagetti, ing_cream, ing_garlicpowder, ing_parmesan, ing_onion);
const Pizza =       new Dish("פיצה",        ing_flour, ing_yeast, ing_tomatopaste, ing_cheese, ing_oliveoil);
const Shakshuka =   new Dish("שקשוקה",      ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika);
const Schnitzel =   new Dish("שניצל",       ing_eggs, ing_PerureyLehem, ing_chickenbreast, ing_sesame, ing_HardalDizon);
const StirFriedSalad = new Dish("מוקפץ",    ing_Pasta, ing_chickenbreast, ing_carrot, ing_onion, ing_gamba);
const ThaiStirFried = new Dish("מוקפץ תאילנדי", ing_chilesouce, ing_soysauce, ing_sesameoil, ing_chicken, ing_gamba);
const Vareniki =    new Dish("וריניקי",     ing_potato, ing_cabbage, ing_Riba, ing_BasarTahun, ing_Pitryot);


    
// List of Ingredients
const ing_dummy = "";
const ing_avocado       = myPath + "";  // אבוקדו
const ing_balsamic      = myPath + "";  // רוטב בלסמי
const ing_basil         = myPath + "";  // בזיליקום
const ing_bean          = myPath + "";  // שעועית
const ing_beefarm       = myPath + "";  // זרוע בקר
const ing_beer          = myPath + "";  // בירה
const ing_beet          = myPath + "";  // סלק
const ing_butter        = myPath + "";  // חמאה
const ing_cabbage       = myPath + "";  // כרוב
const ing_carrot        = myPath + "";  // גזר
const ing_cauliflower   = myPath + "";  // כרובית
const ing_celery        = myPath + "";  // סלרי
const ing_cheese        = myPath + "";  // גבינה צהובה
const ing_chicken       = myPath + "";  // עוף
const ing_chickenbreast = myPath + "";  // חזה עוף
const ing_chilesouce    = myPath + "";  // רוטב צ'ילה
const ing_chokolate     = myPath + "";  // שוקולד
const ing_coarsesalt    = myPath + "";  // מלח גס
const ing_corn          = myPath + "";  // תירס
const ing_cream         = myPath + "";  // שמנת
const ing_eggplant      = myPath + "";  // חציל
const ing_eggs          = myPath + "";  // ביצים
const ing_fish          = myPath + "";  // דג
const ing_flour         = myPath + "";  // קמח
const ing_gamba         = myPath + "";  // גמבה
const ing_garlic        = myPath + "";  // שום
const ing_garlicpowder  = myPath + "";  // אבקת שום
const ing_hawayeg       = myPath + "";  // חוואיג'
const ing_hotpepper     = myPath + "";  // פלפל חריף
const ing_kaddif        = myPath + "";  // 
const ing_lemon         = myPath + "";  // לימון
const ing_lentils       = myPath + "";  // עדשים
const ing_maple         = myPath + "";  // מייפל
const ing_mayonnaise    = myPath + "";  // מיונז
const ing_meat          = myPath + "";  // בשר
const ing_milk          = myPath + "";  // חלב
const ing_mozzarella    = myPath + "";  // מוצרלה
const ing_oil           = myPath + "";  // שמן
const ing_oliveoil      = myPath + "";  // שמן זית
const ing_onion         = myPath + "";  // בצל
const ing_paprika       = myPath + "";  // פפריקה
const ing_parmesan      = myPath + "";  // פרמזן
const ing_parsley       = myPath + "";  // פטרוזיליה
const ing_persianlemon  = myPath + "";  // לימון פרסי
const ing_pistachio     = myPath + "";  // פיסטוק
const ing_pita          = myPath + "";  // פיתה
const ing_poppy         = myPath + "";  // פרג
const ing_potato        = myPath + "";  // תפוח אדמה
const ing_pumpkin       = myPath + "";  // דלעת
const ing_rice          = myPath + "";  // אורז
const ing_rosewater     = myPath + "";  // מי ורדים
const ing_semolina      = myPath + "";  // סולת
const ing_sesame        = myPath + "";  // שומשום
const ing_sesameoil     = myPath + "";  // שמן שומשום
const ing_siga          = myPath + "";  // סיגא
const ing_soysauce      = myPath + "";  // רוטב סויה
const ing_spagetti      = myPath + "";  // ספגטי
const ing_spleen        = myPath + "";  // טחול
const ing_sugar         = myPath + "";  // סוכר
const ing_sugarwater    = myPath + "";  // מי סוכר
const ing_taf           = myPath + "";  // טאף
const ing_tomato        = myPath + "";  // עגבניה
const ing_tomatopaste   = myPath + "";  // רסק עגבניות
const ing_turmeric      = myPath + "";  // כורכום
const ing_yeast         = myPath + "";  // שמרים
    const ing_Riba= myPath + "";// ריבה
    const ing_AvkatSugar= myPath + "";// אבקת סוכר
    const ing_Water= myPath + "";// מים
    const ing_Pitryot= myPath + "";// פטריות
    const ing_BasarTahun= myPath + "";// בשר טחון
    const ing_Burgul= myPath + "";// בורגול
    const ing_Humus= myPath + "";// חומוס
    const ing_Bazek_filo= myPath + "";// בצק פילו
    const ing_Baharat= myPath + "";// בהרט
    const ing_Pasta= myPath + "";// פסטה
    const ing_Hita= myPath + "";// חיתה
    const ing_PerureyLehem= myPath + "";// פירורי לחם
    const ing_HardalDizon= myPath + "";// חרדל דיז'ון
    const ing_Melah= myPath + "";// מלח
    const ing_GvinaLevana= myPath + "";// גבינה לבנה
    const ing_SugarVanil =myPath + "";// סוכר וניל
    const ing_InstantPudingVanil =myPath + "";// פוגינג וניל 
    const ing_Artishok =myPath + "";// ארטישוק
    const ing_Silan=myPath + "";// סילן
    const ing_MimrahTmarim=myPath + "";// ממרח תמרים
    const ing_Mahmha=myPath + "";// 
    const ing_AvkatAfiya=myPath + "";// אבקת עפיה
    const ing_KemahMaza=myPath + "";// קמח מצה
    const ing_MarakOf=myPath + "";// מרק עוף
