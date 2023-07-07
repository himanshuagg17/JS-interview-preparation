// Constructor
// It is a special function which creates and initialises an object

// It is used to create new objects which have the same key but different values.
// It acts like a blueprint for objects
// other languages use classes for the same purpose

// example

function Student(name,age,address,contact){
    this.name=name;
    this.age=age;
    this.address=address;
    this.contact=contact
}

const student1=new Student("komal",24,"new ashok nagar",97985175);


// adding a method to the object

student1.details=function(){
    return this.name+" "+this.age;
}

// console.log(student1);

console.log(student1.details());