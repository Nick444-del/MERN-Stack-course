// Question 1
// const number = [1, 2, 3, 4, 5];

// const arr2 = number.map((e) => {
//     return e*e;
// });

// console.log(arr2);

// Question 2
// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const arr2 = words.map((e) => {
//     return e.length;
// });

// console.log(arr2);

// Question 3
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const arr2 = people.map((e) => {
//     return e.name;
// });

// console.log(arr2);

// Question 4
// const number = [1, 2, 3, 4, 5];
// const arr2 = number.map((e) => {
//     return e+e;
// });

// console.log(arr2);

// Question 5
// const words = ['john', 'jane', 'mark', 'sara'];
// console.log(words);

// const arr2 = words.map((e) => {
//     return e.toUpperCase();
// });

// console.log(arr2);

// Question 6
// const string = ['banana', 'apple', 'orange'];

// const arr2 = string.map((e) => {
//     return e.split('').sort().join('');
// });

// console.log(arr2);

// Question 7
const cities = [
    { name: "Los Angeles", population: 3792621 },
    { name: "New York", population: 8175133 },
    { name: "Chicago", population: 2695598 },
    { name: "Houston", population: 2099451 },
    { name: "Philadelphia", population: 1526006 },
];

const arr2 = cities.map((e) => {
    return e.name + ' has a population of ' + e.population+'.<br>';
})

console.log(arr2);
document.write(arr2);
