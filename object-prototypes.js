// what is prototype?

// prototype is an object in function and object. used to store properties and methods which can be shared by other all instances of that function or object

// const obj={
//     name:"himanshu",
//     age:24
// }

// console.log(obj);

// function details(x){
//     console.log(x);
// }
// details();

// constructor function
function Player(name,age,country){
    this.name=name;
    this.age=age;
    this.country=country;

    // this.details=function(){
    //     console.log(this.name+" "+this.age);
    // }
}
const player1=new Player("abd",39,"south Africa");

// const player2=new Player("Hashim Amla",41,"south Africa");

// creating the function inside the prototype of Player constructor function

Player.prototype.details=function(){
    console.log(this.name+" "+this.age);
}

console.log(player1);

// console.log(player2);