var a = +prompt("Enter a number: ");

function factorial(a){
    if(a == 0 || a == 1){
        return 1;
    }else{
        return a * factorial(a-1);
    }
}

var ans = factorial(a);
document.write("The Factorial of the given number "+a+" is "+ans);