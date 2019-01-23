var checkPalyndrom = document.getElementById("checkPalyndrom");

checkPalyndrom.addEventListener("click", function(){

    var inserted = prompt("please insert a line to be vetyfyed" + "\nin a palindromic manner");

    isPal(inserted);

    function isPal(variable){
        var normal = variable;
        var reversed = "";
        for(var i = variable.length; i > -1;i--){
            var j = i - 1;
            reversed+=normal.substring(j, i);
        }
        if(reversed === normal){
            console.log("true");
        } else if(reversed !== normal){
            console.log("false");
        }
    };

});