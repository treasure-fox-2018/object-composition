'use strict'

const fs = require('fs')

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.status = "raw"
    this.ingredients = ingredients
  }
  bake() {
    this.status = "cooked"
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.peanutCount = 100
  }
}

class ChocoChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.chocChipCount = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.otherCount = 150
  }
}

class Ingredient {
  constructor(options) {
    this.name = options['name']
    this.amount = options['amount']
  }
}

class CookieFactory {
  static create(fileName) {
    let output = []
    let recipeList = CookieFactory.readFile(fileName).split('\n')

    for (let i = 0; i < recipeList.length; i++) {
      let recipe = CookieFactory.getRecipe(recipeList[i]);
      // console.log(recipe.key)
      // console.log(recipe.ingredients)
      if (recipe.key === 'peanut butter') {
        var cookie = new PeanutButter(recipe.key, recipe.ingredients)
      }
      else if (recipe.key === 'chocolate chip') {
        var cookie = new ChocoChip(recipe.key, recipe.ingredients)
      }
      else {
        var cookie = new OtherCookie(recipe.key, recipe.ingredients)
      }
      output.push(cookie)
    }
    return output
  }

  static readFile(fileName) {
    let data = fs.readFileSync(fileName, 'utf8')
    return data
  }

  static getRecipe(recipe) {
    let key = recipe.split(' = ')[0]
    let wholeIngredients = recipe.split(' = ')[1]

    let eachIngredient = wholeIngredients.split(', ')
    let ingredients = []

    for (let i = 0; i < eachIngredient.length; i++) {
      let name = eachIngredient[i].split(' : ')[0]
      let amount = eachIngredient[i].split(' : ')[1]
      ingredients.push(new Ingredient({ name, amount }))
    }

    return {key, ingredients}
  }

  static cookieRecommendation(day, cookieBatch) {
    let output = []
    for (let i = 0; i < cookieBatch.length; i++) {
      let isSugar = false
      let ingredients = cookieBatch[i].ingredients
      // console.log(ingredients)
      for (let j = 0; j < ingredients.length; j++) {
        if (ingredients[j].name === 'sugar') {
          isSugar = true
          break;
        }
      }
      if (!isSugar) {
        cookieBatch[i].bake()
        output.push(cookieBatch[i].name)
      }
    }
    return `Sugar Free ${day}: ${output.join(', ')}`
  }
}

let options = './cookies.txt'
let cookieBatch = CookieFactory.create(options)
console.log(cookieBatch)
let sugarFreeFoods = CookieFactory.cookieRecommendation("Tuesday", cookieBatch)
console.log(sugarFreeFoods)
// console.log(cookieBatch)