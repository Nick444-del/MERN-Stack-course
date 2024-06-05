// CallBack Function

// function fun1(a,b,add){
//     let ans = a+b;
//     add(ans);
// }

// let x = +prompt("num1: ");
// let y = +prompt("num2: ");

// fun1(x,y, (n) => {
//     alert(n);
// });

// Classes and Objects

// class Car{
//     len = 10;
//     wid = 30;
//     height = 50;
//     color = 'red';

//     drive(){
//         console.log('Driving...')
//     }

//     break1(){
//         console.log('Break...')
//     }
// }

// let car1 = new Car();
// let car2 = new Car();
// let car3 = new Car();
// let car4 = new Car();

// console.log(car1.len);

// car2.color = 'blue';

// console.log(car2.color);
// console.log(car3.color);

// car1.drive();

// Setter and Getter

// class Demo{
//     set1(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     get(){
//         console.log(this.name, this.age);
//     }
// }

// let obj1 = new Demo();
// let obj2 = new Demo();

// obj1.set1("ABC", 33);
// obj2.set1("PQR", 35);
// console.log(obj1.get());
// console.log(obj2.get());

// Constructor

// class Demo1{
//     constructor(name, age){
//         this.a = name;
//         this.b = age;
//     }
//     get(){
//         console.log(`My name is ${this.a} and my age is ${this.b}`);
//     }
// }

// let m = prompt("Enter your name: ");
// let n = +prompt("Enter your age: ");

// let obj1 = new Demo1(m,n);
// obj1.get();

class Demo1{
    // constructor(data){
    //     this.data = data;
    // }
    // get(){
    //     console.log(this.data);
    // }
    constructor(title){
        this.title = title;
    }
    getTitle(){
        // console.log(this.title);
        let arr1 = this.title.map((e) => e.title);
        console.log(arr1);
    }
    getPrice(){
        let arr1 = this.title.filter((e) => {
            if(e.price >= 200){
                console.log(e);
            }
        });
        console.log(arr1);
    }
    getData(m){
        let arr1 = this.title.filter((e) => {
            if(e.title.toLowerCase() == m || e.category.toLowerCase() == m){
                console.log(e);
            }
        });
        console.log(arr1);
    }
}

let maindata = [
    {
        "title": "Oranges",
        "price": 50,
        "status": "out of stock",
        "soldQuantity": "1000",
        "category": "snacks",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Oranges",
        "price": 100,
        "status": "available",
        "soldQuantity": "250",
        "category": "Bread",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Crackers",
        "price": 50,
        "status": "available",
        "soldQuantity": "150",
        "category": "Snacks",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Eggs",
        "price": 200,
        "status": "out of stock",
        "soldQuantity": "500",
        "category": "Meat/Protein",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Potatoes",
        "price": 250,
        "status": "out of stock",
        "soldQuantity": "2000",
        "category": "Fresh Produce",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Sugar",
        "price": 350,
        "status": "available",
        "soldQuantity": "1800",
        "category": "Baking goods",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Cinnamon",
        "price": 250,
        "status": "available",
        "soldQuantity": "2000",
        "category": "Condiments/spices",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Tomatoes",
        "price": 50,
        "status": "Coming Soon",
        "soldQuantity": "0",
        "category": "Fresh Produce",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    },
    {
        "title": "Coconut Oil",
        "price": 200,
        "status": "Coming Soon",
        "soldQuantity": "0",
        "category": "Oils",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsam?",
    }
]

let obj1 = new Demo1(maindata);
// obj1.get();
obj1.getTitle();
obj1.getPrice();

let name = prompt("Enter a title:");
obj1.getData(name);