function Person ( name , age  , favouriteToy) {
    this.name = name
    this.age = age
    this.favouriteToy = favouriteToy
    this.play = function () {
        return `Playing with ${this.favouriteToy}`
    }
    this.stomach = []
    const foods = {
        pizza : 0,
        cheese : 0,
        bread : 0,
        juice : 0
    }

    this.eat = function (...food) {
        if(this.stomach.length < 10 && foods.hasOwnProperty(...food)) {
            food.forEach((f) => this.stomach.push(f))
        }
    }

    this.poop = function (){
     this.stomach.length = 0
   }

   this.toString = function () {
    return `${this.name} , ${this.age}`
   }
}

const baby = new Person("aaa" , 2)
