"use strict"
const fs = require('fs');
const options = 'cookiesrelease0.txt';

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
        var output = [];
        var cookiesList = fs.readFileSync('cookiesrelease0.txt', 'utf8').split('\n');
        for (let i = 0; i < cookiesList.length; i++) {
            var name = cookiesList[i];
            if (name === 'peanut butter') {
                var cookie = new PeanutButter(name);
            } else if (name === 'chocolate chip') {
                var cookie = new ChocolateChip(name);
            } else {
                var cookie = new OtherCookie(name);
            }
            output.push(cookie);
        }
        return output;
        // console.log(output);
    }
}


let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);