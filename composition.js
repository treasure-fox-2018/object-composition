'use strict'

const fs = require('fs')

const options = 'cookies.txt'


class CookieFactory {
    static create(options) {
        let cookieData = fs.readFileSync(options, 'utf8');
        let arrOfCookies = cookieData.split('\n')
        let arrObjCookies = [];
        for (let i = 0; i < arrOfCookies.length; i++) {
            let cookie = arrOfCookies[i];
            let isPeanutButter = cookie === 'peanut butter'
            let isChocolateChip = cookie === 'chocolate chip'
            let objCookie;

            if (isPeanutButter) {
                objCookie = new PeanutButter(cookie)
            } else if (isChocolateChip) {
                objCookie = new ChocolateChip(cookie)
            } else {
                objCookie = new OtherCookie(cookie)
            }

            arrObjCookies.push(objCookie)
        }

        return arrObjCookies
    }
}

class Cookie {
    constructor(name) {
        this.name = name
        this.ingredients = []
        this.status = 'mentah'
        this.peanut_count = 0
    }

    bake() {
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor(name) {
        super(name);
        // this.name = name
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name) {
      super(name);
      // this.name = name
      this.peanut_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
      super(name);
      // this.name = name
      this.peanut_count = 150
    }
}

let batch_of_cookies = CookieFactory.create(options);

console.log(batch_of_cookies);
