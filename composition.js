"use strict"
var fs = require ('fs');

class Ingredients {
  constructor (options) {
    
  }
}

class Cookie {
  constructor (cookieName) {
    this._name = cookieName;
    this._status = 'mentah';
  }

  bake () {
    this._status = 'selesai dimasak';
  }

  get status () {
    return this._status
  }
}

class PeanutButter extends Cookie {
  constructor(cookieName) {
    super(cookieName);
    this._ingredients = [];
    this._peanut_count = 100;
  }

  get peanutCount () {
    return this._peanut_count
  }

  get ingredients () {
    return this._ingredients
  }
}

class ChocolateChip extends Cookie {
  constructor(cookieName) {
    super(cookieName);
    this._ingredients = [];    
    this._chocolateChip_count = 200;
  }

  get chocolateChip () {
    return this._chocolateChip_count
  }

  get ingredients () {
    return this._ingredients
  }
}

class ChocolateCheese extends Cookie {
  constructor(cookieName) {
    super(cookieName);
    this._ingredients = [];
    this._chocolateCheese_count = 150;
  }

  get chocolateCheese () {
    return this._chocolateCheese_count
  }

  get ingredients () {
    return this._ingredients
  }
}

class ChocolateButter extends Cookie {
  constructor(cookieName) {
    super(cookieName);
    this._chocolateButter_count = 150;
  }

  get chocolateButter () {
    return this._chocolateButter_count
  }

  get ingredients () {
    return this._ingredients
  }
}

class CookieFactory {
  static create (options) {
    let listCookies = fs.readFileSync(options)
      .toString()
      .split("\n");

    var listCookiesArr = [];

    for (var i = 0; i <= listCookies.length - 1; i++) {
      if (listCookies[i] === 'peanut butter') {
        var cookie = new PeanutButter(listCookies[i]);
      }
      else if (listCookies[i] === 'chocolate chip') {
        var cookie = new ChocolateChip(listCookies[i]);
      }
      else if (listCookies[i] === 'chocolate cheese') {
        var cookie = new ChocolateCheese(listCookies[i]);
      }
      else {
        var cookie = new ChocolateButter(listCookies[i]);
      }
      listCookiesArr.push(cookie)
    }

    return listCookiesArr
  }

  createCookies () {

  }
}

class Ingredients {

}

let batch_of_cookies = CookieFactory.create("cookies.txt")
console.log(batch_of_cookies)