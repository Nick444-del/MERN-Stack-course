// let myPromice1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promice 1 Resoved');
//     }, 3000);
// });

// let myPromice2 = 5;

// let myPromice3 = new Promise((res, rej) => {
//     let num1 = Math.trunc(Math.random() * 10);
//     setTimeout(() => {
//         console.log('Promice 3 is running...');
//         console.log(num1);
//         if (num1 > 5) {
//             res('Promice 3 Resoved');
//         } else {
//             rej('Promice 3 is rejected');
//         }
//     }, 2000);
// });

// Promise.all([myPromice1, myPromice2, myPromice3]).
// then((e) => {console.log(e)}).
// catch((e) => {console.log(e)})

// Promise.allSettled([myPromice1, myPromice2, myPromice3]).
// then((e) => {
//     let b = e.map((a) =>{
//         return a.status
//     })
//     console.log(b);
// }).
// catch((e) => {console.log(e)})

// Promise.race([myPromice1, myPromice3]).
// then((e) => {console.log(e)}).
// catch((e) => {console.log(e)})

// Promise.any([myPromice1, myPromice3]).
// then((e) => {console.log(e)}).
// catch((e) => {console.log(e)});

// let myPromice1 = new Promise((res, rej) => res('Promice 1 Resoved'));
// let myPromice2 = Promise.resolve('Promice 2 Resoved');
// let myPromice3 = Promise.reject('Promice 3 Rejected');

// let a = 'ABC';
// sessionStorage.setItem('name', 'ABC');
// sessionStorage.getItem('name');
// console.log("my name is "+a);
// sessionStorage.removeItem('name');

// let b = 'ABC';

// sessionStorage.setItem('name', 'ABC');
// sessionStorage.setItem('name', 'DEF');

// sessionStorage.getItem('name');

fetch('https://fakestoreapi.com/products').
then((e) => {
    if(e.ok == true){
        return e.json();
    }else{
        return e.status;
    }
}).then((ans) => {
    console.log(ans);
    let a = JSON.stringify(ans);
    sessionStorage.setItem('data', a);
    console.log(sessionStorage.getItem('data'));
}).catch((err) => {
    console.log(err);
});