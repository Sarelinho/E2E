function Dish(name, ingred1, ingred2, ingred3, ingred4, ingred5) {
  this.DishName = name;
  this.Ingredient1 = ingred1;
  this.Ingredient2 = ingred2;
  this.Ingredient3 = ingred3;
  this.Ingredient4 = ingred4;
  this.Ingredient5 = ingred5;
}

const DishList = [
	Shakshuka, Pancake
];

// List of Dishes

const Shakshuka = new Dish("", ing_tomato, ing_onion, ing_parsley, ing_eggs, ing_paprika);
const Pancake = new Dish("", ing_eggs, ing_milk, ing_flour, ing_sugar, ing_maple);

// List of Ingredients

const ing_eggs = "";
const ing_flour = "";
const ing_lentils = "";
const ing_maple = "";
const ing_milk = "";
const ing_onion = "";
const ing_paprika = "";
const ing_parsley = "";
const ing_rice = "";
const ing_sugar = ""
const ing_tomato = "";

