'use strict'

const fs = require('fs')

class Cookie {
  constructor(name) {
    this.name = name
    this.status = "raw"
    this.ingredients = []
  }
  bake() {
    this.status = "cooked"
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.peanutCount = 100
  }
}

class ChocoChip extends Cookie {
  constructor(name) {
    super(name)
    this.chocChipCount = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.otherCount = 150
  }
}

class CookieFactory {
  static create(fileName) {
    let output = []
    let cookieList = CookieFactory.readFile(fileName).split('\n')
    for (let i = 0; i < cookieList.length; i++) {
      let name = cookieList[i]
      if (name === 'peanut butter') {
        var cookie = new PeanutButter(name)
      }
      else if (name === 'chocolate chip') {
        var cookie = new ChocoChip(name)
      }
      else {
        var cookie = new OtherCookie(name)
      }
      output.push(cookie)
    }
    return output
  }

  static readFile(fileName) {
    let data = fs.readFileSync(fileName, 'utf8')
    return data
  }
}

let options = './cookies.txt'
let cookieBatch = CookieFactory.create(options)
console.log(cookieBatch)