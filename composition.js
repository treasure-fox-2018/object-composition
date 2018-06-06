// The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.
// — Joe Armstrong, creator of Erlang


"use strict"



class Cookie {

    constructor(name) {
        this.name = name
        this.status = 'mentah'
        this.ingridients = []
    }

    bake() {

        this.statsu = 'selesai dimasak'
    }

}



class PeanutButter extends Cookie {
    constructor(name) {
        super(name)
        this.Peanut_count = 100
        this.ingridients = []


    }

}

class ChocolateChip extends Cookie {
    constructor(name) {
        super(name)

        this.choc_chip_count = 200
        this.ingridients = []

    }


}

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)

        this.butter_count = 150
        this.ingridients = []

    }


}




class CookieFactory {

    static create(options) {
        let ingridientSheet = fs.readFileSync(options).toString().split('\n');
        let cookiesArr = []
        for (let i = 0; i < ingridientSheet.length; i++) {

            if (ingridientSheet[i] === 'peanut butter') {

                var cookies = new PeanutButter(ingridientSheet[i])

            } else if (ingridientSheet[i] === 'chocolate chip') {

                var cookies = new ChocolateChip(ingridientSheet[i])

            } else {

                var cookies = new OtherCookie(ingridientSheet[i])

            }
           

            cookiesArr.push(cookies)
        }

        console.log(cookiesArr)


        // return ingridientSheet
    }

}


const fs = require('fs');
let batch_of_cookies = CookieFactory.create('cookies.txt');
console.log(batch_of_cookies);


