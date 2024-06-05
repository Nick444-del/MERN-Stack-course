//                         4 pillers of oop's                           //
// -------------------------------------------------------------------- //
// | 1. Abstraction  --> process hiding                                 |
// | 2. Encapsulation --> data hiding                                   |
// | 3. Inheritance  -->  getting access to parent class                |
// | 4. Polymorphism  --> same method name but different functionality  |
// -------------------------------------------------------------------- //

// class Parent{
//     get1(){
//         console.log("I am Parent");
//     }
// }

// class Child extends Parent{
//     get2(){
//         super.get1();
//         console.log("I am Child");
//     }
// }

// let obj1 = new Child();
// obj1.get2();

// class Parent{
//     get1(){
//         console.log("I am Parent");
//     }
// }

// class Child extends Parent {
//     get2() {
//         super.get1();
//         console.log("I am Child");
//     }
// }

// class GrandChild extends Child {
//     get3(){
//         super.get2();
//         console.log("I am GrandChild");
//     }
// }

// let obj1 = new GrandChild();
// obj1.get3();

// class Parent{
//     constructor(name){
//         this.a = name;
//     }
// }
// class Child extends Parent{
//     constructor(k){
//         super(k);
//     }
//     get1(){
//         console.log(`My name is ${this.a}`);
//     }
// }
// let obj1 = new Child('ABC');
// obj1.get1();

class Parent{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
}

class Child extends Parent{
    constructor(fname, lname, year){
        super(fname, lname);
        this.year = year;
    }
    welcome(){
        document.write(`Welcome ${this.fname} ${this.lname} in the year ${this.year}`);
    }
}

let a = prompt("Enter your first name: ");
let b = prompt("Enter your last name: ");
let c = prompt("Enter your year: ");

let obj1 = new Child(a,b,c);
obj1.welcome();