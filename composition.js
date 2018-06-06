let fs = require('fs')

"use strict"

class Cookie {
  constructor(name) {
    this.name = name
    this.status = 'mentah'
  }

  bake() {
    this.status = 'sedang dimasak'
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.inredients = []
    this.peanut_count = 100
  }

  inredients() {
    // let special = 
    // var inredients = ['flour', 'butter', 'peanut', 'egg']
    this.inredients.push(inredients)
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.inredients = [],
    this.choc_chip_count = 200
  }

  inredients() {
    var inredients = []
    // this.inredients.push(inredients)
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.inredients = [],
    this.other_count = 150
  }

  inredients() {
    var inredients = []
    // this.inredients.push(inredients)
  }
}

class CookieFactory {
  static create(options) {
    let cookiesFactory = []
    let pharseOption = options.split('\r\n')
    for (let i = 0; i < pharseOption.length; i++) {
      if (pharseOption[i] === 'peanut butter') {
        var cookies = new PeanutButter(pharseOption[i])
        // cookiesFactory.push(peanutButter)
      } else if (pharseOption[i] === 'chocolate chip') {
        var cookies = new ChocolateChip(pharseOption[i])
        // cookiesFactory.push(cohocolatechip)
      } else {
        var cookies = new OtherCookie(pharseOption[i])
        // cookiesFactory.push(otherCookie)
      }
      cookiesFactory.push(cookies)
    }
    return cookiesFactory
  }

  static addList() {

  }

  static deleteList() {

  }

}


let options = fs.readFileSync('./cookies.txt', 'utf8')
let batch_of_cookies = CookieFactory.create(options)

console.log(batch_of_cookies)

let cookie = new Cookie()
///