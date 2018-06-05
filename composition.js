'use strict'
const fs = require('fs')
var options = fs.readFileSync('cookies.txt', 'utf8').split('\n')

class Ingredients{
    constructor(options){
        this.name = options['name']
        this.amount = options['amount']
    }
}

class Cookie{
    constructor(name, ingredients, hasSugar){
        this.name = name
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = hasSugar
    }

    bake(){
        this.status = "selesai masak"
    }

}

class PeanutButter extends Cookie{
    constructor(name, ingredients, hasSugar){
        super(name, ingredients, hasSugar)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie{
    constructor(name, ingredients, hasSugar){
        super(name, ingredients, hasSugar)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name, ingredients, hasSugar){
        super(name, ingredients, hasSugar)
        this.other_count = 150
    }
}

class CookieFactory{
    static create(options){
        let cookies = []
        for(let i=0; i<options.length; i++){
            let hasSugar = false
            let cookieName = options[i].split(" = ")
            if(cookieName[0] === "peanut butter"){
                let listOfIngredients = []
                let ingre = cookieName[1].split(", ")
                for(let i=0; i<ingre.length; i++){
                    let spread = ingre[i].split(" : ")
                    if(spread[1] === "sugar"){
                        hasSugar = true
                    }
                    listOfIngredients.push(new Ingredients({name: spread[1], amount: spread[0]}))
                }
                cookies.push(new PeanutButter(cookieName[0], listOfIngredients, hasSugar))
            } else if(cookieName[0] === "chocolate chip"){
                let listOfIngredients = []
                let ingre = cookieName[1].split(", ")
                for(let i=0; i<ingre.length; i++){
                    let spread = ingre[i].split(" : ")
                    if(spread[1] === "sugar"){
                        hasSugar = true
                    }
                    listOfIngredients.push(new Ingredients({name: spread[1], amount: spread[0]}))
                }
                cookies.push(new ChocolateChip(cookieName[0], listOfIngredients, hasSugar))
            } else {
                let listOfIngredients = []
                let ingre = cookieName[1].split(", ")
                for(let i=0; i<ingre.length; i++){
                    let spread = ingre[i].split(" : ")
                    if(spread[1] === "sugar"){
                        hasSugar = true
                    }
                    
                    listOfIngredients.push(new Ingredients({name: spread[1], amount: spread[0]}))
                }
                cookies.push(new OtherCookie(cookieName[0], listOfIngredients, hasSugar))
            }
        }
        return cookies
    }

    static cookieRecomendation(day, bacth_of_cookies){
        let freeSugarCookie = []
        for(let i=0; i<bacth_of_cookies.length; i++){
            if(bacth_of_cookies[i].has_sugar === false){
                freeSugarCookie.push(bacth_of_cookies[i])
            }
        }
        return freeSugarCookie
    }


}

let bacth_of_cookies = CookieFactory.create(options)
console.log(bacth_of_cookies)
// console.log(bacth_of_cookies[0])

let sugarFreefoods = CookieFactory.cookieRecomendation("tuesday", bacth_of_cookies)
console.log("sugar free cakes are:")
for(let i=0; i<sugarFreefoods.length; i++){
    console.log(sugarFreefoods[i].name);
}

console.log("")
console.log("================= Add Crumbled ==================")
class ChocolateChipCrumbled{
    constructor(name){
        this.name = name
        this.ingredients = []
    }

    ingre(){
        var ingres = ["1 cup : chips", "1 cup : sugar", "2 tsp : butter", "250 gr : chocolate"]
        for(let i=0; i<ingres.length; i++){
            this.ingredients.push(ingres[i])
        }
        return this.ingredients
    }
}

class PeanutButterCrumbled{
    constructor(name){
        this.name = name
        this.ingredients = []
    }

    ingre(){
        var ingres = ["1 cup : flour", "2 cups (gluten) : sugar", "2 cups : peanut butter", "1 cup : cinnamon", "2 tsp : butter"]
        for(let i=0; i<ingres.length; i++){
            this.ingredients.push(ingres[i])
        }
        return this.ingredients
    }
}

let newCrumbled = new ChocolateChipCrumbled("Chocolate Chip Crumbled")
newCrumbled.ingre()
console.log(newCrumbled)

let newPeanutCrumbled = new PeanutButterCrumbled("Peanut Butter Crumbled")
newPeanutCrumbled.ingre()
console.log(newPeanutCrumbled)


