function Dish(name, ingred1, ingred2, ingred3, ingred4, ingred5) {
    this.DishName = name;
    this.Ingredient1 = ingred1;
    this.Ingredient2 = ingred2;
    this.Ingredient3 = ingred3;
    this.Ingredient4 = ingred4;
    this.Ingredient5 = ingred5;
  }
  
  const DishList = [
    Pancake, Shakshuka,Kuba_selek,Knafe,Ingera,Makluba,Memulaim,Musaka,Matbuha,Kuskus,FishandChips,FishMarokae,
    Arayes,PastaAlfredo,Mzadara,MukpazTailandi,Guakamoli,GormeySbazi,PashdidatTiras,MarakHrira,SalatKapraza,
    OzneyHaman,RegelKrusha,MeoravYerushalmi,SalatOlivia,KzizotDagim,Sufganya,Verniki,Mafrum,Falafel,Piza,BorekasBasar,
    Mukpaz,HaminIsraeli,Shnizel,HavitatYerek,Ugat_gvina,ArtishokMemule,UgiyotTmarim,Kneydalah

  ];
  
  const myPath = "";
  
  // List of Dishes
  
  const Pancake = new Dish("פנקייק", ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple);
    const Shakshuka = new Dish("שקשוקה", ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika);
    const Kuba_selek=new Dish ("קובה סלק", ing_selek, ing_solet, ing_celery,ing_meat,ing_Tomatopaste ) ;
    const Knafe =new Dish ("כנאפה", ing_cheese, ing_Kaddif , ing_roseWater,ing_sugarWater,ing_fistuk ) ;
    const Ingera =new Dish ("אינג'רה", ing_taf, ing_siga , ing_tapuahAdama,ing_chicken,ing_eggs ) ;
    const Makluba =new Dish ("מקלובה",ing_orez, ing_gezer ,  ing_kruvit,ing_meat,ing_tapuahAdama ) ;
    const Memulaim =new Dish ("ממולאים",ing_orez, ing_gamba ,  ing_tomato,ing_meat,ing_onion ) ;
    const Musaka =new Dish ("מוסקה",ing_hazil , ing_onion ,  ing_tomato,ing_meat,ing_parsley) ;
    const Matbuha =new Dish ("מטבוחה",ing_shum , ing_pilplelHarif ,  ing_tomato,ing_shemen,ing_Tomatopaste) ;
    const Kuskus =new Dish ("קוסקוס",ing_solet ,  ing_dlahat ,  ing_chicken,ing_gezer ,ing_kruv) ;
    const FishandChips =new Dish ("פיש&צ'יפס",ing_fish ,  ing_bira , ing_tapuahAdama,ing_shemen ,ing_flour) ;
    const FishMarokae =new Dish ("דג מרוקאי",ing_fish ,  ing_paprika ,ing_pilplelHarif,ing_shemen , ing_gamba) ;
    const Arayes =new Dish ("עראייס",ing_pita , ing_shemZait ,ing_meat,ing_parsley , ing_onion) ;
    const PastaAlfredo =new Dish ("פסטה אלפרדו",ing_spageti , ing_shamenet ,ing_avkatShum,ing_Parmezan , ing_onion) ;
    const Mzadara =new Dish ("מג'דרה",ing_orez , ing_dummy ,ing_onion,ing_dummy , ing_lentils) ;
    const MukpazTailandi =new Dish ("מוקפץ תאילנדי",ing_RotevChili , ing_RotevSoya ,ing_ShemenSumsum,ing_chicken , ing_gamba) ;
    const Guakamoli =new Dish ("גוואקאמולי",ing_Avokado , ing_Lemon ,ing_shum,ing_tomato , ing_shemZait) ;
    const GormeySbazi =new Dish ("גורמי סבזי",ing_Kurkum , ing_Sheuit ,ing_LemonParsi,ing_onion , ing_parsley) ;
    const PashdidatTiras=new Dish ("פשטידת תירס",ing_Hema , ing_Tiras ,ing_cheese,ing_flour , ing_shamenet) ;
    const MarakHrira=new Dish ("מרק חרירה",ing_meat , ing_lentils ,ing_onion,ing_tomato , ing_celery) ;
    const SalatKapraza=new Dish ("סלט קפרז'ה",ing_RotevBalsami , ing_GvinatMuzarela ,ing_Bazilikum,ing_tomato , ing_MelahGas) ;
    const OzneyHaman=new Dish ("אוזני המן",ing_Shmarim , ing_Pereg ,ing_Shokolad,ing_flour , ing_Hema) ;
    const RegelKrusha=new Dish ("רגל קרושה",ing_ZroaBakar , ing_onion ,ing_celery,ing_shum , ing_gezer) ;
    const MeoravYerushalmi=new Dish ("מעורב ירושלמי",ing_Thol , ing_HazeOf ,ing_Hawayeg,ing_Kurkum , ing_onion) ;
    const SalatOlivia=new Dish ("סלט אוליביה",ing_tapuahAdama , ing_gezer ,ing_eggs,ing_HazeOf , ing_Mayonez) ;
    const KzizotDagim=new Dish ("קציצות דגים",ing_fish , ing_eggs ,ing_onion,ing_Tomatopaste , ing_solet) ;
    const Sufganya=new Dish ("סופגניה",ing_sugar , ing_flour ,ing_Riba,ing_AvkatSugar ,ing_shemen ) ;
    const Verniki=new Dish ("ורניקי",ing_tapuahAdama , ing_kruv ,ing_Riba,ing_BasarTahun ,ing_Pitryot ) ;
    const Mafrum=new Dish ("מפרום",ing_Burgul , ing_kruvit ,ing_onion,ing_BasarTahun ,ing_parsley ) ;
    const Falafel=new Dish ("פלאפל",ing_Humus , ing_onion ,ing_parsley,ing_shum ,ing_pilplelHarif ) ;
    const Piza=new Dish ("פיצה",ing_flour , ing_Shmarim ,ing_Tomatopaste,ing_cheese ,ing_shemZait ) ;
    const BorekasBasar=new Dish ("בורקס בשר",ing_Bazek_filo , ing_BasarTahun ,ing_tomato,ing_Baharat ,ing_shemZait ) ;
    const Mukpaz=new Dish ("מוקפץ",ing_Pasta , ing_HazeOf ,ing_gezer,ing_onion ,ing_gamba ) ;
    const HaminIsraeli=new Dish ("חמין",ing_eggs , ing_Hita ,ing_tapuahAdama,ing_Sheuit ,ing_orez ) ;
    const Shnizel=new Dish ("שניצל",ing_eggs , ing_PerureyLehem ,ing_HazeOf,ing_Sumsum ,ing_HardalDizon ) ;
    const HavitatYerek=new Dish ("שניצל",ing_eggs , ing_shemZait ,ing_onion,ing_parsley ,ing_Melah ) ;
    const Ugat_gvina=new Dish ("עוגת גבינה",ing_eggs , ing_flour ,ing_GvinaLevana,ing_SugarVanil ,ing_InstantPudingVanil ) ;
    const ArtishokMemule=new Dish (" ארטישוק ממולא",ing_Artishok , ing_Silan ,ing_shum,ing_celery ,ing_BasarTahun ) ;
    const UgiyotTmarim=new Dish (" עוגיות תמרים ",ing_MimrahTmarim , ing_flour ,ing_eggs,ing_Mahmha ,ing_AvkatAfiya ) ;
    const Kneydalah=new Dish (" קניידלך ",ing_KemahMaza , ing_eggs ,ing_shemen,ing_MarakOf ,ing_Melah ) ;


    
    // List of Ingredients
    const ing_dummy="";
    const ing_eggs = myPath + "";
    const ing_flour = myPath + "";
    const ing_lentils = myPath + "";
    const ing_maple = myPath + "";
    const ing_milk = myPath + "";
    const ing_onion = myPath + "";
    const ing_paprika = myPath + "";
    const ing_parsley = myPath + "";
    const ing_sugar = myPath + ""
    const ing_tomato = myPath + "";
    const ing_selek = myPath + "";
    const ing_solet = myPath + "";
    const ing_celery = myPath + "";
    const ing_meat = myPath + ""; 
    const ing_Tomatopaste= myPath + "";   
    const ing_cheese = myPath + ""; 
    const ing_Kaddif = myPath + ""; 
    const ing_roseWater = myPath + "";   
    const ing_sugarWater = myPath + ""; 
    const ing_fistuk = myPath + ""; 
    const ing_taf = myPath + "";
    const ing_siga = myPath + "";
    const ing_tapuahAdama= myPath + "";
    const ing_chicken = myPath + "";
    const ing_orez = myPath + "";
    const ing_gezer = myPath + "";
    const ing_kruvit = myPath + "";
    const ing_gamba = myPath + "";
    const ing_hazil = myPath + "";
    const ing_shum = myPath + "";
    const ing_pilplelHarif= myPath + "";
    const ing_shemen= myPath + "";
    const ing_dlahat= myPath + "";
    const ing_kruv= myPath + "";
    const ing_fish= myPath + "";
    const ing_bira= myPath + "";
    const ing_pita= myPath + "";
    const ing_shemZait= myPath + "";
    const ing_spageti= myPath + "";
    const ing_shamenet= myPath + "";
    const ing_avkatShum= myPath + "";
    const ing_Parmezan= myPath + "";
    const ing_RotevChili= myPath + "";
    const ing_RotevSoya= myPath + "";
    const ing_ShemenSumsum= myPath + "";
    const ing_Avokado= myPath + "";
    const ing_Lemon= myPath + "";
    const ing_Kurkum= myPath + "";
    const ing_Sheuit= myPath + "";
    const ing_LemonParsi= myPath + "";
    const ing_Hema= myPath + "";
    const ing_Tiras= myPath + "";
    const ing_RotevBalsami= myPath + "";
    const ing_GvinatMuzarela= myPath + "";
    const ing_Bazilikum= myPath + "";
    const ing_MelahGas= myPath + "";
    const ing_Shmarim= myPath + "";
    const ing_Pereg= myPath + "";
    const ing_Shokolad= myPath + "";
    const ing_ZroaBakar= myPath + "";
    const ing_Thol= myPath + "";
    const ing_HazeOf= myPath + "";
    const ing_Hawayeg= myPath + "";
    const ing_Mayonez= myPath + "";
    const ing_Riba= myPath + "";
    const ing_AvkatSugar= myPath + "";
    const ing_Water= myPath + "";
    const ing_Pitryot= myPath + "";
    const ing_BasarTahun= myPath + "";
    const ing_Burgul= myPath + "";
    const ing_Humus= myPath + "";
    const ing_Bazek_filo= myPath + "";
    const ing_Baharat= myPath + "";
    const ing_Pasta= myPath + "";
    const ing_Hita= myPath + "";
    const ing_PerureyLehem= myPath + "";
    const ing_Sumsum= myPath + "";
    const ing_HardalDizon= myPath + "";
    const ing_Melah= myPath + "";
    const ing_GvinaLevana= myPath + "";
    const ing_SugarVanil =myPath + "";
    const ing_InstantPudingVanil =myPath + "";
    const ing_Artishok =myPath + "";
    const ing_Silan=myPath + "";
    const ing_MimrahTmarim=myPath + "";
    const ing_Mahmha=myPath + "";
    const ing_AvkatAfiya=myPath + "";
    const ing_KemahMaza=myPath + "";
    const ing_MarakOf=myPath + "";
