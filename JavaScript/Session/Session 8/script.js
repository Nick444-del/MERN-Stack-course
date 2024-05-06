// 2. For loop

// for (var i=0; i<=5; i++){
//     console.log(i);
// }

// var i = 1;

// for (document.write("Hello user"); i <= 5; i++){
//     document.write(i + "<br>");
// }

// var i;

// for (i=0; i<=15; i++){
//     document.write(i + "<br>");
//     i++;
// }

// var arr1 = [1, 35, 6, 8, 4, 62, 99, 12];

// 1. Method
// for (var i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// 2. Method
// for (var i in arr1) {
//     console.log(arr1[i]);
// }

// 3. Method
// for(var i of arr1){
//     console.log(i);
// }

// var obj1 = [
//     {
//         name: 'ABC',
//         age: 20,
//         email: 'a@a.com',
//         hobby: 'Reading',
//         contact: [12152431261, 16313514713]
//     },
//{
//     name: 'Nitin',
//     age: 21,
//     email: 'n@n.com',
//     hobby: 'Coding',
//     contact: [12152431261, 16313514713]
// }
// ]

// for (var i in obj1) {
//     console.log(obj1[i]);
// }

// var arr2 = [[2, 35, 6], [8, 4, 62]];

// for(var i in arr2){
//     for(var j in arr2[i]){
//         console.log(arr2[i][j]);
//     }
// }

// for (var i = 0; i < arr2.length; i++) {
//     for (var j = 0; j < arr2[i].length; j++) {
//         console.log(arr2[i][j]);
//     }
// }

var obj1 = {
    data: {
        name: 'ABC',
        age: 20,
        email: 'a@a.com',
    }
}

for(var i in obj1){
    for(var j in obj1[i]){
        console.log(obj1[i][j]);
    }
}

var str1 = "Hello";
for(var i in str1){
    console.log(str1[i]);
}