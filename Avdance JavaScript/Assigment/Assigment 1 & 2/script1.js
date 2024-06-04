// Question 1
// let arr1 = [34, 90, 56, 77, 22, 33, 77, 97];

// let arr2 = arr1.filter((ele)=> {
//     if(ele % 2 == 0){
//         return ele;
//     }
// });

// console.log(arr2);

// Question 2
// let arr1 = ['Hello', 'Hello World', 'Welcome', 'Hi'];

// let arr2 = arr1.filter((ele) => {
//     if(ele.length > 5){
//         return ele;
//     }
// });

// console.log(arr2);

// Question 3
// const people = [
//     {name: 'John Doe', age: 30},
//     {name: 'Jane Smith', age: 25},
//     {name: 'Bob Jhonson', age: 40},
//     {name: 'Max Willam', age: 16},
// ];

// let arr2 = people.filter((e) => {
//     if(e.age > 18){
//         return e;
//     }
// });

// console.log(arr2);

// Question 4
// const products = [
//     {name: 'Apple', price: 5},
//     {name: 'Banana', price: 7},
//     {name: 'Orange', price: 10},
//     {name: 'Kiwi', price: 11.2},
//     {name: 'Mango', price: 15},
// ];

// let arr2 = products.filter((e) => {
//     if(e.price >= 10){
//         return e;
//     }
// });

// console.log(arr2);

// Question 5
const cars = [
    {make: 'Toyota', year: '2021'},
    {make: 'Honda', year: '2019'},
    {make: 'Ford', year: '2018'},
    {make: 'Chevrolet', year: '2017'},
    {make: 'Nissan', year: '2016'},
    {make: 'Tesla', year: '2015'},
    {make: 'Volkswagen', year: '2014'},
    {make: 'BMW', year: '2013'},
    {make: 'Mercedes-Benz', year: '2012'},
];

let arr2 = cars.filter((e) => {
    if(e.year < 2015){
        return e;
    }
});

console.log(arr2);

// Question 6
// const number = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

// let arr2 = number.filter((e) => {
//     if(e > 10){
//         return e;
//     }
// });

// console.log(arr2);

// Question 7
const students = [
    { name: 'Alice', grades: [85, 91, 77] },
    { name: 'Bob', grades: [75, 81, 67] },
    { name: 'Charlie', grades: [92, 88, 94] },
    { name: 'Diana', grades: [81, 87, 73] },
    { name: 'Emily', grades: [89, 95, 81] },
];

let arr3 = students.filter((e) => {
    avgGrade = (e.grades[0]+e.grades[1]+e.grades[2])/3;
    console.log(avgGrade);
    if(avgGrade >= 80){
        return e;
    }
});

console.log(arr3);