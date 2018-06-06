'use strict'

class Cookie{
    constructor(name){
        this.name = name
        this.status = "mentah"
    }
    
    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie{
    constructor(name){
        super(name)
        this.name = name
        this.ingredients = []
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie{
    constructor(name){
        super(name)
        this.name = name
        this.ingredients = []
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name){
        super(name)
        this.ingredients = []
        this.other_count = 150
    }
}

class CookieFactory{
    static create(options){

        var optionsArray = options.split('\n')
        var peanut_butter = new PeanutButter(optionsArray[0])
        var chocholate_chip = new ChocholateChip(optionsArray[1])
        var other_cookie1 =  new OtherCookie(optionsArray[2])
        var other_cookie2 = new OtherCookie(optionsArray[3])
        optionsArray.splice(0)
        optionsArray.push(peanut_butter)
        optionsArray.push(chocholate_chip)
        optionsArray.push(other_cookie1)
        optionsArray.push(other_cookie2)
        return optionsArray
    }

}

class ImportText{
    constructor(){
        this.cookiesName = this.import()
    }

    import(){
        var cookiesName = fs.readFileSync("cookies.txt").toString()
        return cookiesName
    }
}

var fs = require('fs')

var importVar = new ImportText()
// console.log(importVar.cookiesName)

console.log(CookieFactory.create(importVar.cookiesName))












// var bikinKue = new CookieFactory()
// console.log(bikinKue.cookies);

