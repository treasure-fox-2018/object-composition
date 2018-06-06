const fs = require('fs')
const options = fs.readFileSync('cookies.txt').toString().split('\n') //arr
options.pop()

class Cookie {
  constructor(name){
    this._name = name;
    this._status = 'mentah';
    this._ingredients = [];
  }

  bake (){
    this._status = 'selesai dimasak';
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
    this._chocChipCount = 150;
  }
}



class CookieFactory {
  static create(options){
    let typesArr = [];
    for (let i in options){
      if (options[i] === 'peanut butter'){
        typesArr.push(new PeanutButter(options[i]));
      } else if (options[i] === 'chocolate chip'){
        typesArr.push(new ChocolateChip(options[i]));
      } else {
        typesArr.push(new OtherCookie(options[i]));
      }
    }
    return typesArr;
  }
}

let batchOfCookies = CookieFactory.create(options)
console.log(batchOfCookies)

// console.log(options)
