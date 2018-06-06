var fs = require ('fs');

class Cookie {
  constructor(name) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = []
  }

  bake(){
    this.status = 'selesai dimasak'
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 150
  }
}

class CookieFactory {
  static create(options){
    var convert_to_Array = fs.readFileSync(options).toString().split('\n');
    var listCookies = [];

    for (var i = 0; i < convert_to_Array.length-1; i++) {
      if (convert_to_Array[i] === 'peanut butter') {
        let cookies = new PeanutButter(convert_to_Array[i])
        listCookies.push(cookies);
      }else if (convert_to_Array[i] === 'chocolate chip') {
        let cookies = new ChocolateChip(convert_to_Array[i])
        listCookies.push(cookies);
      }else {
        let cookies = new OtherCookie(convert_to_Array[i]);
        listCookies.push(cookies)
      }
    }
    return listCookies;
  }
}


let list_cookies = CookieFactory.create('./cookies.txt')
console.log(list_cookies)
