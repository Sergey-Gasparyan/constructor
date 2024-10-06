
//apply
function apply (thiss , arg) {
    return Function.prototype.call(thiss, ...arg)
}


//call
function bind (thiss , ...arg) {
    return function (...arg1) {
       return Function.prototype.apply(thiss , arg)
    }
}
