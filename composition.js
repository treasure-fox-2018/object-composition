"use strict"

const fs = require('fs')

class Cookie {
  constructor (name) {
    this.name = name
    this.status = 'Mentah'
    this.ingredients = []
    this.has_sugar = null
  }

  bake () {
    this.status = 'Selesai dimasak'
  }
}

class PeanutButter extends Cookie {
  constructor (name) {
    super(name)
    this.peanut_count = 100
  }
}

class ChocholateChip extends Cookie {
  constructor (name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor (name) {
    super(name)
    this.other_count = 150
  }
}

class Ingredient {
  constructor (namaBahan, jumlah) {
    this.nama_bahan = namaBahan
    this.jumlah_bahan = jumlah
  }
}

class CookiFactory {
  static create (options, ingredient) {
    let optionList = options
    let ingredients = ingredient
    let cookieOption = null
    let cookieOptArr = []
    let ingredientArr = []
    let material = []
    let result = []
    let materialArr = []

    for (let i = 0; i < optionList.length; i++) {
      if (optionList[i] === 'peanut butter') {
        cookieOption = new PeanutButter (optionList[i])
      } else if (optionList[i] === 'chocolate chip') {
        cookieOption = new ChocholateChip (optionList[i])
      } else if (optionList[i] === 'chocolate cheese') {
        cookieOption = new OtherCookie (optionList[i])
      } else if (optionList[i] === 'chocolate butter') {
        cookieOption = new OtherCookie (optionList[i])
      }
      cookieOptArr.push(cookieOption)
    }
    
    for (let i = 0; i < ingredients.length; i++) {
      var split2 = ingredients[i].split(' = ')
      ingredientArr.push(split2)
    }

    for (let i = 0; i < ingredientArr.length; i++) {
      for (let j = 1; j < ingredientArr[i].length; j++) {
        var split3 = ingredientArr[i][j].split(', ')
        material.push(split3)
      }
    }

    for (let i = 0; i < material.length; i++) {
      for (let j = 0; j < material[i].length; j++) {
        var materialSplit = material[i][j].split(' : ')
        materialArr.push(materialSplit)
      }
    }

    for (let i = 0; i < materialArr.length; i++) {
      var namaBahan = materialArr[i][1]
      var jumlahBahan = materialArr[i][0]
      result.push(new Ingredient (namaBahan, jumlahBahan))
    }
    
  
    console.log(result)
    
  }

  static cookieRecommendation() {

  }
}


let option = fs.readFileSync('cookies.txt', 'utf-8').split('\n')
let ingredient = fs.readFileSync('ingredient.txt', 'utf-8').split('\n')

let batch_of_cookies = CookiFactory.create(option, ingredient)
// console.log(batch_of_cookies)

let sugarFreeFoods = CookiFactory.cookieRecommendation('Tuesday', batch_of_cookies);
console.log

