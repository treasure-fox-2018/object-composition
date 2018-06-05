const fs = require('fs')

class Cookie {
    constructor(ingredients){
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = null
    }
    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie{
    constructor(ingredients){
        super(ingredients)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie{
    constructor(ingredients){
        super(ingredients)
        this.choc_chip_count = 200
    }
}
class OtherCookie extends Cookie{
    constructor(ingredients){
        super(ingredients)
        this.choc_chip_count = 150
    } 
}


class CookieFactory{
    // static splitOption(option){

    // }
    static create(option){
        var cookies = []
        var split = ''
        var listCookies = []
        var splitIngre = []
        var listIngre = []
        // var options = option.split('=')
        for(let i = 0; i < option.length; i++){
            split = options[i].split(' = ')
            listCookies.push(split[0])
            splitIngre.push(split[1])
        }
        for(let j = 0; j < splitIngre.length; j++){
            var ingredientPerCookie = []
            var splitKoma = splitIngre[j].split(',')
            for (let i = 0; i < splitKoma.length; i++) {
                split = splitKoma[i].split(' : ')
                // if(i%2==0){
                    var option = {}
                    option.count = split[0]
                    option.name = split[1]
                    var objOption = new Ingredients(option)
                    // console.log(objOption);
                    
                // }
                ingredientPerCookie.push(objOption)
            }
            listIngre.push(ingredientPerCookie)
        }
        for(let i = 0; i < listCookies.length; i++){   
            // console.log(listCookies);
            if(listCookies[i]==="peanut_butter"){
                
                var peanut_butter = new PeanutButter(listIngre[i])
                peanut_butter.name = listCookies[i]
                peanut_butter.has_sugar = false
                for(var j = 0; j < listIngre[i].length; j++){
                    if(listIngre[i][j].name=="sugar"){
                        peanut_butter.has_sugar = true
                    }
                }
                peanut_butter.ingredients = listIngre[i]
                cookies.push(peanut_butter)
                
            }
            else if(listCookies[i]==="chocolate_chip"){
                // console.log("masuk sini");
                var chocholateChip = new ChocholateChip(listIngre[i])
                chocholateChip.name = listCookies[i]
                chocholateChip.has_sugar = false
                for(var j = 0; j < listIngre[i].length; j++){
                    if(listIngre[i][j].name=="sugar"){
                        chocholateChip.has_sugar = true
                    }
                }
                // chocholateChip.ingredients = listIngre[i]
                cookies.push(chocholateChip)
            }
            else{
                var otherCookie = new OtherCookie(listIngre[i])
                otherCookie.name = listCookies[i]
                otherCookie.has_sugar = false
                for(var j = 0; j < listIngre[i].length; j++){
                    if(listIngre[i][j].name=="sugar"){
                        otherCookie.has_sugar = true
                    }
                }
                // otherCookie.ingredients = listIngre[i]
                cookies.push(otherCookie)
            }
        }
        // console.log(listCookies);
        // console.log(listIngre);
        
        
        return cookies
    }

    static cookieRecommendation(dayFreeSugar,option){
        var cookieFreeSugar = []
        if(dayFreeSugar=="tuesday"){
            for (let i = 0; i < option.length; i++) {
                if(option[i].has_sugar===false){
                    cookieFreeSugar.push(option[i])
                }
            }
        }
        return cookieFreeSugar
    }
}

class Ingredients{
    constructor(option){
        this.name = option.name
        this.amount = option.count
    }

}

var options = fs.readFileSync('cookies.txt','utf8').split('\n')

var batch_of_cookie = CookieFactory.create(options)
let convert = JSON.stringify(batch_of_cookie,null,1)
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookie)
console.log("sugar free cakes are :")
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name);
    
}

// console.log(convert);


// console.log(batch_of_cookie);
