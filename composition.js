"use strict"

const fs = require('fs')
const options = fs.readFileSync('cookies.txt').toString().split('\n');

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.ingredients = []
    this.status = 'mentah'
  }

  bake() {
    this._status = 'selesai dimasak'
  }
}

class Ingredients {

  static getCookieName() {
    let cookiesName = []
    for (let i = 0; i < options.length-1; i++) {
      cookiesName.push(options[i].split('=')[0])
    }
    return cookiesName;
  }

  static getCookieIngredient() {
    let cookieIngredients = []
    for (let i = 0; i < options.length-1; i++) {
        cookieIngredients.push(options[i].split('=')[1].split(','))
    }
    return cookieIngredients;
  }

  static getSpecificIngredient() {
    let specificIngredientTmp = []
    for (let i = 0; i < options.length-1; i++) {
      specificIngredientTmp.push(options[i].split('=')[1].split(','))
    }

    let specificIngredient = []
    for (let i = 0; i < specificIngredientTmp,length-1; i++) {
      specificIngredient.push(specificIngredientTmp[i].split(' : ')[1])
    }
    return specificIngredient
  }

}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.name = 'peanut butter'
    this.ingredients = []
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.name = 'chocolate chip'
    this.ingredients = []
    this.choc_chip_count = 200
  }
}

class ChocolateCheese extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.name = 'chocolate cheese'
    this.ingredients = []
    this.choc_chip_count = 100
    this.cheese_count = 100
  }
}

class ChocolateButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.name = 'chocolate butter'
    this.ingredients = []
    this.choc_chip_count = 100
    this.butter_count = 100
  }
}

class CookieFactory {
  static create(options) {
    let cookieNames = []
    for (let i = 0; i < options.length; i++) {
      cookieNames.push(options[i])
    }

    let cookieBox = []
    for (let i = 0; i < cookieNames.length; i++) {
      if (cookieNames[i] === 'peanut butter') {
        let peanutButter = new PeanutButter()
        cookieBox.push(peanutButter)
      } else if (cookieNames[i] === 'chocolate chip') {
        let chocolateChip = new ChocolateChip()
        cookieBox.push(chocolateChip)
      } else if (cookieNames[i] === 'chocolate butter') {
        let chocolateButter = new ChocolateButter()
        cookieBox.push(chocolateButter)
      } else if (cookieNames[i] === 'chocolate cheese') {
        let chocolateCheese = new ChocolateCheese()
        cookieBox.push(chocolateCheese)
      }
    }
    return cookieBox
  }

}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)

console.log(options[0].split('=')[1].split(','))
// console.log(cookieBox)