function Person (name , age) {
    this.name = name
    this.age = age
}

Person.prototype.compareAge = function(a) {
        if(this.age > a.age) {
            return `${a.name}  is   younger than me `
        }
        else if( this.age === a.age) {
            return `${a.name} is the same age as me`
        }
        else {
            return `${a.name} is older than me`
        }
}

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2)) 
console.log(p2.compareAge(p1)) 
console.log(p1.compareAge(p3)) 