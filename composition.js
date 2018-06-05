"use strict"

const fs = require('fs')

class Cookie {
  constructor (name) {
    this.name = name
    this.status = 'Mentah'
    this.ingredients = []
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

class CookiFactory {
  static create (options) {
    let optionList = options
    let cookieOption = null
    let cookieOptArr = []

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
    return cookieOptArr
  }
}


let option = fs.readFileSync('cookies.txt', 'utf-8').split('\n')
let batch_of_cookies = CookiFactory.create(option)
console.log(batch_of_cookies)
