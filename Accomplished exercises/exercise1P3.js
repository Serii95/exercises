
    var returnFizzBuzz      = document.getElementById("returnFizzBuzz");

    returnFizzBuzz.addEventListener("click", function(){
        exercise1Point3();
    });

    function exercise1Point3(){
        var exercise3Number = prompt("Please insert the exercise 3 number!");
        
        for(var i = 1; i <= exercise3Number; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz");
            }
            else if(i % 3 === 0){
                console.log("Fizz");
            } else if(i % 5 === 0 && i % 3 != 0){
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
        }