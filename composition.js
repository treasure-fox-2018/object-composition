"use strict"
const fs = require ('fs')

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

class Ingredients{
    constructor(){

    }

    


}

class CookieFactory{

    constructor(cookies){
        this.cookies = []
    }

    createCookies(options){
        let dataString = fs.readFileSync('cookies.txt','UTF8')
        let dataArr = dataString.split('\n')
        for(let i = 0; i<dataArr.length; i++){
            if(dataArr[i] === 'peanut butter'){
                let peanutButter = new PeanutButter(dataArr[i])
                this.cookies.push(peanutButter)
            }else if(dataArr[i] === 'chocolate chip'){
                let chocoChip = new ChocholateChip(dataArr[i])
                this.cookies.push(chocoChip)
            }else{
                let otherCookie = new OtherCookie(dataArr[i])
                this.cookies.push(otherCookie)
            }
      }
    //   console.log(this.cookies[0].name)
    return this.cookies
  }

  createIngredients(options){
    let dataString = fs.readFileSync('ingredients.txt','UTF8')
    let dataArr = dataString.split('\n')
    var ingredientsBasket = []
    // console.log(this.cookies)
    for(let i = 0 ; i<this.cookies.length; i++){
        var dataIngredients = dataArr[i].split('=')
        ingredientsBasket.push(dataIngredients)
        if(this.cookies[i].name === 'peanut butter'){
            this.cookies[i].ingredients.push(ingredientsBasket[i][1])                 
        }else if(this.cookies[i].name === 'chocolate chip'){
            this.cookies[i].ingredients.push(ingredientsBasket[i][1])
        }else if(this.cookies[i].name === 'chocolate cheese'){
            this.cookies[i].ingredients.push(ingredientsBasket[i][1])
        }else if(this.cookies[i].name === 'chocolate butter'){
            this.cookies[i].ingredients.push(ingredientsBasket[i][1])
        }
    }    
    }

  
}

// console.log(Ingredients.create())
let cookFactory = new CookieFactory()
cookFactory.createCookies()
cookFactory.createIngredients()
console.log(cookFactory.cookies)

