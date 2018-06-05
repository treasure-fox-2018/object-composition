"use strict"

let fs = require("fs") 
let options = fs.readFileSync('cookies.txt', 'utf8').split("\r\n")
let optionsIgd = fs.readFileSync('cookiesigd.txt', 'utf8').split("\r\n")

class Ingredients {
    constructor (cookieName, igdList) {
        this.cookieName = cookieName
        this.igdList = igdList
    }
}

let cookiesName =[]
let cookiesIgd =[]
for(let x=0; x<optionsIgd.length; x++) {
    let tmp = optionsIgd[x].split(" = ")
    cookiesName.push(tmp[0])
    let tmp2 = tmp[1].split(", ")
    let tmp3 = []
    for(let k=0; k<tmp2.length; k++) {
        tmp3.push(tmp2[k].split(" : "))
    }
    cookiesIgd.push(tmp3)
}

class Cookie {
    constructor (name) {
        this.name = name
        this.status = 'mentah'
        this.ingredients =[]
    }

    bake () {
        this.status = 'selesai  dimasak'
    }

    seedIngredients () {
        for(let y=0; y<cookiesName.length; y++) {
            this.ingredients.push(new Ingredients(cookiesName[y], cookiesIgd[y]))
        }
    }

    pickCorrectIgd () {
        for(let z=0; z<cookiesName.length; z++) {
            if(cookiesName[z] === this.name) {
                let tmp = this.ingredients[z]
                this.ingredients = []
                this.ingredients.push(tmp)
            }
        }
    }
}

let cookie = new Cookie ()

class PeanutButter extends Cookie {
    constructor (name) {
        super (name)
        this.peanutCount = 100
    }
}
let peanutButter = new PeanutButter (options[0])
peanutButter.seedIngredients()
peanutButter.pickCorrectIgd()

class ChocolateChip extends Cookie {
    constructor (name) {
        super (name)
        this.chocoChipCount = 200
    }
}
let chocolateChip = new ChocolateChip (options[1])
chocolateChip.seedIngredients ()
chocolateChip.pickCorrectIgd ()

class OtherCookie extends Cookie {
    constructor (name) {
        super (name)
        this.otherCount = 150
    }
}

let otherCookieCheese = new OtherCookie (options[2])
otherCookieCheese.seedIngredients ()
otherCookieCheese.pickCorrectIgd ()

let otherCookieButter = new OtherCookie (options[3])
otherCookieButter.seedIngredients ()
otherCookieButter.pickCorrectIgd ()

// Driver Code

class CookieFactory {
    constructor () {
        this.cookies = []
    }
    static create (options) {
        let arrOfCookies = []
        arrOfCookies.push(peanutButter)
        arrOfCookies.push(chocolateChip)
        arrOfCookies.push(otherCookieCheese)
        arrOfCookies.push(otherCookieButter)
        return arrOfCookies
    }
    static sugarFree () {
        let arrOfCookies = []
        arrOfCookies.push(peanutButter)
        arrOfCookies.push(chocolateChip)
        arrOfCookies.push(otherCookieCheese)
        arrOfCookies.push(otherCookieButter)
        for(let r=0; r<arrOfCookies.length; r++) {
            let rogut = arrOfCookies[r].ingredients[0].igdList
            for(let t=0; t<rogut.length; t++) {
                if(rogut[t][1] === 'sugar') {
                    arrOfCookies.splice(r,1)
                    r--
                }
            }
        }
        return arrOfCookies
    }

}

let batchOfCookies = CookieFactory.create(options) 
console.log(batchOfCookies)
let sugarFree = CookieFactory.sugarFree()
console.log(sugarFree)

//console.log(batchOfCookies[0].ingredients[0].igdList[1]