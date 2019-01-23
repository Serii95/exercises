
    var twentyCharacters    = document.getElementById("twentyCharacters");

    twentyCharacters.addEventListener("click", function(){
        exercise2Point3();
    });

    function exercise2Point3(){
        var notLong = prompt("please insert the text for the exercise 2.3");
        
        tripleDots(notLong);
        
        function tripleDots(notLong){
            if(notLong.length <= "20"){
                console.log(notLong);
            } else {
                var textPortion = notLong.substring(0, 20);
                console.log(textPortion + "...");
            }
        }
        
        }