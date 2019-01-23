
var exponentiation = document.getElementById("exponentiation");

exponentiation.addEventListener("click", function(){
    exercise1Point6();
});

function exercise1Point6(){
    var xNumber = prompt("Please insert the first number");
    var yNumber = prompt("Please insert the second number");
    var zNumber = 0;
    
    multiply(xNumber, yNumber);
    
    function multiply(xNumber, yNumber){
        zNumber = xNumber;
        for(var mNumber = 1; mNumber < yNumber; mNumber++){
            zNumber = zNumber * xNumber
        }
        // return yNumber;
        console.log(zNumber);
    }
    }