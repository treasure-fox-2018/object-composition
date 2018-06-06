"use strict"

class Cookie {
  constructor() {
    this._name = null;
    this._ingredients = null;
    this._hasSugar = null;
  }

  set name(str) {
    this._name = str;
  }

  set ingredients(arr) {
    this._ingredients = arr;
  }

  get ingredients() {
    return this._ingredients;
  }

  get name() {
    return this._name;
  }

  bake() {
      this.status = "selesai dimasak";
  }
}

class PeanutButter extends Cookie {
  constructor() {
    super();
    this.peanutCount = 100;
  }
}

class ChocoChip extends Cookie {
  constructor() {
    super();
    this.chocChipCount = 200;
  }
}

class OtherCookie extends Cookie {
  constructor() {
    super();
    this.otherCount = 150;
  }
}

class ChocolateChipCrumbled extends ChocoChip {
  constructor() {
    super();
    this._shape = "crumbled"
  }
}

class PeanutButterCrumbled extends PeanutButter {
  constructor() {
    super();
    this._shape = "crumbled"
  }
}


class Ingredient {
  constructor(options) {
    this._name = options[1];
    this._amount = options[0];
  }

  get name() {
    return this._name;
  }

}

const fs = require('fs');


let options = fs.readFileSync("./cookies.txt").toString().split("\n");

// console.log(optionsProcessed);

class CookieFactory {
  static create(options) {

    let optionsProcessed = [];

    for (let i = 0; i < options.length - 1; i++) {
      optionsProcessed.push(options[i].split(" = "));
    }

    let arrCookies = [];
    for (var i = 0; i < optionsProcessed.length; i++) {
      let currentCookie = null;
      if (optionsProcessed[i][0] === "peanut butter") {
        currentCookie = new PeanutButter();
        currentCookie.name = optionsProcessed[i][0];
      } else if (optionsProcessed[i][0] === "chocolate chip") {
        currentCookie = new ChocoChip();
        currentCookie.name = optionsProcessed[i][0];
      } else {
        currentCookie = new OtherCookie();
        currentCookie.name = optionsProcessed[i][0];
      }
      arrCookies.push(currentCookie);
    }

    let optionsIngredients = [];
    for (let i = 0; i < optionsProcessed.length; i++) {
      optionsProcessed[i].splice(0, 1);
      optionsIngredients.push(optionsProcessed[i].toString().split(", "));
    }

    for (let i = 0; i < arrCookies.length; i++) {
      let currentCookie = arrCookies[i];
      let arrIngredients = [];

      for (let j = 0; j < optionsIngredients[i].length; j++) {
        let currentIngredient = optionsIngredients[i][j];
        let arrCurrentIngredient = currentIngredient.toString().split(" : ");
        // console.log(arrCurrentIngredient);
        let ingredient = new Ingredient(arrCurrentIngredient)
        arrIngredients.push(ingredient)
      }

      currentCookie.ingredients = arrIngredients
      // console.log(currentCookie.ingredients);
    }

    return arrCookies;
  }

  static cookieRecommendation(strDay, cookies) {
    if (strDay === "tuesday") {
      let arrSugarFreeCookies = [];

      for (let i = 0; i < cookies.length; i++) {
        let currentCookie = cookies[i]
        let arrCurrentCookieIngredients = currentCookie.ingredients;
        if (sugarChecker(arrCurrentCookieIngredients)) {
          arrSugarFreeCookies.push(currentCookie)
        }
        function sugarChecker(arr) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[j].name === "sugar") {
              return false;
            }
          }
          return true;
        }
      }

      return (arrSugarFreeCookies);
    }

  }
}

let batchOfCookies = CookieFactory.create(options);

let sugarFreeCookies = CookieFactory.cookieRecommendation("tuesday", batchOfCookies);

for (let i = 0; i < sugarFreeCookies.length; i++) {
  console.log(sugarFreeCookies[i].name);
}
