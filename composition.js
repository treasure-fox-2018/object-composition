"use strict"

const fs = require('fs');
const options = fs.readFileSync('cookies.txt').toString().split('\n');

class Cookie {
  constructor(name, ingredient) {
    this._name = name
    this._status = "raw"
    this._ingredients = ingredient;
  }
  bake() {
    this._status = "baked"
  }
}

class Ingredient {
  static getCookieName(options){
    let cookieNames = []
    for (var i = 0; i < options.length - 1; i++) {
      cookieNames.push(options[i].split('=')[0]);
    }
    return cookieNames;
  }
  static getIngredients(options){
    let cookieIngredients = []
    for (var i = 0; i < options.length - 1; i++) {
      cookieIngredients.push(options[i].split('=')[1].split(','))
    }
    return cookieIngredients;
  }
  static getComposition(options){
    let cookieIngredients = []
    for (var i = 0; i < options.length - 1; i++) {
      cookieIngredients.push(options[i].split('=')[1].split(','))
    }
    // return cookieIngredients;
    let compositions = []
    for (let i = 0; i < cookieIngredients.length; i++) {
      let composition = []
      for (let j = 0; j < cookieIngredients[i].length; j++) {
        composition.push(cookieIngredients[i][j].split(':')[1])
      }
      compositions.push(composition);
    }
    return compositions;
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredient) {
    super(name, ingredient)
    this._peanutCount = 100
  }
}
class ChocolateChip extends Cookie {
  constructor(name, ingredient) {
    super(name, ingredient)
    this._chocChipCount = 200
  }
}
class OtherCookie extends Cookie {
  constructor(name, ingredient, count) {
    super(name, ingredient)
    this._otherCount = count
  }
}
class CookieFactory {
  static create(options){
    let cookieBatch = [];
    for (let i = 0; i < options.length - 1; i++) {
      let cookieName = Ingredient.getCookieName(options)[i];
      let cookieIngredient = Ingredient.getIngredients(options)[i];
      if (Ingredient.getCookieName(options)[i] == 'peanut butter') {
        let cookie = new PeanutButter(cookieName, cookieIngredient)
        cookieBatch.push(cookie);
      }else if (cookieName == 'chocolate chip') {
        let cookie = new ChocolateChip(cookieName, cookieIngredient)
        cookieBatch.push(cookie);
      }else {
        let cookie = new OtherCookie(cookieName, cookieIngredient, 150)
        cookieBatch.push(cookie);
      }
    }
    return cookieBatch;
  }
  static cookieRecomendation(day, batch){
    let cookieNames = Ingredient.getCookieName(options)
    let noSugarCookies = cookieNames;
    for (let i = 0; i < batch.length; i++) {
      let cookieComposition = Ingredient.getComposition(options)[i];
      for (let j = 0; j < cookieComposition.length; j++) {
        if (cookieComposition[j] === ' sugar') {
          noSugarCookies.splice(0,1);
        }
      }
    }
    return noSugarCookies;
  }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies);
console.log(Ingredient.getComposition(options));
let sugarFreeCookies = CookieFactory.cookieRecomendation('tuesday', batch_of_cookies)

console.log("sugar free cakes are:");
for (var i = 0; i < sugarFreeCookies.length; i++) {
  console.log(sugarFreeCookies[i]);
}
