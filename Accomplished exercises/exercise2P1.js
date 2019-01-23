
var fabonnaci = document.getElementById("fabonnaci");

fabonnaci.addEventListener("click", function(){
    exercise2Point1();
});

function exercise2Point1(){
    var finalNumber = 0;
    var insertedNumber = prompt("please insert a number for the fibonacci sequence");
    finalNumber = (insertedNumber - 1) + (insertedNumber - 2);
    console.log(finalNumber);
    }