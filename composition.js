const fs = require('fs')
const recipes = fs.readFileSync('cookies.txt').toString().split('\n') //arr

class Ingredient {
  constructor(recipes) {
    this._name = recipes['name']
    this._amount = recipes['amount']
  }
}

class Cookie {
  constructor(name){
    this._name = name;
    this._status = 'mentah';
    this._ingredients = [];
  }

  bake (){
    this._status = 'selesai dimasak';
  }

  set ingredient(ingredientObj){
    let ingredient = new Ingredient (ingredientObj)
    this._ingredients.push(ingredient)
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name);
    this._peanutCount= 100;
  }
}

class ChocolateChip extends Cookie {
  constructor(name){
    super(name);
    this._chocChipCount = 200;
  }
}

class OtherCookie extends Cookie {
  constructor(name){
    super(name);
    this._otherCount = 150;
  }
}
 

class CookieFactory {
  static create(recipes){
    let cookies = [];
    for (let i in recipes){
      let recipeArr = recipes[i].split(' = ');
      let cookieType = recipeArr[0];
      if(cookieType === "peanut butter") {
        var cookie = new PeanutButter(cookieType);
      } else if(cookieType === "chocolate chip") {
        var cookie = new ChocolateChip(cookieType);
      } else {
        var cookie = new OtherCookie(cookieType);
      }

      let ingredients = recipeArr[1].split(', ');
      for (let i in ingredients){
        let ingredient = ingredients[i].split(' : ');
        cookie.ingredient = {
          name : ingredient[0],
          amount : ingredient[1]
        }
      }
      cookies.push(cookie);
    }
    return cookies;
  }

  static cookieRecommendation (day, cookies){
    let recommendation = [];
    if (day == 'tuesday') {
      for (let i in cookies){
        let sugarFree = true;
        for (let j in cookies[i]._ingredients){
          if (cookies[i]._ingredients[j]._name === 'sugar'){
            sugarFree = false;
          }
        }
        if (sugarFree){
          recommendation.push(cookies[i]);
        }
      }
    }
    return recommendation;
  }
}


let batchOfCookies = CookieFactory.create(recipes)
// console.log(batchOfCookies)


let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batchOfCookies);
console.log("sugar free cakes are :");
for(let i in sugarFreeFoods) {
  console.log(sugarFreeFoods[i]);
}
