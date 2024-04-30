// nested if

function check(){
    var num1 = Number(document.getElementById('num1').value);
    var result = document.getElementById("result");

    if(num1>=0){
        if(num1%2 == 0){
            result.innerHTML = num1 + " is positive and even.";
        }else{
            result.innerHTML = num1 + " is positive and odd.";
        }
    }else{
        if(num1%2 == 0){
            result.innerHTML = num1 + " is negative and even.";
        }else{
            result.innerHTML = num1 + " is negative and odd.";
        }
    }
}

// Switch Case