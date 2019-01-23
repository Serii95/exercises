
    var verifyCheckSpam     = document.getElementById("verifyCheckSpam");

    verifyCheckSpam.addEventListener("click", function(){
        exercise2Point2();
    });

    function exercise2Point2(){
        var text = prompt("Insert text to be veryfyed by the checkSpam.");
        
        checkSpam(text);
        
        function checkSpam(text){
            text = text.toLowerCase();
            var spamFound = text.includes("spam");
            var sexFound = text.includes("sex");
            if(spamFound){
                console.log("The word 'spam' has been found in the provided text.")
            } else if(sexFound){
                console.log("The word 'sex' has been found in the provided text.")
            } else {
                console.log("The provided text is clean.");
            }
        }
        }
