const fs = require('fs')
const options = fs.readFileSync('cookies.txt','utf8').split('\n')
// console.log(options)

class CookieFactory{
    constructor(){
       
    }

    static create(options){
        this.cookie =[]
        let obj = {}
        const recipe = CookieFactory.generateRecipe(options)

        for(let i=0;i<recipe.length;i++){
            const listIngredient = recipe[i].ingredients
            const ingredients =[]
            let sugar = false
            for(let j=0;j<listIngredient.length;j++){  
                ingredients.push(new Ingredient(listIngredient[j]))
                if(listIngredient[j].name == 'sugar'){
                    sugar = true
                }
            }
            const nameRecipe = recipe[i].name
            if( nameRecipe === 'peanut butter'){
                let peanut = new PeanutButter(nameRecipe,ingredients,sugar)
                this.cookie.push(peanut)
            }
            else if(nameRecipe === 'chocolate chip'){
                let chip = new ChocholateChip(nameRecipe,ingredients,sugar)
                chip.name = nameRecipe
                this.cookie.push(chip)              
            }else{
                let other = new OtherCookie(nameRecipe,ingredients,sugar)
                other.name = nameRecipe
                this.cookie.push(other)
            }


        }
        return this.cookie
     
   
    }


    static generateRecipe(options){
        const recipe =[]
        // console.log(options)
        
        for(let i=0;i<options.length;i++){
            let obj ={}
            const input = options[i].split(' =')
            obj.name = input[0]
            // console.log(input)
            const list = input[1].split(', ')
            obj.ingredients = []
            for(let j=0;j<list.length;j++){
                const ingredient = list[j].split(' : ')
                // console.log(ingredient)
                const name = ingredient[1]
                const amount = ingredient[0]
         
                obj.ingredients.push({name,amount})
                
            }
            recipe.push(obj)
        }
    
        return recipe
        
    }

    static cookieRecommendation(day,listCookies){
        const recommended =[]
        if(day === 'tuesday'){
            for(let i=0;i<listCookies.length;i++){
                if(!listCookies[i].has_sugar){
                    recommended.push(listCookies[i])
                }
            }
        }
        return recommended

    }
}

class Cookie {
    constructor(name,ingredients,sugar){
        this.name = name
        this.ingredients = ingredients
        this.status = 'mentah'
        this.has_sugar = sugar
    }

    bake(){
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie{
    constructor(name,ingredients,sugar){
        super(name,ingredients,sugar)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie{
    constructor(name,ingredients,sugar){
        super(name,ingredients,sugar)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name,ingredients,sugar){
        super(name,ingredients,sugar)
        this.other_count = 150
    }
}

class Ingredient{
    constructor(options){
        this.name = options.name
        this.amount = options.amount
    }
}

// let batch_of_cookies = CookieFactory.generateRecipe(options)
// let stringVersion = JSON.stringify(batch_of_cookies, null, 1)
// console.log(stringVersion)

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday',batch_of_cookies)
console.log(sugarFreeFoods)
console.log("sugar free cakes are :")
for(let i=0;i<sugarFreeFoods.length;i++){
    console.log(sugarFreeFoods[i].name);
}