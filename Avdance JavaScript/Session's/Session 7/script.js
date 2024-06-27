// Promise
// States
// Fulfilled
// Pending
// Rejected

// let myPromise1 = new Promise((res, rej) => {
//     console.log('Promise is pending...');
//     setTimeout(() => {
//         console.log('I am promice 1');
//         res('resolved');
//     }, 3000);
// });

// myPromise1.then((e) => {
//     console.log(e);
// }).catch((e) => {
//     console.log(e);
// });

// let myPromise2 = new Promise((res, rej) => {
//     console.log('Promise is pending...');
//     setTimeout(() => {
//         console.log('I am promice 2');
//         rej(new Error('I am rejected'));
//     }, 4000);
// });

// myPromise2.then((e) =>{
//     console.log(e);
// });

// myPromise2.catch((e) => {
//     console.log(e);
// });

// console.log(myPromise1);
// console.log(myPromise2);

// Task 1
// let num1 = Math.trunc(Math.random() * 10);
// let myPromise3 = new Promise((res, rej) => {
//     console.log('Promise is pending...');
//     setTimeout(() => {
//     console.log(num1);
//         if(num1 >= 6){
//             res('Resolved');
//         }else{
//             rej(new Error('The number is below 6'))
//         }
//     }, 3000);
// });

// myPromise3.then((e) => {
//     console.log(e);
// }).catch((e) => {
//     console.log(e);
// });

// Closure
// function fun1(a){
//     return function(b){
//         return function(c=30){
//             return a+b+c;
//         }
//     }
// }
// let b = fun1(10)(20)();
// console.log(b);

// Async / Await
function fun1(color, time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            document.querySelector('#box').style.backgroundColor = color;
            res('hi');
        }, time);
    });
}

async function fun2(){
    await fun1('red', 2000);
    await fun1('green', 2000);
    await fun1('blue', 2000);
    await fun1('yellow', 2000);
}

fun2();