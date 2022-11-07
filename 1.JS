//this===window
var a=10
console.log(a)
console.log(this.a)
console.log(window.a)


function b(){

}
console.log(b)

function c(){
    var x=10// this is not a global space

}