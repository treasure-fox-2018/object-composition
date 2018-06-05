"use strict"
let fs = require('fs')
// let options = fs.readFileSync('cookies.txt', 'utf8').split('\n');
// let options = fs.readFileSync('cooki es.txt', 'utf8').split('\n')
const options = fs.readFileSync('cookies.txt', 'utf8').split('\n');
// console.log(options)

class Cookie {
  constructor(name, ingredients, sugar) {
    this.name = name
    this.ingredients = ingredients
    this.has_sugar = sugar

  }



  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredients, sugar) {
    super(name, ingredients, sugar)
    this.peanut_count = 100
  }
}

class ChocholateChip extends Cookie {
  constructor(name, ingredients, sugar) {
    super(name, ingredients, sugar)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name, ingredients, sugar) {
    super(name, ingredients, sugar)
    this.other_count = 150
  }
}


class CookieFactory {
  static create(options) {
    const recipe = CookieFactory.getIngredients(options)
    const cookies = [];
    for (let i = 0; i < recipe.length; i += 1) {
      let cookie = ''
      let ingredients = [];
      let sugar = false;
      const ingredientList = recipe[i].ingredients;
      for (let j = 0; j < ingredientList.length; j += 1) {
        const ingredient = ingredientList[j];
        if (ingredient.name === 'sugar') sugar = true;
        ingredients.push(new Ingredient(ingredient));
      }


      let namaKue = recipe[i].name;
      if (namaKue === 'peanut butter') {
        cookie = new PeanutButter(namaKue, ingredients, sugar);
      } else if (namaKue === 'chocolate chip') {
        cookie = new ChocholateChip(namaKue, ingredients, sugar);

      } else {
        cookie = new OtherCookie(namaKue, ingredients, sugar);
      }


      cookies.push(cookie);


    }
    //

    return cookies;
  }


  static cookieRecommendation(day, listCookies) {
    const recommended = []
    if (day === 'tuesday') {
      for (let i = 0; i < listCookies.length; i++) {
        if (!listCookies[i].has_sugar) {
          recommended.push(listCookies[i])
        }
      }
    }
    return recommended

  }



  static getIngredients(options) {
    //
    const recipe = []
    // console.log(options)

    for (let i = 0; i < options.length - 1; i++) {
      let obj = {}
      const input = options[i].split(' =')
      obj.name = input[0]
      // console.log(input)
      // console.log(input[1])
      const list = input[1].split(', ')
      obj.ingredients = []
      for (let j = 0; j < list.length; j++) {
        const ingredient = list[j].split(' : ')
        // console.log(ingredient)
        const name = ingredient[1]
        const amount = ingredient[0]
        obj.ingredients.push({
          name,
          amount
        })
      }
      recipe.push(obj)
    }

    return recipe


  }

  // define other methods as needed
}



class Ingredient {
  constructor(options) {
    this.name = options['name']
    this.amount = options['amount']
  }

  //your method here if needed
}


// console.log(CookieFactory.getIngredients(options))
// contoh driver code
// sesuaikan dengan model inheritance
// baca daftar kue dari file dan kirim ke cookie Factory
// di mana lokasi file yang kamu tulis supaya code bisa berjalan?
let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :");
for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i].name);
}
