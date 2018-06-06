"use strict"
const fs = require('fs');
const options = 'cookies.txt';

class Cookie {
    constructor(name) {
        this.name = name
        this.status = 'mentah';
        this.ingredients = [];
    }

    bake() {
        this.status = 'selesai dimasak';
    }
}

class PeanutButter extends Cookie {
    constructor(name) {
        super(name);
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)
        this.other_count = 150;
    }
}


class CookieFactory {
    static create (options) {
        var cookiesArr = [];
        var cookiesList = fs.readFileSync('cookies.txt', 'utf8').split('\n');
        for (let i = 0; i < cookiesList.length; i++) {
            if (cookiesList[i] === 'peanut butter') {
                var cookie = new PeanutButter(cookiesList[i]);
                cookiesArr.push(cookie)
            } else if (cookiesList[i] === 'chocolate chip') {
                var cookie = new ChocolateChip(cookiesList[i]);
                cookiesArr.push(cookie);
            } else {
                var cookie = new OtherCookie(cookiesList[i]);
                cookiesArr.push(cookie);
            }
        }
        return cookiesArr
    }
}


let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);
