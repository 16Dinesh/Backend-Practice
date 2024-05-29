// let arr = [1,2,4,5];
// let arr2 = [1,2,4,5];  //prototype funtions exits in every array
// arr.sayhello = () => {
//     console.log(`this is an Array`);   // just to check the prototype 
// }
// arr2.sayhello = () => {
//     console.log(`this is an Array`);   
// }

//factory functions

//template
//     person {
//     name : "this",
//     age : 2;
// }

// function PersonMaker (name , age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`This is my name ${this.name} \n and my age : ${this.age}`);
//         },
//     };
//     return person;
// };

// let p1 = PersonMaker("Dinesh" , 21);
// let p2 = PersonMaker("Varsha" , 21);
// let d3 = PersonMaker("Brutu" , 2);


//new operator
// Constructors -- it doesn't return anything & Start with capital letter

// function Person (name , age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this)
// };

// Person.prototype.talk = function() {
//     console.log(`This is my name: ${this.name} and my age is ${this.age}`)
// }

// let p1 = new Person("Dinesh" , 21);
// let p2 = new Person("Varsha" , 21);
// let d3 = new Person("Brutu" , 2);


// classes 

// class Person {
//     constructor(name , age)  {
//         this.name = name;
//         this.age = age;
//         // console.log(this) 
//     }
//     talk() {
//         console.log(`This is my name: ${this.name} and my age is ${this.age}`)
//     }
// }


// let p1 = new Person("Dinesh" , 21);
// let p2 = new Person("Varsha" , 21);
// let d3 = new Person("Brutu" , 2);



// inheritance

class Person {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi , i am ${this.name} and age is ${this.age}`)
    }
}


class Student extends Person {
    constructor(name , age , marks) {
        super(name,age);
        this.marks = marks;
    }
}




class Teacher extends Person{
    constructor(name , age , subject) {
        super(name,age);
        this.subject = subject;
    }
}