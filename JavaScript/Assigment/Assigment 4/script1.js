var i = 1;

while(i <= 1000){
    document.write(i + "<br>");
    if(i == 3){
        document.write("Fizz <br>");
    }else if(i == 5){
        document.write("Buzz <br>");
    }else if(i == 35){
        document.write("FizzBuzz <br>");
    }
    i++
}