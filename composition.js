const fs = require ('fs')
const options = 'cookies.txt'

class CookieFactory{
    static create(options){

        let arrData = fs.readFileSync(options,'utf8').split('\n')
        let arrDataObjCookie = []
        let objCookie;

        for (let i = 0 ; i < arrData.length ; i++){
            // let cookie = options[i]
            

            if (arrData[i] === 'peanuts butter') {
                objCookie = new PeanutButter(arrData[i])
            } else if (options[i] === 'chocolate chip'){
                objCookie = new ChocolateChip(arrData[i])
            } else {
                objCookie = new OtherCookie(arrData[i]);
            }
            arrDataObjCookie.push(objCookie)
        }
        
        
        return arrDataObjCookie
    }
}


class Cookie {
    constructor(name){
        this.name = name 
        this.status = 'mentah'
        this.ingredients = []
        this.count =0

    }
    bake(){
        this.status = 'selesai dimasak'
    }
}
class PeanutButter extends Cookie {
    constructor() {
        this.peanut_count = 100
    }
}
class ChocolateChip extends Cookie{
    constructor() {
        this.choc_chip_count = 200
    }
}
class OtherCookie extends Cookie{
    constructor(name) {
        super(name)
        this.choc_cheese_count = 180
    }
}
// class OtherCookie extends Cookie{
//     constructor(name) {
//         super(name)
//         this.choc_butter_count = 120
//     }
// }


let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);

// console.log(arrData)