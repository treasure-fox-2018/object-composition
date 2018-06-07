let fs = require('fs')
let argv = process.argv
"use strict"

class Ingredient {
  constructor(options) {
    this.name = options
    this.amount = options
  }

  pharseIngredients() {
    let ingredientFactory = []
    let pharseIngredients = ingredient.split('\r\n')
    for (let i = 0; i < pharseIngredients.length; i++) {
      let ingredientSubFactory = []
      var str = ''
      for (let j = 0; j < pharseIngredients[i].length; j++) {
        if (pharseIngredients[i][j] === '=') {
          ingredientSubFactory.push(str)
          str = ''
        } else if (pharseIngredients[i][j] === ':') {
          str += ''
        } else if (pharseIngredients[i][j] === ',') {
          ingredientSubFactory.push(str)
          str = ''
        } else if(j === pharseIngredients[i].length - 1) {
          ingredientFactory.push(ingredientSubFactory)
        } else if (pharseIngredients[i][j] === ' ' && j >= 13 && j <= 16){
          str += ''
        } else {
          str += pharseIngredients[i][j]
        }
      }
      // ingredientSubFactory = []
    }
    return ingredientFactory
  }
}


class Cookie {
  constructor(name, ingredient) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = ingredient
    this.has_sugar = null
  }

  bake() {
    this.status = 'sedang dimasak'
  }


}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.other_count = 150
  }
}


class CookieFactory {
  static create(options) {
    let cookiesFactory = []
    let pharseOption = options.split('\r\n')
    for (let i = 0; i < pharseOption.length; i++) {
      if (pharseOption[i] === 'peanut butter') {
        var cookies = new PeanutButter(pharseOption[i])
      } else if (pharseOption[i] === 'chocolate chip') {
        var cookies = new ChocolateChip(pharseOption[i])
      } else {
        var cookies = new OtherCookie(pharseOption[i])
      }
      cookiesFactory.push(cookies)
    }
    return cookiesFactory
  }
}

let ingredient = fs.readFileSync('./ingredients.txt', 'utf8')
let options = fs.readFileSync('./cookies.txt', 'utf8')
let batch_of_cookies = CookieFactory.create(options)
let classIngredients = new Ingredient(ingredient)
let ingredientsArr = classIngredients.pharseIngredients() //contain ingredients to array
let cookie = new Cookie()

console.log(ingredientsArr)
// console.log(batch_of_cookies)

function cookieFactory (cookie, ingredientsArr) {
  function create(cookie, ingredientsArr) {
    let cookieWithIngredients = []
    for (let i = 0; i < cookie.length; i++) {
      for (let j = 0; j < ingredientsArr.length; j++) {
        if (cookie[i].name === ingredientsArr[j][0]) {
          let ingredients = ingredientsArr[j].splice(0,1)
          let newCookie = new Cookie(cookie[i].name, ingredientsArr[j].slice())
          cookieWithIngredients.push(newCookie)
        }
      }
    }
    return cookieWithIngredients
  }    
  return create(cookie, ingredientsArr)
}
console.log('================================================================' + '\n',cookieFactory(batch_of_cookies, ingredientsArr))