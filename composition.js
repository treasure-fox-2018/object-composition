let fs = require('fs');
let options = './cookies.txt';
class Cookies {
  constructor (name) {
    this.name = name;
    this.status = "mentah"
    this.ingredients = [];
  }

  bake () {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookies{
  constructor(name) {
    super(name);
    this.peanut_count = 100;
  }
}

class ChocholateChip extends Cookies {
  constructor(name) {
    super(name);
    this.choc_chip_count = 200;
  }
}

class OtherCookie extends Cookies {
  constructor(name) {
    super(name);
    this.other_count = 150;
  }
}

class CookieFactory {
  static create (options) {
    let cookiesData = fs.readFileSync(options).toString().split("\n");
    let arrCookies = [];
    for (let i = 0 ; i < cookiesData.length ; i ++) {
      let newCookie = {};
      if (cookiesData[i] === "peanut butter") {
        newCookie = new PeanutButter(cookiesData[i])
      } else if (cookiesData[i] === "chocholate chip") {
        newCookie = new ChocholateChip(cookiesData[i])
      } else if (cookiesData[i] !== "peanut butter" || cookiesData[i] !== "chocholate chip") {
        newCookie = new OtherCookie(cookiesData[i])
      }
      arrCookies.push(newCookie);
    }
    return arrCookies;
  }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)