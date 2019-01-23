

var repetitive = document.getElementById("repetitive");

repetitive.addEventListener("click", function(){
    exercise1Point1();
});

function exercise1Point1(){
    var number = 0;
    
    while(number <= 100 && number != null){
        number = prompt("Please insert a number higher than 100. (repeating untill user inserts a number > 100)");
    }
    }
    
    function exercise1Point2(){
    var a = prompt("insert the highest number!");
    
    var result = 0;
    for(var i = 2; i <= a; i++){
        if(i % 2 != 0){
            console.log(i);
        }
        
    }
    }