
var chess = document.getElementById("chess");

chess.addEventListener("click", function(){
    exercise1Point5();
});

function exercise1Point5(){
    var height = prompt("Please insert the maximum height of the board!");
    var width = height;
    var content = "";
    var turn = true;
    
    for(var l = 1; l <= height; l++){
        for(var k = 1; k <= width; k++){
            turn = !turn;
            if(turn){
                content += " ";
            }
            if(!turn){
                content += "#" ;
            }
        }
        turn = !turn;
        if(turn){
            content += "\n ";
        } if (!turn){
            content += "\n#";
        }
    }
    
    console.log(content);
    }
