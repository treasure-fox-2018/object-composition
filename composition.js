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
  static getIngredients(){
    let cookieIngredients = []
    for (var i = 0; i < options.length - 1; i++) {
      cookieIngredients.push(options[i].split('=')[1].split(','))
    }
    return cookieIngredients;
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
    for (var i = 0; i < options.length - 1; i++) {
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
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies);

// console.log(Ingredient.getIngredients(options));
