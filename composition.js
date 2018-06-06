"use strict"

class Cookie{
    constructor(name){
        this.name = name
        this.status = "mentah"
        this.ingredients = []
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie{
    constructor(name,status,ingredients){
        super(name,status,ingredients)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie{
    constructor(name,status,ingredients){
        super(name,status,ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name,status,ingredients){
        super(name,status,ingredients)
        this.peanut_count = 150
    }
}

class CookieFactory{
    static create(options){
        let fs = require ('fs')
        let dataString = fs.readFileSync('cookies.txt','UTF8')
        let dataArr = dataString.split('\n')
        let cookiesBasket=[]
        // console.log(dataArr)
        for(let i = 0; i<dataArr.length; i++){
            if(dataArr[i] === 'peanut butter'){
                let peanutButter = new PeanutButter(dataArr[i])
                cookiesBasket.push(peanutButter)
            }else if(dataArr[i] === 'chocolate chip'){
                let chocoChip = new ChocholateChip(dataArr[i])
                cookiesBasket.push(chocoChip)
            }else{
                let otherCookie = new OtherCookie(dataArr[i])
                cookiesBasket.push(otherCookie)
            }
      }
      console.log(cookiesBasket)
  }
}
console.log(CookieFactory.create())

