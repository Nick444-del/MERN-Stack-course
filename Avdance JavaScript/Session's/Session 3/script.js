// const arr1 = [10, 11, 33, 44, 31, 51, 7, 6, 9];
// // console.log(arr1);

// const arr2 = arr1.map((e) => {
//     if(e%2 == 0){
//         return e**2;
//     }else{
//         return e**3;
//     }
// });

// const arr2_d = arr1.map((e) => e % 2 == 0 ? e**2 : e );
// console.log(arr2_d);
// console.log(arr2);

// // ForEach, Reduce
// let arr3 = [10, 2, 3, 5, 7, 6, 11];

// arr3.forEach((e , ind) => {
//     // console.log(e**2);
//     console.log();
// })

// let arr1 = [10, 2, 3, 5, 7, 9, 6];

// let arr2 = arr1.reduce((total, curVal, curInd, arr) => {
//     // return total + curVal;
//     console.log(arr);
// });

// console.log(arr2);

// let arr3 = ['a', 'b', 'c'];
// let arr4 = arr3.reduce((total, curVal) => {
//     // return total + curVal;
//     // return total - curVal;
//     // return total * curVal;
// });

// console.log(arr4);

// let arr1 = [-1, -4, -12, 0, 3, 29, 150];
// let arr2 = arr1.filter((e) => {
//     if(e > 0){
//         return e;
//     }
// });
// let arr3 = arr2.reduce((total, curVal) => {
//     return total + curVal;
// });

// let arr3 = arr1.filter((e) => e > 0).reduce((total, curVal) => (total + curVal), 0);

// console.log(arr3);

