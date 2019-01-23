window.onload = function(){
    var christmassTree  = document.getElementById("christmassTree"),
    displayDiv          = document.getElementById("displayDiv"),
    christmassInput     = document.getElementById("christmassInput"),
    submittChristmass   = document.getElementById("submittChristmass"),
    christmassParagraph = document.getElementById("christmassParagraph");

    christmassTree.addEventListener("click", function(){
        displayDiv.classList.toggle("notDisplayed");
    });

    submittChristmass.addEventListener("click", function(){
        textChristmassTree();
    });

    function textChristmassTree(){
        var height = christmassInput.value;
        var difference = height * 2;
        var width = difference + difference % 2;
        // var width = height * 2 + width % 2; gives out NaN
        var center = width/2;
        var image = "";
        // var display = "";
        
        for(var i = 0; i < height; i++){
            for(var j = 1; j <= width; j++){
                if(j < center-i || j > center+i){
                    image+="0";
                } else {
                    image+="^";
                }
            }
            image+="\n ";
        }
        
        // display = image.substring(0, image.length);
        // console.log(display);
        // christmassParagraph.innerHTML = display;
        
        console.log(image);
        christmassParagraph.innerHTML = image;
        
        }

}